import React from "react";
import "./Greeting.css";

/**
 * Returns a personalized greeting and purpose statement for Yoda, represented as ChatGPT, an AI language model created by OpenAI.
 *
 * @param {string} name - The name of the person to include in the greeting.
 * @returns {string} The personalized greeting and purpose statement for Yoda.
 */
function Greeting(props) {
    const starWarsReference = randomStarWarsReferences();
    return (
        <div className="greeting">
            <p>
                Hello there, <span className="name">{props.name}</span>, I am Yoda, represented as ChatGPT, an AI language model created by
                OpenAI.
            </p>
            <p>Yes, hmmm, here to answer questions and provide information, I am.</p>
            <p>Assist you, how may I?</p>
            <p className="star-wars-reference">{starWarsReference}</p>
        </div>
    );
}

function randomStarWarsReferences() {
    const references = [
        "May the force be with you.",
        "I find your lack of faith disturbing.",
        "Do. Or do not. There is no try.",
        "In my experience, there is no such thing as luck.",
        "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
        "The greatest teacher, failure is.",
        "Adventure. Excitement. A Jedi craves not these things.",
        "Patience you must have, my young padawan.",
        "Truly wonderful, the mind of a child is.",
        "Always two there are, no more, no less. A master and an apprentice.",
        "Size matters not. Look at me. Judge me by my size, do you?",
        "Wars not make one great.",
        "When 900 years old you reach, look as good you will not.",
        "Always pass on what you have learned.",
        "Difficult to see. Always in motion is the future.",
    ];

    return references[Math.floor(Math.random() * references.length)];
}

export default Greeting;
