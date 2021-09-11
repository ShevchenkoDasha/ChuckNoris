function Header({logo, error, isLoaded}) {
    if (error) {
        return <div className="error">Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="load">Загрузка...</div>;
    } else {
        return (
            <header>
                <div className="container">
                    <div className="logo-box flx">
                        <img src={logo} className="chuck_logo" alt="logo"/>
                        <span className="text_logo">
                Chuck Norris
                </span>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
