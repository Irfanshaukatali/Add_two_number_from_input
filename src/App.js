import React,{useState} from "react";
import "./style.css";

export default function App() {
const [num1,setNum1] = useState(0)
const [num2,setNum2] = useState(0)
const [result, setResult] = useState(0)

const number1 = (e) =>{
    setNum1(parseInt(e.target.value))
}
const number2=(e)=>{
  setNum2(parseInt(e.target.value))
}
const add=()=>{
  setResult(num1+num2)
}
const sub = ()=>{
  setResult(num1-num2)
}

  return (
    <div>
      <h1>Result:- {result} </h1>
      <input type='text'onChange={number1}/>
      <br/>
      <input type='text'onChange={number2}/>
      <br/>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </div>
  );
}