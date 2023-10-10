import React from "react";
import "./level.css";

export function Level({map, children, nightmode}) {
	let classname = "level";
	if (nightmode) { }
	const style = {
		backgroundImage: `url(${map})`,
	};

	return (
		<div className={classname} style={style}>
			{children}
		</div>

	)

}