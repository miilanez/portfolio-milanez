import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <header>
                <h1>Home</h1>
            </header>

            <main>
                <p>
                <Link to="sobre">Acesse a página Sobre</Link> 
                </p>
            </main>

        </div>
    );
}

export default Home;