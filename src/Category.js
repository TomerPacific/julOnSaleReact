import React from 'react';
import DateHeader from './DateHeader';

const endpoint = "https://jul-on-sale.herokuapp.com/category/";

class Category extends React.Component {
    constructor() {
        super();
        this.state = {shouldShowSpinner: true, items: []}
    }
    componentDidMount() {
        if (this.state.items.length === 0) {
            this.fetchData();
        } else {
            this.buildCategories(this.state.items);
        }  
      }
      fetchData() {
        fetch(endpoint + this.props.categoryName)
        .then(response => response.json())
        .then(result => {
            this.setState({
                ...this.state, shouldShowSpinner: false, items: result.message
            });
            this.buildItemsForCategory(result.message);
        })
        .catch(error => {
            this.setState({
                ...this.state, shouldShowSpinner: false
            });
        })
      }
    buildItemsForCategory(items) {
        const mainDiv = document.querySelector('#mainDiv');
        for (let index = 0; index < items.length; index++)
	    {  
            let item = items[index];
            let div = document.createElement('div');
            let nameHeader = document.createElement('h3');
            let priceHeader = document.createElement('h2');
            let anchor = document.createElement('a');
            let image = document.createElement('img');

            nameHeader.innerHTML = item.name;
            image.src = item.image;
            anchor.href = item.link;
            priceHeader.innerHTML = item.price;

            image.setAttribute('class', 'item');
            anchor.innerHTML = '<img src=' + image.src + ' class="item" alt=' + item.name + ' title=' + item.name + '>';

            div.appendChild(nameHeader);
            div.appendChild(anchor);
            div.appendChild(priceHeader);
            div.setAttribute('class', 'container');
            mainDiv.appendChild(div);
	    }
    }
    render() {
        return <div>
            <header className="App-header">
            What's On Sale @ Jul {this.props.categoryName}
            </header>
            <DateHeader />
            <Spinner status = {this.state.shouldShowSpinner}/>
            <div id="mainDiv"></div>
        </div>
    }
}


export default Category;