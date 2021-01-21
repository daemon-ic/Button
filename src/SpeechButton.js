/* eslint-disable */

import React, { useEffect, useState } from "react";
import Speech from "react-speech";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function SpeechButton() {
  const [message, setMessage] = useState("");
  const [rerender, setRerender] = useState("");
  const urlArr = [];

  const reroll = () => {
    const timestamp = Date.now();
    setRerender(timestamp);
  };

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     "& > *": {
  //       margin: theme.spacing(1),
  //     },
  //   },
  // }));

  // const [speechStatus, setSpeechStatus] = useState("red");
  // const [toggle, setToggle] = useState(false);
  //========================================================== GETTING ALL OF THE URLS

  // in order to change the color on speech
  // override their function

  // ----- Fired on mount

  //==========================================================

  const style = {
    container: {
      width: "100%",
    },
    text: {
      width: "10%",
      display: "",
      color: "white",
    },

    //----------------------------------------------------- CHANGE HERE

    play: {
      hover: {
        backgroundColor: "#c51162",
        boxShadow: "3px 3px 15px grey",
      },
      button: {
        width: "100px",
        height: "40px",
        cursor: "pointer",
        pointerEvents: "none",
        outline: "none",
        backgroundColor: "#f50057",
        borderRadius: "7px",
        boxShadow: "3px 3px 10px lightgrey",
        border: "0px",
      },
    },

    //----------------------------------------------------- CHANGE HERE

    stop: {
      hover: {
        backgroundColor: "GhostWhite",
      },
      button: {
        width: "100",
        height: "100",
        cursor: "pointer",
        pointerEvents: "none",
        outline: "none",
        backgroundColor: "red",
        border: "solid 1px rgba(255,255,255,1)",
        borderRadius: 6,
      },
    },
    pause: {
      hover: {
        backgroundColor: "GhostWhite",
      },
      button: {
        width: "100",
        height: "100",
        cursor: "pointer",
        pointerEvents: "none",
        outline: "none",
        backgroundColor: "red",
        border: "solid 1px rgba(255,255,255,1)",
        borderRadius: 6,
      },
    },
    resume: {
      hover: {
        backgroundColor: "GhostWhite",
      },
      button: {
        width: "100",
        height: "100",
        cursor: "pointer",
        pointerEvents: "none",
        outline: "none",
        backgroundColor: "red",
        border: "solid 1px rgba(255,255,255,1)",
        borderRadius: 6,
      },
    },
  };
  //==========================================================

  useEffect(() => {
    console.log("useEffect fired!");
    getInfo();
  }, [rerender]);

  // ----- What is benig fired

  const getInfo = () => {
    // -----  Getting API info

    console.log("fetching from: https://foaas.com/operations ");
    fetch(`https://foaas.com/operations`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      // ----- Formats response to JSON

      .then((response) => {
        return response.json();
      })

      //----- Gets the path from each item, than attaches the rest of the URL

      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const getUrl = data[i].url;
          const appliedUrl = "https://foaas.com" + getUrl;

          // ----- Pushes each item into Array

          urlArr.push(appliedUrl);
        }
        createNewUrl(urlArr);
      })

      // ----- Returns error if API call fails

      .catch((err) => console.error(err));
  };

  //==========================================================

  const createNewUrl = (urlArr) => {
    // urlList

    const randomNum = Math.floor(Math.random() * Math.floor(urlArr.length));
    const randomUrl = urlArr[randomNum];

    console.log("converting ", randomUrl);
    const cleanUrl = randomUrl
      .replace(":name", "motherfucker")
      .replace(":do", "shut")
      .replace(":something", "hellup")
      .replace(":noun", "fucking")
      .replace(":reaction", "fuckoff")
      .replace(":thing", "shit")
      .replace(":tool", "yourbrain")
      .replace("version", "madison/motherfucker/:from")
      .replace("operations", "question/:from")
      .replace(":language", "logic")
      .replace(":from", "lilbitch");

    console.log("fetching from : ", cleanUrl);

    fetch(cleanUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const onlyMessage = data.message;
        setMessage(onlyMessage);
      })
      .catch((err) => console.error(err));
  };
  console.log(message);

  return (
    <React.Fragment>
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={reroll}
        onTouchEnd={reroll}
      >
        <Speech
          styles={style}
          textAsButton={true}
          displayText="FUCK"
          text={message}
        />
      </div>
    </React.Fragment>
  );
}

export default SpeechButton;
