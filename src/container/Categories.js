import React from 'react';
import {useState, useEffect} from 'react';
import CategoryList from "../component/CategoryList";

function Categories({clickHandler}) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/categories`)
            .then(response => response.json())
            .then((response) => {
                setIsLoaded(true);
                setCategory([...response, 'random']);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            })
    }, []);


    return (
        <div className=' flx category_list' onClick={clickHandler}>
            <CategoryList category={category} error={error} isLoaded={isLoaded}/>
        </div>
    );
}

export default Categories;