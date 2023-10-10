import React from "react";
import levels from "./data/levels.json";
import "./game.css";
import { Level } from "./components/level/level.jsx";
import { Object } from "./components/object/object.jsx";
import { MessageText } from "./components/messageText/messageText";
import { Locktry } from "./components/locktry/locktry";
import { Books } from "./components/books/books";
import { useState, useEffect } from "react";

export function Game() {
	const [text, setText] = useState("Bonjour vous êtes le nouveau gardien(e) de l'entreprise malheureusement les disjoncteurs ont peter les plombs vous devez trouvez la clé manuel, votre précédesseur l'a malheureusement oubliez de vous indiquez le mot de passe de son cassier ou ce trouve la clé, trouvez les indices qui vous permetterons de la récuperer");
	const [bookOpen, setBookOpen] = useState(false);
	const [lockTry, setLockTry] = useState(false);
	const [anaisState, setAnaisState] = useState(0);
	const [inventaire, setInventaire] = useState('');
	const [passwordFound, setPasswordFound] = useState(false);

	useEffect(() => {
		text?.includes('bibliothèque') ? setBookOpen(true) : setBookOpen(false);
		text?.includes('cassier') ? setLockTry(true) : setLockTry(false);
		text?.includes('anais') & anaisState === 0 && setAnaisState(1);
	}, [text]);


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
			<Books isOpen={bookOpen} />
			<Locktry isOpen={lockTry && !passwordFound} unlock={() => setPasswordFound(true)} />
		</div>
	);
}