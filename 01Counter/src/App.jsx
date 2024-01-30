import { useState } from "react";
import "./App.css";

function App() {
    let [counter, setCounter] = useState(10);

    function addValue() {
        setCounter((previousCounter) => previousCounter + 5);
        setCounter((previousCounter) => previousCounter + 5);
        setCounter((previousCounter) => previousCounter + 5);
        setCounter((previousCounter) => previousCounter + 5);
    }

    function removeValue() {
        if (counter === 0) return;
        setCounter(counter - 5);
    }

    return (
        <>
            <h1>chai aur code</h1>
            <h2>Counter value: {counter}</h2>

            <button onClick={addValue}>add value</button>
            <br />
            <button onClick={removeValue}>remove value</button>
        </>
    );
}

export default App;
