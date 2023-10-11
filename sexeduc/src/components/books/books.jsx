import "./book.css";
import { useState } from "react";
import close from './close.mp3';
import open from "./open.mp3";

export function Books({ isOpen }) {
	const [contenu, setContenu] = useState('menu');

	const handleBookSelect = (value) => {
		if (value === 'menu') { new Audio(close).play(); setContenu('menu')} else { new Audio(open).play(); setContenu(value);}
	}

	const texte = () => {
		if (contenu === 'menu') return (<>
			<p onClick={() => handleBookSelect('sciences')}>Science Atomique</p>
			<p onClick={() => handleBookSelect('bricolage')}>Bricolage Express</p>
			<p onClick={() => handleBookSelect('orange')}>Jus d'orange Frais</p>
			<p onClick={() => handleBookSelect('vert')}>Jardinage Vert</p>
			<p onClick={() => handleBookSelect('banane')}>Cuisine à la Banane</p>
			<p onClick={() => handleBookSelect('robotique')}>Robotique Explorée</p>
		</>
		)

		if (contenu === 'sciences') return (
			<>
				<div className="back-book" onClick={() => handleBookSelect('menu')}>Retour ⏎</div>
				<div className="book">
					<p>Plongez dans le monde fascinant de la science <span>atomique</span> avec ce livre captivant. </p>
					<p>Découvrez les découvertes et les théories qui ont révolutionné notre compréhension des atomes, des particules subatomiques et de la structure de la matière. Des expériences historiques aux avancées contemporaines, explorez les mystères du monde atomique qui façonnent notre réalité.
					</p>
				</div>
				<img src="./ressources/level1/books/sciences.jpg" alt="science" />
			</>
		)
		if (contenu === 'bricolage') return (
			<>
				<div className="back-book" onClick={() => handleBookSelect('menu')}>Retour ⏎</div>
				<div className="book">
					<p>Ce livre regorge d'idées pour des projets de bricolage simples et abordables qui peuvent transformer votre maison.</p>
					<p>Des astuces pratiques, des instructions détaillées et des conseils d'experts vous guident dans l'amélioration de votre espace de vie, du rafraîchissement des murs à <span>la création de meubles sur mesure</span>.
					</p>
				</div>
				<img src="./ressources/level1/books/bricolage.jpg" alt="bricolage" />
			</>
		)
		if (contenu === 'banane') return (
			<>
				<div className="back-book" onClick={() => handleBookSelect('menu')}>Retour ⏎</div>
				<div className="book">
					<p>Explorez un monde de saveurs avec ce livre de cuisine dédié à la <span>banane</span>. </p>
					<p>Des recettes sucrées aux plats salés, découvrez comment intégrer ce fruit polyvalent dans votre cuisine. Des smoothies crémeux aux desserts gourmands, tout est là pour satisfaire vos papilles.
					</p>
				</div>
				<img src="./ressources/level1/books/bananes.jpg" alt="banane" />
			</>
		)
		if (contenu === 'orange') return (
			<>
				<div className="back-book" onClick={() => handleBookSelect('menu')}>Retour ⏎</div>
				<div className="book">

					<p>Découvrez l'art de préparer des jus d'<span>orange</span> frais et revitalisants à la maison. </p>
					<p>Ce livre vous guide à travers les différentes méthodes d'extraction, vous aide à choisir les meilleures oranges et propose une variété de recettes pour des jus délicieux, qu'il s'agisse de jus pur ou de mélanges créatifs.
					</p>
				</div>
				<img src="./ressources/level1/books/oranges.jpg" alt="orange"/>
			</>
		)
		if (contenu === 'vert') return (
			<>
				<div className="back-book" onClick={() => handleBookSelect('menu')}>Retour ⏎</div>
				<div className="book">

					<p> Cultivez un jardin luxuriant avec les conseils complets de ce guide</p>
					<p> Apprenez à planter des fleurs magnifiques, à entretenir des pelouses verdoyantes et à cultiver des légumes savoureux. Des informations sur la gestion des nuisibles et la création de designs de jardin attrayants sont également incluses.
					</p>
				</div>
				<img src="./ressources/level1/books/plantes.jpg" alt="plantes"/>
			</>
		)
		if (contenu === 'robotique') return (
			<>
				<div className="back-book" onClick={() => handleBookSelect('menu')}>Retour ⏎</div>
				<div className="book">

					<p> Plongez dans l'univers passionnant de la robotique avec ce livre adapté aux débutants.</p>
					<p> Découvrez les bases de la programmation de robots, explorez les différentes applications de la robotique dans la vie quotidienne et lancez-vous dans des projets amusants pour construire vos propres robots.
					</p>
				</div>
				<img src="./ressources/level1/books/robot.jpg" alt="robot" />
			</>
		)
	}

	if (isOpen) {
		return (
			<div className="books">
				<div className="books-text">
					{texte()}
				</div>
			</div>
		)
	}

	if (!isOpen) {
		return (<></>);
	}

}