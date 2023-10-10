import React from "react";
import { useState, useEffect } from "react";
import "./object.css";

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

	return (
		<img className={className} onClick={setText}
			alt={props.ressources}
			src={rotate && delayedRotate ? props.ressourcesRotate : props.ressources}
			style={position}
		></img >
	)
}