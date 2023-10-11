import React from "react";
import "./locktry.css"
import { useState } from "react";

export function Locktry({ isOpen, setText }) {

	const [inputValue, setInputValue] = useState('');

	const handleUnlockAttempt = () => {
		if (inputValue === 'banane1960') {
			setText()
			alert('Déverrouillage réussi');
		} else {
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