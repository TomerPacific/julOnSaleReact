import React from 'react';
import Spinner from './Spinner';
import { withRouter } from "react-router";
import './Category.css';

const endpoint = "https://jul-on-sale.herokuapp.com/category/";

class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            shouldShowSpinner: true, 
            items: []
        }
    }
    componentDidMount() {
        if (this.state.items.length === 0) {
            this.fetchData();
        }
      }
      fetchData() {
        fetch(endpoint + this.props?.match?.params?.categoryName)
        .then(response => response.json())
        .then(result => {
            this.setState({
                ...this.state, 
                shouldShowSpinner: false, 
                items: result.message
            });
        })
        .catch(error => {
            this.setState({
                ...this.state, 
                shouldShowSpinner: false
            });
        })
      }
    render() {
        return (
            <>
                <Spinner status={this.state.shouldShowSpinner}/>
                <div className={"categoryItems"}>
                {this.state.items.map(item => {
                    return (
                    <div key={`categoryItem-${item.link}`} className={"container"}>
                        <h4>{item.name}</h4>
                        <a href={item.link}>
                        <img
                            src={item.image}
                            className={"item"}
                            alt={item.name}
                            title={item.name}
                        />
                        </a>
                        <h4>{item.price}</h4>
                    </div>
                    );
                })}
                </div>
            </>
        )
    }
}


export default withRouter(Category);