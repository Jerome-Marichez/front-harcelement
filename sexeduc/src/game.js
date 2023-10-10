import React from "react";
import levels from "./data/levels.json";
import "./game.css";
import { Level } from "./components/level/level.jsx";
import { Object } from "./components/object/object.jsx";
import { useState } from "react";
import { MessageText } from "./components/messageText/messageText";
import { Books } from "./components/books/books";

export function Game() {
	const [text, setText] = useState("Bonjour vous êtes le nouveau gardien(e) de l'entreprise malheureusement les disjoncteurs ont peter les plombs vous devez trouvez la clé manuel, votre précédesseur l'a malheureusement oubliez de vous indiquez le mot de passe de son cassier ou ce trouve la clé, trouvez les indices qui vous permetterons de la récuperer");
	const selectedLevel = levels.find((level) => level.title_niveau === "level1");
	const objects = selectedLevel.objects;

	
	return (
		<div className="game">
			<Level map={selectedLevel.map} nightmode={true}>
				{objects.map((object, index) => {
					return <Object
						key={index}
						index={index}
						props={object}
						setText={() => setText(object.text)}
					/>;
				})}
			</Level>

			<MessageText text={text} setText={setText} />
			<Books isOpen={false}/>
		</div>
	);
}