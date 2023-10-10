import React from "react";
import "./messageText.css";

export function MessageText({ text, setText}) {
	if (!text) return (<></>)
	if (text) return (<div className="messagetext" onClick={() => setText('')}><p>{text}</p></div>)
}