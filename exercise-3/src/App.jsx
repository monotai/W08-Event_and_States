import React from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */

  /* You will need some function to handle the key pressed and button events */
  const [A, setA] = React.useState("")
  const [B, setB] = React.useState("")
  const [result, setResult] = React.useState("")
  const [error, setError] = React.useState(false)
  
  function onA(event) {
    setA(event.target.value);
  }

  function onB(event) {
    setB(event.target.value);
  }

  function addButton(){
    if(A !== "" && B !== ""){
      const numA = parseFloat(A);
      const numB = parseFloat(B);
      if(!isNaN(numA) && !isNaN(numB)) {
        setResult(numA + numB);
        setError(false);
      }
      else {
        setResult("A and B shall be numbers!");
        setError(true);
      }
    }
    else {
      setResult("");
      setError(false);
    }
  }

  function setResultColor(){
    if(error){
      return "red";
    }
    else {
      return "white";
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={result} style={{color: setResultColor()}} disabled />
      <button onClick={addButton}>Compute</button>
    </main>
  );
}

export default App;
