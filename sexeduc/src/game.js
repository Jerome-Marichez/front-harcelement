import React from "react";
import levels from "./data/levels.json";
import "./game.css";
import { Level } from "./components/level/level.jsx";
import { Object } from "./components/object/object.jsx";

export function Game() {
	const selectedLevel = levels.find((level) => level.title_niveau === "level1");
	console.log(selectedLevel.map);
	const objects = selectedLevel.objects;
	console.log(objects);

	return (
		<div className="game">
			<Level map={selectedLevel.map}>
			{objects.map((object, index) => {
				return <Object
					key={index}
					index={index}
					props={object}
				/>;
			})}
			</Level>
		</div>
	);
}