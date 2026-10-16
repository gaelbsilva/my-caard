# my-caard

Site pessoal de página única, feito com intuito de aprender. A ideia é apresentar informações sobre mim: gostos, curiosidades e uma playlist que carrega direto da API do Spotify.

Escolhi Next.js por vontade própria, para aprofundar meus conhecimentos no framework.

## Tecnologias
 
| Tecnologia | Uso |
| --- | --- |
| Next.js (App Router) | Framework principal |
| Tailwind CSS v4 | Estilização |
| Iconify | Biblioteca de ícones (`pixelarticons` e `dinkie-icons`) |
| Radix UI Popover | Janelas flutuantes  |
| Spotify Web API | Dados para playlist |

## Integração com API do Spotify
Esta é a parte mais interessante do projeto, então documentei o passo a passo para a conexão com a API do Spotify.

O fluxo usando Client Credentials não representa nenhum usuário. Desde as mudanças de fevereiro de 2026 na Web API, buscar o conteúdo de uma playlist exige um usuário autenticado, sem isso a API devolve apenas metadados, sem as faixas.
 
Por isso uso o **Authorization Code Flow**, feito apenas uma vez manualmente, para gerar um `refresh_token` da minha própria conta. Esse token fica guardado no servidor e é usado para gerar `access_token`s novos automaticamente (eles expiram em 1 hora). Resultado: o visitante não precisa fazer login em nada.

### 1. Criar o app no Dashboard
1. Acesse o Spotify Developer Dashboard e crie em Create app.
2. Em Redirect URI, cadastre `http://127.0.0.1:3000/callback`.
3. Em Settings, copie o Client ID e o Client Secret.

### 2. Configurar as variáveis de ambiente
Crie um `.env.local` na raiz (veja o `.env.example`):
 
```bash
SPOTIFY_CLIENT_ID=seu_client_id
SPOTIFY_CLIENT_SECRET=seu_client_secret
SPOTIFY_REFRESH_TOKEN=passo_4
SPOTIFY_PLAYLIST_ID=id_da_playlist
```
 
O ID da playlist fica no trecho do link da mesma:
`https://open.spotify.com/playlist/`**`37i9dQZF1DXcBWIGoYBM5M`**`?si=...`

### 3. Autorizar o app
Abra no navegador esta URL em uma única linha, trocando `SEU_CLIENT_ID`:

```
https://accounts.spotify.com/authorize?client_id=SEU_CLIENT_ID&response_type=code&redirect_uri=http://127.0.0.1:3000/callback&scope=playlist-read-private
```

Faça login e autorize. Você será redirecionado para `http://127.0.0.1:3000/callback?code=...`. Copie o valor de `code` (a página pode dar 404, isso não importa).

### 4. Trocar o código pelo refresh token
Agora no seu terminal execute:
```bash
curl -X POST https://accounts.spotify.com/api/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d grant_type=authorization_code \
  -d code=O_CODE_COPIADO \
  -d redirect_uri=http://127.0.0.1:3000/callback \
  -u SEU_CLIENT_ID:SEU_CLIENT_SECRET
```
A respostas virá em JSON, como:
```bash
{
  "access_token": "BQC4YvVy...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "AQBw2p...",
  "scope": "playlist-read-private"
}
```
Copie o `refresh_token` e cole em `.env.local`

### 5. Criar a rota que busca a playlist
Lembrando que o escopo `playlist-read-private` segue o princípio do menor privilégio: o app só pode **ler** playlists, nada mais.

Em `/app/api/spotify-playlist/route.ts`
```ts
import { NextResponse } from "next/server";

async function getAccessToken(){
  const res = await fetch("https://accounts.spotify.com/api/token",{
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  });

  const data = await res.json();
  return data.access_token as string;
}

export async function GET(){
  const accessToken = await getAccessToken();

  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${process.env.SPOTIFY_PLAYLIST_ID}/items`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  const data = await res.json();

  const tracks = data.items.map((entry: any) => ({
    name: entry.item.name,
    artist: entry.item.artists?.map((a: any) => a.name).join(", "),
    image: entry.item.album?.images?.[0]?.url,
    link: entry.item.external_urls?.spotify,
  }));

  return NextResponse.json(tracks);
}
```

Dessa forma, como o `fetch` roda no server-side (API Route do Next.js), o navegador do usuário só recebe o resultado final (a lista de músicas já processada) — nunca vê as credenciais. 

E a cada nova chamada é gerado um novo `access_token` comno ele expira em 1h é exatamente pra isso que o `refresh_token` existe, para gerar access tokens novos sob demanda, de forma automática, sem intervenção manual.

### 6. Consumir no componente
O componente chama a rota do próprio site (`/api/spotify-playlist`), nunca a API do Spotify diretamente:
 
```tsx
const [tracks, setTracks] = useState<Track[]>([]);

useEffect(() => {
  fetch("/api/spotify-playlist")
    .then((res) => res.json())
    .then(setTracks);
}, []);
```
Para mais informações consultar a [Documentação da Web Api](https://developer.spotify.com/documentation/web-api)

## Preview
<div align="center">
    <img src="image.png" alt="Descrição da foto" width="300">
    <img src="image-1.png" alt="Descrição da foto" width="300">
</div>
<center><i>Responsividade para mobile: em breve</i></center>

## Como rodar
```bash
# clonar
git clone https://github.com/gaelbsilva/my-caard.git
cd my-caard
 
# instalar dependências
npm install
 
# configurar variáveis 
cp .env.example .env.local
 
# rodar 
npm run dev
```
## Estrutura
```
my-caard/
├── .env.example                # Modelo das variáveis de ambiente
├── app/
│   ├── api/
│   │   └── spotify-playlist/
│   │       └── route.ts        # Rota server-side que fala com o Spotify
│   ├── globals.css             # Tailwind + personalização customizadas 
│   ├── layout.tsx              # Layout raiz
│   └── page.tsx                # Página home
├── components/                 # Componentes dos cards
├── data/                       # Informações para os cards (JSON)
├── lib/                        # Registro local dos sets do Iconify
└── public/                     # Todas as imagens e gif usados
```

## O que aprendi 
- Rotas de API no App Router e proteção de credenciais no servidor
- Fluxo OAuth 2.0 (Authorization Code) com refresh token
- Experiência com Radix UI
- Controle do elemento `<audio>` (+ `useRef`)

