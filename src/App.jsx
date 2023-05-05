import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="sm:p-10 p-5">
      <Header  />
      <Tabs/>
      <Cards/>
    </div>
  );
}

export default App;
