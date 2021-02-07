import React from 'react';

class Categories extends React.Component {
    render() {
        if (this.props.categories === null) return null;
        return <div className="categories">
            {this.props.categories && this.props.categories.map(category => (
            <div key={`category-${category.name}`} className="category">
                <h3>{category.name}</h3>
                <a href={"/categories" + category.image}>
                <img src={
                    "https://github.com/TomerPacific/julOnSale/blob/master/assets/" +
                    category.image +
                    ".png?raw=true"
                    }
                    className="category"
                    alt={`/${category.name}`}
                    title={category.name}
                />
                </a>
            </div>
        ))}
        </div>
    }
}

export default Categories;