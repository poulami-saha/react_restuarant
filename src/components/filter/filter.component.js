import React from "react";
import "./filter.styles.scss";

const Filter = ({
  handleRating,
  handlePrice,
  handleName,
  handleCuisine,
  cuisines,
}) => {
  return (
    <div className="filter">
      {/* <b>Select Cuisine: </b>
        <span className="drop">
          <select id="myList" onChange={(e) => handleCuisine(e)}>
            <option value="All">All</option>
            {cuisines.map((cui) => (
              <option value={cui.name}>{cui.name}</option>
            ))}
          </select>
        </span> */}

      <div class="dropdown">
        <p class="dropbtn">Select Cuisine</p>
        <div class="dropdown-content">
          <div>
            <button value="All" onClick={(e) => handleCuisine(e)}>
              All
            </button>
          </div>

          {cuisines.map((cui) => (
            <div>
              <button value={cui.name} onClick={(e) => handleCuisine(e)}>
                {cui.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <b>Sort By : </b>
        <span className="sort" onClick={handleRating}>
          Rating
        </span>
        <span className="sort" onClick={handlePrice}>
          Average Price
        </span>
        <span className="sort" onClick={handleName}>
          {" "}
          Name
        </span>
      </div>
    </div>
  );
};

export default Filter;
