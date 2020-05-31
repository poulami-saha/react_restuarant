import React from "react";
import "./resturant.styles.scss";

const Resturant = ({ resturant }) => {
  const {
    _id,
    name,
    address,
    openingTime,
    closingTime,
    cuisine,
    imageUrl,
    averagePrice,
    rating,
  } = resturant;
  return (
    <div className="card">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="details">
        <p className="nameCss">{name}</p>
        {/* <p>Location:{address}</p> */}
        <p className="shadow">
          Time: {openingTime} to {closingTime}
        </p>
        <p className="shadow">Cuisine: {cuisine.name}</p>
        <div>
          <p className="normal">Min. Cost: {averagePrice}</p>
          <p className="normal">Rating: {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Resturant;
