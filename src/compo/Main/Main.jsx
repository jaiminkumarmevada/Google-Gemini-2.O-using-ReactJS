

import React from "react";
import { assets } from "../../assets/assets.js";

import { Context } from "../../context/Context";
import "./main.css";

function Main() {
  return (
    <Context.Consumer>
      {({
        prePrompts,
        setPrePrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
      }) => (
        <div className="main">
          <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
          </div>

          <div className="main_container">

{!showResult
?<>  <div className="greet">
<p>
  <span>Hello, Requiter.</span>
</p>
<p>How can I help you today?</p>
</div>
<div className="cards">
<div className="card">
  <p>Compare the diffrence between React and Node</p>
  <img src={assets.compass_icon} alt="" />
</div>
<div className="card">
  <p>Get the latest React project idea</p>
  <img src={assets.bulb_icon} alt="" />
</div>
<div className="card">
  <p>Write one day office leave mail</p>
  <img src={assets.message_icon} alt="" />
</div>
<div className="card">
  <p>Navbar using the JSX</p>
  <img src={assets.code_icon} alt="" />
</div>
</div>
</>
:<div className="result">


<div className="result-title">


  <img src={assets.user_icon} alt="" />
  <p>{recentPrompt}</p>
</div>

<div className="result-data">
  <img src={assets.gemini_icon} alt="" />
  {loading?<div className="loader">

<hr />
<hr />
<hr />



  </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
  
</div>



</div>
}
            <div className="main-bottom">
              <div className="search-box">
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="text"
                  placeholder="Our Own Gemini 2.O"
                />
                <div>
                  <img src={assets.gallery_icon} alt="" />
                  <img src={assets.mic_icon} alt="" />
                {input?<img
                    onClick={() => onSent(input)}
                    src={assets.send_icon}
                    alt=""
                  />:null}  
                </div>
              </div>

              <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so
                double-check its responses. Your privacy & Gemini Apps
              </p>
            </div>
          </div>
        </div>
      )}
    </Context.Consumer>
  );
}

export default Main;
 
/*import React from "react";
import { assets } from "../../assets/assets.js";
import { Context } from "../../context/Context";
import ContextProvider from "../../context/Context";
import "./main.css";
function Main() {



const {
  
  prePrompts,
  setPrePrompts,
  onSent,
  setRecentPrompt,
  recentPrompt,
  showResult,
  loading,
  resultData,
  input,
  setInput
  
} = contextValue;





  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main_container">
        <div className="greet">
          <p>
            <span>Hello, Jaimin.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Hey I'm Jaimin Mevada the React developer</p>
            <img src={assets.compass_icon} />
          </div>
          <div className="card">
            <p>Hey I'm Jaimin Mevada the React developer</p>
            <img src={assets.bulb_icon} />
          </div>
          <div className="card">
            <p>Hey I'm Jaimin Mevada the React developer</p>
            <img src={assets.message_icon} />
          </div>
          <div className="card">
            <p>Hey I'm Jaimin Mevada the React developer</p>
            <img src={assets.code_icon} />
          </div>
        </div>

<div className="main-bottom">

  <div className="search-box">
    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter prompt to Gemini 2.O" />






    <div>
      <img src={assets.gallery_icon}  />
      <img src= {assets.mic_icon}/>
      <img src= {assets.send_icon}
       /></div>
  </div>

<p className="bottom-info">
Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
</p>



</div>



      </div>
    </div>
  );
}

export default Main;
*/                                     