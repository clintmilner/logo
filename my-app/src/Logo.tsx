import React from "react";

export type LogoState = "code" | "mountain";

interface LogoProps {
  isCodeState: boolean;
}

const mapStateToLogoState = (isCodeState: boolean): LogoState =>
  isCodeState ? "code" : "mountain";

const Logo = ({ isCodeState }: LogoProps) => {
  return (
    <div className={`${mapStateToLogoState(isCodeState)} container`}>
      <div className="line one" />
      <div className="line two" />
      <div className="line three" />
      <div className="line five" />
      <div className="line four" />
      <div className="line six" />
      <div className="line seven" />
      <div className="line eight" />
      <span className="axis x" />
      <span className="axis y" />
    </div>
  );
};

export default Logo;
