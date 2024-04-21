import { useState } from "react";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div>
      <StarRating noOfStars={250} />
    </div>
  );
}

export default App;
