import React, { createContext, useState, useEffect } from "react";
import run from "../config/gemini";

export const Context = createContext();

function ContextProvider(props) {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prePrompts, setPrePrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData(prev => prev + nextWord);
    }, 75 * index);
  };


const newChat =()=>{
  setLoading(false)
  setShowResult(false)
}







  const onSent = async (input) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;

    if (input !== undefined) {
      response = await run(input);
      setPrePrompts(prev => [...prev, input]); // Ensure this always runs
      setRecentPrompt(input);
    } else {
      response = await run(recentPrompt);
    }

    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("<br/>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prePrompts,
    setPrePrompts,
    onSent,
    resultData,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;
