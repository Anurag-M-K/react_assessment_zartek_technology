import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="p-10">
      <Header  />
      <Tabs/>
      <Cards/>
    </div>
  );
}

export default App;
