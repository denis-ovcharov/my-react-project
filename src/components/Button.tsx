import clsx from "clsx";
import css from "./Button.module.css";
import { useState } from "react";


interface ButtonProps {
  variant?: "primary" | "secondary";
  direction: "left" | "right";
}
 

export default function Button({ direction, variant }: ButtonProps) {
  const [clicks, setClicks] = useState(0);
    const handleClick = () => {
      setClicks(clicks + 1);
      console.log(`You clicked ${direction} button`);

    };
  return (
    <button className={clsx(css.button, variant && css[variant])} onClick={handleClick}>
       Clicks: {clicks} 
    </button>
  );
}
