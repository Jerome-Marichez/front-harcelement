import React from "react";
import "./object.css";

export function Object({ props, setText }) {

	const position = {
		bottom: props.bottom || undefined,
		left: props.left || undefined,
		right: props.right || undefined,
		top: props.top || undefined,
	};

	return (
		<img className="object" onClick={setText}
			alt={props.ressources}
			src={props.ressources}
			style={position}
		></img >
	)
}