import React, {useState} from "react";

const Questions  = () => {
    const [nbQuestion, setnbQuestion] = useState(1);
    const [nbJuste, setnbJuste] = useState(0);

    return(
        <div>
            <p>{nbQuestion}</p>
            <p>{nbJuste}</p>
        </div>
    );
}

export default Questions