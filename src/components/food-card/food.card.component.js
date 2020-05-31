import React, { useState } from "react";
import "./food.card.styles.scss";
import Resturant from "../resturant/resturant.component";
import Filter from "../filter/filter.component";
import CUISINES from "../../data/cuisines.data";
import RESTURANTS from "../../data/resturant.data";

const FoodCard = () => {
  const defaultCuisine = {
    _id: "5c3430ecfc13ae122d000005",
    name: "All",
  };
  const wholeResturant = RESTURANTS;
  const [resturants, setResturants] = useState(RESTURANTS);
  const [cuisine, setCuisine] = useState(defaultCuisine);
  const [searchText, setSearchText] = useState("");

  const cuisines = CUISINES;

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    let res = wholeResturant.filter(
      (res) => res.name.toLowerCase().indexOf(e.target.value) > -1
    );
    setResturants(res);
  };

  const handleCuisine = (e) => {
    let res;
    if (e.target.value == "All") {
      res = wholeResturant;
    } else {
      res = wholeResturant.filter((res) => res.cuisine.name === e.target.value);
    }
    setResturants(res);
  };

  const handlePrice = () => {
    let res1 = Array.prototype.slice
      .call(resturants)
      .sort((a, b) => (a.averagePrice > b.averagePrice ? 1 : -1));
    setResturants(res1);
  };

  const handleRating = () => {
    console.log("clicked");
    let res = Array.prototype.slice
      .call(resturants)
      .sort((a, b) => (a.rating > b.rating ? -1 : 1));
    console.log(res.map((re) => re.rating));
    setResturants(res);
  };

  const handleName = () => {
    let res = Array.prototype.slice
      .call(resturants)
      .sort((a, b) =>
        a.name.split(" ").join(" ") > b.name.split(" ").join(" ") ? 1 : -1
      );
    console.log(res);
    setResturants(res);
  };
  return (
    <div className="container">
      <div>
        <input
          type="search"
          value={searchText}
          onChange={handleSearch}
          className="search"
          placeholder="Searching for..."
        />
      </div>

      <div>
        <Filter
          handleRating={handleRating}
          handlePrice={handlePrice}
          handleName={handleName}
          handleCuisine={handleCuisine}
          cuisines={cuisines}
        />
      </div>
      <div className="directory-menu">
        {resturants.map((res) => (
          <Resturant key={res.id} resturant={res}></Resturant>
        ))}
      </div>
    </div>
  );
};
export default FoodCard;
