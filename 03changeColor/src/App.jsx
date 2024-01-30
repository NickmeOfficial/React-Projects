import { useState } from "react";
import "./App.css";

function App() {
    const [color, setColor] = useState("black");
    return (
        <>
            <div className='main' style={{ backgroundColor: color }}>
                <div className='container'>
                    <button
                        onClick={() => setColor("red")}
                        className='button'
                        style={{ backgroundColor: "red" }}>
                        red
                    </button>
                    <button
                        onClick={() => setColor("blue")}
                        className='button'
                        style={{ backgroundColor: "blue" }}>
                        blue
                    </button>
                    <button
                        onClick={() => setColor("yellow")}
                        className='button'
                        style={{ backgroundColor: "yellow" }}>
                        yellow
                    </button>
                    <button
                        onClick={() => setColor("green")}
                        className='button'
                        style={{ backgroundColor: "green" }}>
                        green
                    </button>
                    <button
                        onClick={() => setColor("olive")}
                        className='button'
                        style={{ backgroundColor: "olive" }}>
                        olive
                    </button>
                    <button
                        onClick={() => setColor("pink")}
                        className='button'
                        style={{ backgroundColor: "pink" }}>
                        pink
                    </button>
                    <button
                        onClick={() => setColor("salmon")}
                        className='button'
                        style={{ backgroundColor: "salmon" }}>
                        salmon
                    </button>
                    <button
                        onClick={() => setColor("orange")}
                        className='button'
                        style={{ backgroundColor: "orange" }}>
                        orange
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
