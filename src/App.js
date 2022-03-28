import React, {useState} from "react";
import Result from "./Result";
import "./style.css";



 const App = () => {

const [name, setName] = useState();
const [password, setPassword] = useState();

const submitted = (e) => {
e.preventDefault()
}

  return (
    <div className="App">
      <h1>Hello</h1>
      <form onSubmit={submitted}>
        <input type="text" onChange={e =>setName(e.target.value) } />
        <input type="Password" onChange={e =>setPassword(e.target.value) } />
       <Result name={name} password={password} />
        </form>
    </div>
  );
};

export default App;