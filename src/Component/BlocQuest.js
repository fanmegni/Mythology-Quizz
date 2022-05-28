import React, {useEffect, useState} from "react";

const BlocQuest = (props) => {

    const navigateTo = function () {
        window.location.replace("/GameOver")
    }

    const verifier = (button) => {
        if (button !== props.reponse) {
            const meilleur = JSON.parse(localStorage.getItem("meilleurScore"))
            if (meilleur) {
                if (meilleur < props.nbQuestion) {
                    localStorage.setItem("meilleurScore", JSON.stringify(props.nbQuestion))
                }
            } else {
                localStorage.setItem("meilleurScore", JSON.stringify(props.nbQuestion))
            }
            localStorage.setItem("dernierScore", JSON.stringify(props.nbQuestion))
            navigateTo();
        } else {
            props.setliste(props.liste.filter(q => q.question !== props.question))
            props.setnbQuestion(props.nbQuestion + 1)
        }
    }

    if (props.question != undefined)
        return (
            <div className="blocQuest">
                <p id="question">{props.question}</p>
                <div className="blocBouton">
                    <button onClick={() => verifier("vrai")}
                    >Vrai
                    </button>
                    <button onClick={() => verifier("faux")}>Faux</button>
                </div>
            </div>
        )

}
export default BlocQuest