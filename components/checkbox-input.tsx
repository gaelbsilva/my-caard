import { Icon } from "@iconify/react";

interface CheckboxProps{
    text: string
}

export default function Checkbox({ text }: CheckboxProps){
  return(
    <label className="relative inline-flex items-center text-white cursor-pointer">
      <input type="checkbox" className="peer sr-only" />
      <Icon
        icon="dinkie-icons:ballot-box-with-check-filled"
        className="opacity-0 peer-checked:opacity-100 "
        width={24}
        color="#1447e6"
      />
      <Icon
        icon="dinkie-icons:whitesquare"
        className="peer-checked: absolute inset-0"
        width={24}
        color="#1447e6"
      />
      <span className="peer-checked:text-zinc-600 peer-checked:line-through ml-2 transition-colors">{text}</span>
    </label>
  );
}