import React from 'react';
import { Link } from 'react-router-dom'
import './Categories.css';

class Categories extends React.Component {
    render() {
        if (this.props.categories === null) return null;
        return <div className="categories">
            {this.props.categories && this.props.categories.map(category => (
            <div className="container">
                <div key={`category-${category.name}`} className={"category"}>
                    <h3>{category.name}</h3>
                    <Link to={"/categories" + category.image}>
                    <img src={
                        "https://github.com/TomerPacific/julOnSale/blob/master/assets/" +
                        category.image +
                        ".png?raw=true"
                        }
                        alt={`/${category.name}`}
                        title={category.name}
                    />
                    </Link>
                </div>
            </div>
        ))}
        </div>
    }
}

export default Categories;