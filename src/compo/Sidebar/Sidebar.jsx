import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets.js";
import "./sidebar.css";
import { Context } from '../../context/Context';

function Sidebar() {
  const [extended, setExtended] = useState(false);
  const { onSent, prePrompts, setRecentPrompt ,newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const toggle = () => {
    setExtended(previous_value => !previous_value);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" onClick={toggle} src={assets.menu_icon} alt="Picture not found" />
        <div onClick={()=>newChat()} className="new-chat">
          <img className="menu" src={assets.plus_icon} alt="Picture not found" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prePrompts.map((item, index) => (
  <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
    <img src={assets.message_icon} alt="icon" />
    <p>{item.length > 18 ? `${item.slice(0, 18)}...` : item}</p>
  </div>
))}

          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="icon" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
