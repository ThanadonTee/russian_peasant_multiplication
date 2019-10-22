import React from "react";
import "./App.css";

function App() {
  function Multiply() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let result = 0;
    while (b > 0) {
      if (b % 2 !== 0) {
        result = result + a;
        a = Math.floor(a * 2);
        b = Math.floor(b / 2);
      } else {
        a = Math.floor(a * 2);
        b = Math.floor(b / 2);
      }
    }
    document.getElementById("ans").innerText = result;
  }
  function Binary() {
    let a = parseInt(document.getElementById("num1").value).toString(2);
    let b = parseInt(document.getElementById("num2").value).toString(2);
    let result = 0;
    let sum = 0;
    while (a.length > 1) {
      if (a[a.length - 1] === 1) {
        sum = sum + parseInt(b, 2);
      }
      a = a.substr(0, a.length - 1);
      b = b + "0";
    }
    result = sum + parseInt(b, 2);
    document.getElementById("ans").innerText = result;
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 id='ans'>Answer Goes here</h1>
        <div>
          <p>
            Number 1 &nbsp;&nbsp;
            <input type='text' name='' id='num1' placeholder='100'></input>
          </p>
          <p>
            Number 2 &nbsp;&nbsp;
            <input type='text' name='' id='num2' placeholder='55'></input>
          </p>
          <input
            type='button'
            value='Click me to Multiply RUSSIAN EDITION'
            onClick={Multiply}
          ></input>
          <br></br>
          <input
            type='button'
            value='Click me to Multiply BINARY RUSSIAN EDITION'
            onClick={Binary}
          ></input>
        </div>
      </header>
    </div>
  );
}

export default App;
