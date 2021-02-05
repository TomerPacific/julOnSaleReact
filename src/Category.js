import React from 'react';

class Category extends React.Component {

    render() {
        return <div className="container">
            <h3>{this.props.categoryName}</h3>
            <a className="category" href={this.props.categoryLink}>
                <img src={this.props.imageSrc} alt="category"/>
            </a>
        </div>
    }
}


export default Category;