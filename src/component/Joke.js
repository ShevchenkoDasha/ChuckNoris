function Joke({currentJoke, error, isLoaded}) {
    if (error) {
        return <div className="error">Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="load">Загрузка...</div>;
    } else {
        return (
            <>
                <div className="wrapper_joke">
                    <div className="joke">
                        <p>
                            {currentJoke}
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default Joke;