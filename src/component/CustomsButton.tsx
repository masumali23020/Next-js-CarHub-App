"use client";

import { CustomsButtonProps } from "@/types";

const Button = ({
  isDisabled,
  btnType,
  className,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: CustomsButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${className}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
  </button>
);

export default Button;
