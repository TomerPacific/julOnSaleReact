import React from 'react';
import ReactDOM from 'react-dom';
import './Categories.css';

const endpoint = "https://jul-on-sale.herokuapp.com/jul";

class Categories extends React.Component {
    constructor() {
        super();
        this.state = {categories : [], isFetchingData: false};
        this.fetchData();
    }
    componentDidMount() {
        let self = ReactDOM.findDOMNode(this);
        this.fetchData(self);
    }
    fetchData(self) {
        this.setState({
            ...this.state, isFetching: true
        });
        fetch(endpoint)
        .then(response => response.json())
        .then(result => {
            this.setState({
                ...this.state, isFetching: false
            });
            if (this.props) {
                this.props.spinnerHandler();
            }
            this.buildCategories(self, result.message);
        })
        .catch(error => {
            this.setState({
                ...this.state, isFetching: false
            });
            if (this.props) {
                this.props.spinnerHandler();
            }
           
        })
    }
    buildCategories(self, categories) {
        for (let index = 0; index < categories.length; index++)
        {
            let category = categories[index];
            let div = document.createElement('div');
            let header = document.createElement('h3');
            let anchor = document.createElement('a');
            let image = document.createElement('img');

            header.innerHTML = category.name;
            image.src = 'https://github.com/TomerPacific/julOnSale/blob/master/assets/' + category.image + '.png?raw=true';
            image.setAttribute('class', 'category');
            anchor.href = "https://tomerpacific.github.io/julOnSale/categories/" + category.image + "/" + category.image + ".html";
            anchor.innerHTML = '<img src=' + image.src + ' class="category" alt=' + category.name + ' title=' + category.name + '>';

            div.appendChild(header);
            div.appendChild(anchor);
            div.setAttribute('class', 'container');
            self.appendChild(div);
        }
    }
    render() {
        return <div className="categories"></div>
    }
}

export default Categories;