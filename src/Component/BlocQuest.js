import React, {useEffect, useState} from "react";
//import {useHistory} from "react-router";



const BlocQuest = (props) => {
    const [question, setquestion] = useState(undefined)
    const [reponse,setreponse] = useState(undefined)
    //const history = useHistory();

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
        //history.push("/GameOver")
        //TODO faire la fonction pour aller jusqu'a GAME OVER
    }

    const verifier = (button)=>{
        if(button != reponse){
            navigateTo();
        }
        else{
            props.setnbQuestion(props.nbQuestion+1)
        }
    }

        if(question === undefined){
            return(
                <p>Désolé il n'y a aucune question disponible</p>
            )
        }
        else{
            return (
                <div>
                    <p>{question}</p>
                    <div>
                        <button onClick={() => verifier("vrai")}>Vrai</button>
                        <button onClick={() => verifier("faux")}>Faux</button>
                    </div>
                </div>
            )
        }

}

export default BlocQuest