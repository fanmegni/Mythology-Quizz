import React from "react";
import "../css/over.css"

const Over = (props) => {

    const score = JSON.parse(localStorage.getItem("dernierScore"))
    const meilleurScore = JSON.parse(localStorage.getItem("meilleurScore"))
    return(
        <div className="over">
            <h1 id="titreOver">Partie terminée</h1>
            <div className="over center">
                <p id="meilleurScore">Meilleur score : {meilleurScore}</p>
                <p id="score">Score de cette partie : {score}</p>
                <button className="over" onClick={() => window.location.href = "/"}>Recommencer</button>
            </div>

        </div>
    )
}

export default Over