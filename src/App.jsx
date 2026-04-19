// App.jsx

import "./App.css";
import FAQ from "./Component/FAQ";
import Hero from "./Component/Hero";
import TopPublication from "./Component/TopPublication";
import TopratingBook from "./Component/TopratingBook";

function App() {
  return (
    <>
      <Hero />
      <TopratingBook />
      <TopPublication></TopPublication>
      <FAQ></FAQ>
    </>
  );
}

export default App;