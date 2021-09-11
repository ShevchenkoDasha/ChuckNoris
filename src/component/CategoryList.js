function CategoryList({category, error, isLoaded}) {

    if (error) {
        return <div className="error">Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="load">Загрузка...</div>;
    } else {
        return (
            <>
                {category.map(item => <div className="category" key={item}> {item}
                </div>)}
            </>
        );
    }
}

export default CategoryList;