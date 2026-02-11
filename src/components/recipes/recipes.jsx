// import { NavLink } from "react-router-dom";
import { useState } from "react";
import RecipeCard from "./RecipeCard";
import { recipesData } from "./recipesData";
import MaxPrep from "./maxPrep"
import MaxCook from "./maxCook"
import Servings from "./servings"
import SearchBar from "./SearchBar"
// import { RecipeInform } from "./recipe-inform.jsx"
// import RecipeDetail from "./RecipeDetail";
import './recipes.css'
// import './mobRecipes.css'
// import '../../assets/index.css'


function Recipes() {
    const [open, setOpen] = useState(false);
    const closeMenu = () => setOpen(false);
    const [selectedPrep, setSelectedPrep] = useState(null);
    const [selectedCook, setSelectedCook] = useState(null);
    const [selectedService,setSelectedService] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

const filteredRecipes = recipesData.filter(recipe => {

    if (selectedPrep) {
        const prepMinutes = parseInt(recipe.prepTime);
        if (prepMinutes > selectedPrep) return false;
    }

    if (selectedCook) {
        const cookMinutes = parseInt(recipe.cookTime);
        if (cookMinutes > selectedCook) return false;
    }

    if (selectedService) {
        if (parseInt(recipe.servings) !== selectedService) return false;
    }

    if (searchTerm) {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const titleMatch = recipe.title.toLowerCase().includes(lowerSearchTerm);
        const ingredientMatch = recipe.ingredients.some(ingredient =>
            ingredient.toLowerCase().includes(lowerSearchTerm)
        );
        if (!titleMatch && !ingredientMatch) return false;
    }

    return true;
})



    return (
        <div>

            <div className="recipes">

                <div className="recipesHeader">
                    <h1>
                        Explore our simple, healthy recipes
                    </h1>

                    <div className="recipesHead-text">
                        Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient,
                        or simply scroll the list and let something delicious catch your eye.
                    </div>
                </div>

                <div className="recipe-buttons">
                    <div className="recipe-buttons2">
                 
                            <MaxPrep onSelect={setSelectedPrep} className="maxPrepBtn" />
                        
                        <MaxCook onSelect={setSelectedCook} className="maxCookBtn" />

                          <Servings onSelect={setSelectedService} className="servingBtn" />
                    </div>
                           
                    <SearchBar onSearch={setSearchTerm} className="searchBtn" />
         </div>

                <div className="recipe-list">
                    {filteredRecipes.map((recipe) => (
                        <RecipeCard key={recipe.slug} recipe={recipe} />
                    ))}
                </div>

            </div>

        </div>
        // </div>
    )
}

export default Recipes