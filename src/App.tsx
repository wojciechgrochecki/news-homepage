import "./App.css";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

function App() {
  return (
    <div className=" mx-auto max-w-[1440px] bg-neutral-off-white px-4 py-3">
      <Navigation />
      <Content />
    </div>
  );
}

export default App;
