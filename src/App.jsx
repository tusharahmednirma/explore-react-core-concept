import "./App.css";
import Counter from "./counter";
import Friends from "./friends";
import Team from "./team";
import Users from "./users";

function App() {
  function click() {
    alert("button clicked");
  }
  const click2 = () => {
    alert("click me 2");
  };

  const sum = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>React core concepts</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={click}>Click me</button>
      <button onClick={click2}>Click me 2</button>
      <button onClick={() => sum(5)}>Click for sum</button>

      <button
        onClick={() => {
          alert("click me 3");
        }}
      >
        Click me 2
      </button>
      <counter></counter>
    </>
  );
}

export default App;
