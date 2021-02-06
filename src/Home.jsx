import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import "./Category.css";
const Home = props => {
  const categories = props.categories;
  if (!categories) {
    return null;
  }
  return (
    <div className="categories">
      {categories &&
        categories.map(category => (
          <div key={`category-${category.name}`} className="category">
            <h3>{category.name}</h3>
            <a href={"/categories" + category.image}>
              <img
                src={
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
  );
};
Home.propTypes = {
  categories: PropTypes.array
};
export default Home;
