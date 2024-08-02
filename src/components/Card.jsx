import React from "react";
import styles from "./Card.module.css";

function Card({ saveJoke, data, getJoke }) {
  return (
    <>
      <center>
        {/* Get Joke button */}
        <button
          className={`btn btn-success my-3 ${styles.getJoke}`}
          onClick={getJoke}
          Get
          Joke
        >
          Get Joke
        </button>
      </center>
      {data.map((item) => {
        return (
          <>
            {/* Card of jokes */}
            <div class="row">
              <div class={`col-sm-6 ${styles.cardWidth} my-3`}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">JOKE </h5>
                    <p class="card-text">{item.jokes}</p>
                    <button
                      className={`btn btn-success ${styles.saveButton} `}
                      onClick={(e) => saveJoke(e, item)}
                    >
                      {" "}
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Card;
{
}
