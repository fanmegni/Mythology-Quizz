import React, {useEffect, useState} from "react";
import BlocQuest from "../Component/BlocQuest";

const Questions  = () => {
    const [nbQuestion, setnbQuestion] = useState(1);
    useEffect(() => {

    })
    return(
        <div>
            <p>{nbQuestion}</p>
            <BlocQuest nbQuestion ={nbQuestion} setnbQuestion={setnbQuestion}></BlocQuest>
        </div>
    );
}

export default Questions