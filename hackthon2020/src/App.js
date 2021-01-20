
import React,{useState } from "react";
// import axios from "axios";
import './App.css';



function App() {
  const [input, setinput] = useState("")
  const [item, setitem] = useState([])


  

  const itemEvent =(event) =>{
    setinput(event.target.value)
  }

  const listButton = ()=>{
    setitem((olditem=>{
      return [...olditem, input]
    }))
    setinput("")

  }
 
return (
    <div className="App">

    <h1>ToDo LiSt</h1>
    <br />

    <input type="text" placeholder="add your item"  value={input} onChange={itemEvent} />

    <button onClick={listButton}> + </button>

    <br />

    <ol>


    {/* <li> {input}</li> */}

    {item.map((itemval) => {
      return <li> {itemval} </li>;
    }
    )}


    </ol>
    
      
    </div>
  );
}

export default App;
