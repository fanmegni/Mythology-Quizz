import React from 'react';
import './../css/home.css'
import {Link} from "react-router-dom";


const Home = () =>{

    return(
        <div className={"home"} >
            <Link to="/Questions">hey</Link>
        </div>
    )
}

export default Home