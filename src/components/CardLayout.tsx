

import React, { ReactNode } from "react";
import { CSSProperties } from "react";

interface CardLayoutProp {
  height?: string;
  width?: string;
  marginTop?: string;
  fontSize?: string;
  backgroundColor?: string;
  boxShadow?: string;
  justifyContent?: string;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" ;
  borderRadius?: string;
  marginLeft?: string;
  gap?: string;
  marginRight?: string;
  cursor?: string,
  children: ReactNode; 
  alignItems?: string;
  border?: string;
  marginBottom?: string;
}

const CardLayout: React.FC<CardLayoutProp> = ({
  height = "40px",
  width = "120px",
  marginTop="0px",
  marginLeft="20px",
  marginRight="0px",
  boxShadow = "0px",
  flexDirection = "row",
  justifyContent="center",
  gap="0px",
  border="none",
  cursor= "pointer",
  borderRadius,
  alignItems= "center",
  marginBottom="",
  children

}) => {
  const cardLayoutStyle: CSSProperties = {
    marginTop,
    height,
    width,
    boxShadow,
    flexDirection,
    marginLeft,
    marginRight,
    gap,
    marginBottom,
    display: "flex",
    alignItems,
    justifyContent,
    border,
    borderRadius,
    cursor,
    outline: "none",
  };

  return <div style={cardLayoutStyle} >
    {children}
  </div>
};

export default CardLayout;
