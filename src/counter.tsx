import React, { useState, ReactNode, Component, FC } from "react";

import "./styles/styles.scss";

interface CountProps {
  count: number;
}

const Counter: React.StatelessComponent<CountProps> = ({ count }) => {
  return (
    <div className="counter">
      <p>{count}</p>
    </div>
  );
};

export default Counter;
