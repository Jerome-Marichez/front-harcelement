import React from "react";
import "./level.css";

export function Level({ map, children }) {
	let classname = "level";

	const style = {
		backgroundImage: `url(${map})`,
	};
	
	return (
		<div className={classname} style={style}>
			{children}
		</div>

	)
}