/* eslint-disable no-undef */
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
	const [billyState, setBillyState] = useState(0);
	const [passwordFound, setPasswordFound] = useState(false);
	const [inventory, setInventory] = useState("Rien dans mon inventaire");

	/** Manage Inventory */
	useEffect(() => {
		let inventory = "";
		if (billyState > 0) { inventory = "- <b>Billy</b> m'a indiqué que l'ancien gardien lisait la 1er page de <b>'Cuisine à la banane'</b> dès qu'il oublié son mot de passe. <br><br>" }
		if (inventory === "") { inventory = "Rien dans mon inventaire" }
		setInventory(inventory);
	}, [anaisState, billyState])
	/** End manage inventory */

	useEffect(() => {
		text?.includes('bibliothèque') ? setBookOpen(true) : setBookOpen(false);
		text?.includes('cassier') ? setLockTry(true) : setLockTry(false);
		text?.includes('Anais') & anaisState === 0 && setAnaisState(1);
		text?.includes('Billy') & billyState === 0 && setBillyState(1);
	}, [text]);


	const selectedLevel = levels.find((level) => level.title_niveau === "level1");
	const objects = selectedLevel.objects;
	const personnages = selectedLevel.personnages;

	return (
		<div className="game">
			<Level map={selectedLevel.map}>
				<div className="inventory" onClick={() => setText(inventory)}><img src="./ressources/inventory/inventory.png" alt="inventory" width="24" />Inventory</div>

				{objects.map((object, index) => {
					return <Object
						key={index}
						props={object}
						setText={() => setText(object.text)}
					/>;
				})}

				{personnages.map((personnage, index) => {
					console.log(personnage.title);
					if (personnage.title === 'anais')
						return (
							<Object
								key={index}
								props={personnage}
								setText={() => setText(personnage.text)}
							/>
						)
					if (personnage.title === 'bob')
						return (
							<Object
								key={index}
								props={personnage}
								setText={() => setText(personnage.text) }
								hidden={() => anaisState > 0 ? false : true}
							/>
						)
					if (personnage.title === 'billy')
						return (
							<Object
								key={index}
								props={personnage}
								setText={() => setText(billyState > 0 ? personnage.text2 : personnage.text)}
							/>
						)
				})}



				<MessageText text={text} setText={setText} />
				<Books isOpen={bookOpen} />
				<Locktry isOpen={lockTry && !passwordFound} unlock={() => setPasswordFound(true)} />
			</Level>


		</div>
	);
}