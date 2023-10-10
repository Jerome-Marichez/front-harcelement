import "./book.css";
import { useState } from "react";

export function Books({ isOpen }) {
	if (isOpen) {
		return (
			<div className="books">
				<div className="books-text">
					<p>Livre de sciences</p>
					<p>Livre de bricolage</p>
					<p>Livre de cuisine</p>
					<p>Livre de jus orange</p>
					<p>Livre de jardinage</p>
					<p>Livre sur la robotique</p>
					<p>Livre sur les bananes</p>
				</div>
			</div>
		)
	}

	if (!isOpen) {
		return (<></>);
	}

}