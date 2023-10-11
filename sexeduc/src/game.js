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
import { redirect } from "react-router-dom";


export function Game() {

	const [text, setText] = useState("Bonjour vous êtes le nouv(eau)(elle) gardien(e) de l'entreprise malheureusement l'ascenseur est resté bloqué électroniquement, vous devez trouvez la clé 🔑");
	const [bookOpen, setBookOpen] = useState(false);
	const [lockTry, setLockTry] = useState(false);

	const [anaisState, setAnaisState] = useState(0);
	const [billyState, setBillyState] = useState(0);
	const [foundItems, setFoundItems] = useState(0);
	const [inventory, setInventory] = useState("Rien dans mon inventaire");

	/** Manage Inventory */
	useEffect(() => {
		let inventory = "";
		if (billyState === 1) { inventory = inventory + "- <b>Billy</b> m'a indiqué que l'ancien gardien lisait la 1er page de <b>'Cuisine à la banane'</b> dès qu'il oublié son mot de passe. <br><br>" }
		if (anaisState === 1) { inventory = inventory + "- <b>Anais</b> m'a indiquée que l'ancien gardien utilisé entre autre <b>1960</b> pour son mot de passe.<br><br>" }
		if (foundItems === 1) { inventory = inventory + "- Vous avez trouvez une clé 🔑 <br><br> - Vous avez trouvez un téléphone. 📱" }
		if (inventory === "") { inventory = "Rien dans mon inventaire" }
		setInventory(inventory);
	}, [anaisState, billyState, foundItems])
	/** End manage inventory */

	/** Progression */
	useEffect(() => {
		text?.includes('bibliothèque') ? setBookOpen(true) : setBookOpen(false);
		text?.includes('casier') ? setLockTry(true) : setLockTry(false);
		text?.includes('Anais') & anaisState === 0 && setAnaisState(1);
		text?.includes('Billy') & billyState === 0 && setBillyState(1);
		text?.includes('téléphone') & foundItems === 0 && setFoundItems(1);
		if (text?.includes('Fin')) {
			console.log("fin du niveau");
			setTimeout(() => { window.location.replace("/video"); }, 8000);
		}
	}, [text]);
	/** End Progression */

	const selectedLevel = levels.find((level) => level.title_niveau === "level1");
	const objects = selectedLevel.objects;
	const personnages = selectedLevel.personnages;

	return (
		<div className="game">
			<Level map={selectedLevel.map}>
				<div className="inventory" onClick={() => setText(inventory)}><img src="./ressources/inventory/inventory.png" alt="inventory" width="24" />Inventaire</div>

				{objects.map((object, index) => {
					return <Object
						key={index}
						props={object}
						setText={() => (object.title === "ascenseur" && foundItems === 1) ? setText(object.endtext) : setText(object.text)}
					/>;
				})}

				{personnages.map((personnage, index) => {
					console.log(personnage.anaisState);
					if (personnage.title === 'anais')
						return (
							<Object
								key={index}
								props={personnage}
								setText={() => setText(anaisState === 1 ? personnage.text2 : personnage.text)}
								rotate={anaisState > 0 ? true : false}
							/>
						)
					if (personnage.title === 'bob') {
						console.log("anais:" + anaisState);
						return (
							<Object
								key={index}
								props={personnage}
								setText={() => setText(personnage.text)}
								hidden={anaisState === 1 ? true : false}
							/>
						)
					}
					if (personnage.title === 'billy')
						return (
							<Object
								key={index}
								props={personnage}
								setText={() => setText(billyState === 1 ? personnage.text2 : personnage.text)}
							/>
						)
				})}

				<MessageText text={text} setText={setText} />
				<Books isOpen={bookOpen} />
				<Locktry isOpen={lockTry} setText={() => setText("- Vous avez trouvez une clé 🔑 <br><br> - Vous avez trouvez un téléphone 📱")} />
			</Level>


		</div>
	);
}