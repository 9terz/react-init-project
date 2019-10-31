import React from "react";
import Counter from "counter";
import CookieClicker from "clicker";

import "./styles/styles.scss";

const App: React.FC<{}> = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="container">
      <CookieClicker onClick={setCount} />
      <Counter count={count} />
    </div>
  );
};

export default App;
