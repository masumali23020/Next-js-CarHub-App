import { MouseEventHandler } from "react";

export interface CustomsButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  className?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
