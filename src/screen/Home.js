import React from 'react';
import './../css/home.css'


const Home = () =>{

    return(
        <div id="body">
            <h1>Mytho Quizz</h1>
            <div className={"home"} >
                <img alt="temple qrecque" src={require("../images/ulvi-safari-WClG5w6GC9I-unsplash.jpg")}/>
                <p>Bienvenue dans ce quizz sur la mythologie grecque.</p>
                <p>Essayez de trouver si l'affirmation est vraie ou fausse.</p>
                <button onClick={() => window.location.href = "/Questions"}>Commencer</button>
            </div>
        </div>

    )
}

export default Home