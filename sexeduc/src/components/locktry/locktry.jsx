import React from "react";
import "./locktry.css"
import error from "./error.mp3";
import valid from "./valid.mp3";

import { useState } from "react";

export function Locktry({ isOpen, setText }) {

	const [inputValue, setInputValue] = useState('');

	const handleUnlockAttempt = () => {
		if (inputValue === 'banane1960') {
			new Audio(valid).play();
			setText()
			alert('Déverrouillage réussi');
		} else {
			new Audio(error).play();
			alert('Déverrouillage échec');
		}
	};

	if (isOpen) {
		return (
			<div className="locktry">
				<img src="./ressources/level1/locktry/locktry.jpg" alt="locktry"/>
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button onClick={handleUnlockAttempt}>Essayer de déverrouiller</button>
			</div>
		)
	}

	if (!isOpen) {
		return (<></>);
	}

}