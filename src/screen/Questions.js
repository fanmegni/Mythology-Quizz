import React, {useEffect, useState} from "react";
import BlocQuest from "../Component/BlocQuest";
import "../css/questions.css"

const Questions  = () => {
    const [nbQuestion, setnbQuestion] = useState(0);
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
                <BlocQuest nbQuestion ={nbQuestion} setnbQuestion={setnbQuestion}></BlocQuest>
            </div>
        </div>

    );
}

export default Questions