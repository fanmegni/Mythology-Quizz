import React, {useEffect, useState} from "react";

const BlocQuest = (props) => {
    const [question, setquestion] = useState(undefined)
    const [reponse,setreponse] = useState(undefined)

    const recupQuestion = function() {
        fetch("https://quest.noixvide.fr/uneQ.php")
            .then(r => r.json()
                .then(nquestion => {
                    setquestion(nquestion.question)
                    setreponse(nquestion.reponse)
                })
            )
    }

    useEffect(() => {
        recupQuestion()
    },[props.nbQuestion])


    const navigateTo = function (){
        window.location.replace("/GameOver")
    }

    const verifier = (button)=>{
        if(button !== reponse){
            const meilleur = JSON.parse(localStorage.getItem("meilleurScore"))
            if (meilleur){
                if (meilleur < props.nbQuestion){
                    localStorage.setItem("meilleurScore", JSON.stringify(props.nbQuestion))
                }
            }
            else{
                localStorage.setItem("meilleurScore",JSON.stringify(props.nbQuestion))
            }
            localStorage.setItem("dernierScore", JSON.stringify(props.nbQuestion))
            navigateTo();
        }
        else{
            props.setnbQuestion(props.nbQuestion+1)
        }
    }
            return (
                <div className="blocQuest">
                    <p id="question">{question}</p>
                    <div className="blocBouton">
                        <button onClick={() => verifier("vrai")}
                        >Vrai</button>
                        <button onClick={() => verifier("faux")}>Faux</button>
                    </div>
                </div>
            )

}

export default BlocQuest