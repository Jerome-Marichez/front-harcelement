import React from "react";
import "./messageText.css";

export function MessageText({ text, setText }) {

	if (!text) return (<></>)
	if (text) return (
		<div className="message">
			<div className="close" onClick={() => setText('')}>X</div>
			<div className="text"><p dangerouslySetInnerHTML={{ __html: `${text}` }}></p>
			</div>
		</div>
		)
}