import React, { useState } from "react";
import "./styles.css";
// var likeCounter = 0;
var color = "red";
var userName = "inside";
var welcomeUser = "outt";
var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😨": "Fearful Face",
  "😞": "Disappointed Face",
  "😎": "Smiling Face with Sunglasses",
  "🤢": "Nauseated Face",
  "😩": "Weary Face",
  "😫": "Tired Face"
};

var emojisWeKnow = Object.keys(emojiDictionary); //converting object/dictionary to array
export default function App() {
  // const [userInput, setUserInput] = useState("");
  // const[likeCounter, setLikeCounter] = useState(0)

  // function inputChangeHandler(event) {
  //   setUserInput(event.target.value);
  // }
  // function likeHandler() {
  //   setLikeCounter(likeCounter + 1);
  // }
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    // var meaning =  emojiDictionary[userInput];
    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("we dont have this in database");
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      {/* <button onClick={likeHandler}>Like Me!!</button>
      {likeCounter}  */}
      {/* <input onChange={inputChangeHandler}></input> */}
      <h1 style={{ color }}>
        {welcomeUser}
        {userName}
      </h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>
      {/* //Actual output set by react using react */}

      <h3> Emojis we know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      {/* <div> {"Welcome " + userInput} </div> */}
    </div>
  );
}

// VISER-- View -> Interact -> State in Event Handler -> Render
