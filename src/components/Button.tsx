import clsx from "clsx";
import css from "./Button.module.css";
const handleClick = () => {
    console.log("I'm a button!");
  };


interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
}

export default function Button({ variant, text }: ButtonProps) {
  return (
    <button className={clsx(css.button, variant && css[variant])} onClick={handleClick}>
      {text}
    </button>
  );
}
