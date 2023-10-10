import React from "react";
import "./level.css";

export function Level({map, children}) {
	const style = {
		backgroundImage: `url(${map})`,
	};

	return (
		<div className="level" style={style}>
			{children}
		</div>

	)

}