import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase clicked", text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase clicked", text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    // console.log("Uppercase clicked", text);
    let newText = "";
    setText(newText);
  };
  // const boldText = () => {
  //     // console.log("Uppercase clicked", text);
  //     let newText = text.style.color;
  //     text.style.color = 'red';
  //     setText(newText);
  // }
  const handleOnChange = (event) => {
    // console.log("OnChange clicked");
    setText(event.target.value);
  };
  const handleCopy = () => {
    // console.log('handleCopy clicked');
    let copiedText = document.getElementById("myBox");
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
  };

  const handleExtraSpaces = () => {
    let newTxt = text.split(/[ ]+/);
    setText(newTxt.join(" "));
  };
  const [text, setText] = useState("");
  // text = "new text"; //wrong way to change the state
  // setText("new text") // right way to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#2f4f4f" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={clearText}>
            Clear Text
          </button>
          <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0}
            className="btn btn-dark mx-1 my-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces{" "}
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((element) => element.length !== 0).length}{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
