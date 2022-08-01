import React, { useState } from "react";
import Mealitem from "./MealItem";
import './style.css';
function Meal() {
    const [search, setSearch] = useState("");
    const [Mymeal, setMeal] = useState();
    const searchMeal = (evt) => {
        if (evt.key == "Enter") {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res => res.json()).then(data => { setMeal(data.meals); setSearch(""); });
        }
    };
    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>The CookBook</h1>
                    <h4>What recipe are you looking for?</h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchMeal} />
                </div>
                <div className="container">
                    {(Mymeal == null) ? <p className="notSearch">Find Your Favorite Recipes</p> :
                        Mymeal.map((res) => {
                            return (
                                <Mealitem data={res} />);
                        }

                        )}
                </div>
            </div>
        </>
    );
}
export default Meal;