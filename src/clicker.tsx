import React, { useState, ReactNode, Component } from "react";

import "./styles/styles.scss";
interface ClickerProps {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => number;
  count: number;
}
const CookieClicker: React.FC<ClickerProps> = ({ clickHandler, count }) => {
  return (
    <div className="cookie" onClick={clickHandler(count + 1)}>
      <img src="https://images-gmi-pmc.edge-generalmills.com/8012d5ca-eb39-4901-91a0-0bdddec883b8.jpg"></img>
    </div>
  );
};

export default CookieClicker;
