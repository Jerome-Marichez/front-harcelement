import React, { useState } from 'react';
import './Scene.css';

function Scene() {
    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
    });

    const [showAnswers, setShowAnswers] = useState(false);

    const handleAnswerChange = (question, answer) => {
        setAnswers({ ...answers, [question]: answer });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Vous pouvez traiter les réponses ici, par exemple, en évaluant les scénarios de harcèlement.

        // Activer l'affichage des réponses
        setShowAnswers(true);
    };

    return (
        <div>
            <h1>Quiz Formation</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Section 1: Conversation entre Billy et l'utilisateur</h2>
                    <p>1. Dans la conversation, Billy propose de prendre un verre. Comment devriez-vous réagir ?</p>
                    <label>
                        <input
                            type="radio"
                            name="q1"
                            value="accepter"
                            checked={answers.q1 === 'accepter'}
                            onChange={() => handleAnswerChange('q1', 'accepter')}
                        />
                        Accepter immédiatement
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q1"
                            value="ignorer"
                            checked={answers.q1 === 'ignorer'}
                            onChange={() => handleAnswerChange('q1', 'ignorer')}
                        />
                        Ignorer la proposition
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q1"
                            value="décliner"
                            checked={answers.q1 === 'décliner'}
                            onChange={() => handleAnswerChange('q1', 'décliner')}
                        />
                        Décliner poliment
                    </label>
                    {showAnswers && answers.q1 === 'accepter' && (
                        <p>Correction : La réponse correcte est "Décliner poliment".</p>
                    )}
                </div>

                <div>
                    <h2>Section 2: Conversation entre Anaiss et Bob</h2>
                    <p>2. Dans la deuxième conversation, comment Anaiss devrait-elle réagir à l'initiative de Bob ?</p>
                    <label>
                        <input
                            type="radio"
                            name="q2"
                            value="donner une claque"
                            checked={answers.q2 === 'donner une claque'}
                            onChange={() => handleAnswerChange('q2', 'donner une claque')}
                        />
                        Donner une claque
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q2"
                            value="ignorer"
                            checked={answers.q2 === 'ignorer'}
                            onChange={() => handleAnswerChange('q2', 'ignorer')}
                        />
                        Ignorer
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q2"
                            value="discuter"
                            checked={answers.q2 === 'discuter'}
                            onChange={() => handleAnswerChange('q2', 'discuter')}
                        />
                        Engager une discussion
                    </label>
                    {showAnswers && answers.q2 === 'discuter' && (
                        <p>Correction : La réponse correcte est "Donner une claque".</p>
                    )}
                </div>

                <div>
                    <h2>Section 3: Conversation entre Anaiss et l'utilisateur</h2>
                    <p>3. Dans la conversation avec l'utilisateur, quel est le mot de passe pour réparer l'ascenseur ?</p>
                    <input
                        type="text"
                        value={answers.q3}
                        onChange={(e) => handleAnswerChange('q3', e.target.value)}
                    />
                    {showAnswers && answers.q3 !== '1960' && (
                        <p>Correction : La réponse correcte est "1960".</p>
                    )}
                </div>

                <div>
                    <h2>Section 4: Évaluation finale</h2>
                    <p>4. En fonction de toutes les informations, pensez-vous qu'il y ait eu du harcèlement en ligne dans ces scénarios ?</p>
                    <label>
                        <input
                            type="radio"
                            name="q4"
                            value="oui"
                            checked={answers.q4 === 'oui'}
                            onChange={() => handleAnswerChange('q4', 'oui')}
                        />
                        Oui
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="q4"
                            value="non"
                            checked={answers.q4 === 'non'}
                            onChange={() => handleAnswerChange('q4', 'non')}
                        />
                        Non
                    </label>
                    {showAnswers && answers.q4 === 'non' && (
                        <p>Correction : La réponse correcte est "Oui".</p>
                    )}
                </div>

                <button type="submit">Soumettre</button>
            </form>
        </div>
    );
}

export default Scene;
