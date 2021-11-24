import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text is Cleared", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is Copied", "success");
  };
  const [text, setText] = useState(" ");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="container d-flex justify-content-center">
          <button
            disabled={text.length === 0}
            className={`btn btn-outline-${
              props.mode === "dark" ? "light" : "dark"
            } btn-sm mx-2 my-2`}
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn-outline-${
              props.mode === "dark" ? "light" : "dark"
            } btn-sm mx-2 my-2`}
            onClick={handleLoClick}
          >
            Convert to lowercase
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn-outline-${
              props.mode === "dark" ? "light" : "dark"
            } btn-sm mx-2 my-2`}
            onClick={handleClClick}
          >
            Clear
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn-outline-${
              props.mode === "dark" ? "light" : "dark"
            } btn-sm mx-2 my-2`}
            onClick={handleCopy}
          >
            Copy
          </button>
          <button
            className={`btn btn-outline-${
              props.mode === "dark" ? "light" : "dark"
            } btn-sm mx-2 my-2`}
            onClick={handleExtraSpaces}
          >
            Clear extra
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
