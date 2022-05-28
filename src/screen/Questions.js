import React, {useEffect, useState} from "react";
import BlocQuest from "../Component/BlocQuest";
import "../css/questions.css"

const Questions  = () => {
    const [nbQuestion, setnbQuestion] = useState(0);
    const [listeQuestion, setliste] = useState([])
    const [question, setquestion] = useState(undefined)
    const [reponse,setreponse] = useState(undefined)

    function getRandomArbitrary(min = 0, max=1) {
        return Math.random() * (max - min) + min;
    }
    const recupListe = function (){
        fetch("https://quest.noixvide.fr/listeQ.php")
            .then(r => r.json())
            .then(liste => {
                setliste(liste)
            })
    }

    const recupQuestion = function() {
        if (listeQuestion.length > 0) {
            let ind = parseInt(getRandomArbitrary(0,listeQuestion.length),10)
            if (isNaN(ind)) ind = 0
            console.log("ind = ", ind)
            setquestion(listeQuestion[ind].question)
            setreponse(listeQuestion[ind].reponse)
        }
    }

    useEffect(() => recupListe(),[])
    useEffect(() => {
        recupQuestion()
    },[listeQuestion])

    if (listeQuestion.length > 0)
    return(
        <div>
            <h1 onClick={() => window.location.href = "/"}>Mytho Quizz</h1>
            <div id="corps">
                <div className="questions">
                    <div id="wins">
                        <p>Win streak :</p>
                        <p id="nbQuestion">{nbQuestion}</p>
                    </div>
                </div>
                <BlocQuest
                    nbQuestion ={nbQuestion}
                    setnbQuestion={setnbQuestion}
                    setliste={setliste}
                    liste={listeQuestion}
                    question={question}
                    reponse={reponse}
                    >
                </BlocQuest>
            </div>
        </div>
    );
    else{
        localStorage.setItem("meilleurScore", JSON.stringify(nbQuestion))
        localStorage.setItem("dernierScore", JSON.stringify(nbQuestion))
        return(
            <div>
                <h1 onClick={() => window.location.href = "/"}>Mytho Quizz</h1>
                <div id="corps">
                    <div className="questions">
                        <div id="wins">
                            <p>Win streak :</p>
                            <p id="nbQuestion">{nbQuestion}</p>
                        </div>
                    </div>
                    <div className="blocQuest">
                        <p className="fin">Vous avez atteint le score maximum !!</p>
                        <p className="fin">Félicitation !!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Questions