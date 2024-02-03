import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const inputText = useRef();
  const removeBtn = (index) => {
    list.splice(index, 1);
    setItem([...list]);
  };
  return (
    <div>
      <h1>Add your list</h1>
      <input
        placeholder="type here"
        ref={inputText}
        onChange={(e) => setItem(e.target.value)}
      ></input>
      <button
        onClick={() => {
          item && setList([...list, item]);
          inputText.current.value = "";
          setItem("");
        }}
      >
        click here
      </button>
      {list.map((value, index) => {
        return (
          <li key={index}>
            {value} <button onClick={() => removeBtn(index)}>Remove</button>
          </li>
        );
      })}
    </div>
  );
};

export default App;
