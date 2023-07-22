import "./App.css";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

function App() {
  return (
    <div className=" mx-auto max-w-[1440px] bg-neutral-off-white px-4 py-3">
      <Navigation />
      <Content />
      <div className=" mt-10 hidden text-center text-xl xl:block ">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className=" whitespace-nowrap text-primary-soft-red " href="#">
          Wojciech Grochecki
        </a>
        .
      </div>
    </div>
  );
}

export default App;
