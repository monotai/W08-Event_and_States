import React from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */

  /* You will need a function to handle a key pressed on the first input and update the state*/

  const [text, setText] = React.useState("")

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input value={text} onChange={event => {setText(event.target.value)}}/>

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input value={text.toUpperCase()} disabled />
      </p>
    </main>
  );
}

export default App;
