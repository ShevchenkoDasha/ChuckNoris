import React from 'react';
import {useState, useEffect} from 'react';
import Header from "../component/Header";
import Categories from "./Categories";
import Joke from "../component/Joke";
import url from "../url.json";

function Main() {

    const [logo, setLogo] = useState('');
    const [currentJoke, setCurrentJoke] = useState('');

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        fetchData(url.urlRandom, 'random');
    }, []);

    const fetchData = (url, categoryName) => {
        fetch(url)
            .then(response => response.json())
            .then((response) => {
                setIsLoaded(true);
                setCurrentJoke(response.value);

                    if (categoryName === 'random') {
                        setLogo(response['icon_url']);
                    }

            }, (error) => {
                setIsLoaded(true);
                setError(error);
            })
    }


    function clickHandler(event) {
        if (!event.target.classList.contains('category')) return;
        console.log(event);
        let newUrl = null;
        let categoryName = event.target.innerText;

            if (categoryName === 'random') {
                newUrl = url.urlRandom;
            } else {
                newUrl = url.urlPerCategory + categoryName;
            }

        fetchData(newUrl, categoryName);
    }

    return (<>
            <Header logo={logo} error={error} isLoaded={isLoaded}/>
            <h1>Categories</h1>
            <div className="container">
                <Categories clickHandler={clickHandler}/>
                <Joke currentJoke={currentJoke} error={error} isLoaded={isLoaded}/>
            </div>
        </>
    );
}

export default Main;
