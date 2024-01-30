import "./App.css";
import Card from "./components/card";

function App() {
    let person = {
        name: "purva talekar",
        age: 20,
    };
    return (
        <>
            <Card user='nikhil' sameobj={person}></Card>
        </>
    );
}

export default App;
