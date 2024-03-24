// Button.tsx

import React from "react";
import { CSSProperties, MouseEvent } from "react";
import styles from "./Button.module.css";
import Image from "next/image";

interface ButtonProps {
  label: string;
  height?: string;
  width?: string;
  marginTop?: string
  icon?: React.ReactNode;
  fontSize?: string
  borderRadius?: string;
  borderBlock?: string; 
  padding?: string;
  backgroundColor?: string;
  color?: string;
  iconPadding?: string; 
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  height = "40px",
  width = "120px",
  icon,
  padding,
  marginTop="0px",
  fontSize="16px",
  borderRadius = "40px",
  color="Black",
  backgroundColor = "var(--defaultButtonColor)",
  borderBlock, 
  iconPadding = "4px",
  onClick,
  type,
}) => {
  const buttonStyle: CSSProperties = {
    marginTop,
    height,
    width,
    padding,
    backgroundColor,
    color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    fontSize,
    borderRadius,
    borderBlock,
    overflow: "hidden",
    cursor: "pointer",
    outline: "none",
  };

  const iconStyle: CSSProperties = {
    padding: iconPadding,
  }

  return (
    <button className={styles.button} type={type} style={buttonStyle} onClick={onClick}>
     {icon && <span style={iconStyle}>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default Button;
