import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import FoodCard from "./components/food-card/food.card.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <FoodCard></FoodCard>
      </div>
    );
  }
}

export default App;
