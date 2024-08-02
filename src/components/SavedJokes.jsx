import React from "react";
import styles from "./SavedJokes.module.css";
function SavedJokes(props) {
  let savedJokes = props.savedJokes;
  // All the saved jokes are displayed here
  return (
    <>
      {savedJokes.map((i) => {
        return <h1 className="text-dark text-center">{i.jokes}</h1>;
      })}
    </>
  );
}

export default SavedJokes;
