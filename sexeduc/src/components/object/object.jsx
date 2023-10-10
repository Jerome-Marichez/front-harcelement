import React from "react";
import "./object.css";

export function Object({ props }) {
	console.log(props.bottom);
	const position = props.bottom ? { bottom: props.bottom } : {} && props.left ? { left: props.left } : {} && props.right ? { right: props.right } : {} && props.bottom ? { bottom: props.bottom } : {}
	
	return (
		<img className="object"
			alt={props.ressources}
			src={props.ressources}
			style=
			{position}
		></img >
	)
}