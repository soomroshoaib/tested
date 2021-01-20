
import React,{useState, useEffect} from "react";
import axios from "axios";
import './Api.css';



function Api() {
  const [num, setnum] = useState();
  const [name, setname] = useState();
  const [moves, setmove] = useState();

  useEffect(() => {
    // alert("hello shoaib")
    async function getdata(){
      const ape = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(ape.data);
      setname(ape.data.name);
      setmove(ape.data.moves.length);
      
    }
    getdata();
   
  })
return (
    <div className="Api">
    <h1>Choose your <span style={{color:"blue"}}>   {num} </span> value</h1>
    <h1> my name is <span style={{color:"pink"}}>   {name}  </span> </h1>
    <h1>I have  <span style={{color:"yellow"}}>   {moves}   </span> </h1>
      
       <select
       value={num}
       onChange = {(event) => {
         setnum(event.target.value)
       }}
       
       >
         <option value="1">1</option>
         <option value="25">25</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
       </select>
      
    </div>
  );
}

export default Api;