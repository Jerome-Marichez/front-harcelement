import React from "react";
import "./messageText.css";
import audio from "./close.mp3"; 

export function MessageText({ text, setText }) {

	const handleClick = () => {
		playAudio();
		setText();
	}
	const playAudio = () => {
		new Audio(audio).play();
	}

	if (!text) return (<></>)
	if (text) return (
		<div className="message">
			<div className="close" onClick={handleClick}>X</div>
			<div className="text"><p dangerouslySetInnerHTML={{ __html: `${text}` }}></p>
			</div>
		</div>
		)
}