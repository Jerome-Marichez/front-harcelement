import React from "react";
import { useState, useEffect } from "react";
import "./object.css";

import audio from './object.mp3';
import windows from "./windows.mp3";
import trees from "./trees.mp3";
import chair from "./chair.mp3";
import light from "./light.mp3";

export function Object({ props, setText, hidden, rotate }) {
	const position = {
		bottom: props.bottom || undefined,
		left: props.left || undefined,
		right: props.right || undefined,
		top: props.top || undefined,
	};

	let className = "object";
	if (hidden) { className = "object--hidden" }
	const [delayedRotate, setDelayedRotate] = useState(false);

	useEffect(() => {
		if (rotate) {
			const timer = setTimeout(() => {
				setDelayedRotate(true);

			}, 3000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [rotate]);

	const playAudio = () => {
		switch (props.title) {
			case "trees":
				new Audio(trees).play();
				break;
			case "chair":
				new Audio(chair).play();
				break;
			case "light":
				new Audio(light).play();
				break;
			case "windows":
				new Audio(windows).play();
				break;
			default:
				new Audio(audio).play();
				break;
		}
	}

	const handleClick = () => {
		playAudio();
		setText();
	}
	return (
		<img className={className} onClick={handleClick}
			alt={props.ressources}
			src={rotate && delayedRotate ? props.ressourcesRotate : props.ressources}
			style={position}
		></img >
	)
}