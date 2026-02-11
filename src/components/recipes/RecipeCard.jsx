import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";
import '../../assets/index.css'

function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const handleViewRecipe = () => {
    navigate(`/recipes/${recipe.slug}`);
  };

  return (

    <div className={`recipe-card ${recipe.slug}`}>
      <img src={recipe.image} alt={recipe.title} className="recipe-card-img" />

      <div className="recipe-card-title">{recipe.title}</div>

      <div className="recipe-card-description">
        {recipe.description.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </div>

      <div className="recipe-card-icons">
       
          <div className="recipe-card-icon-item">
            <img src="/user.png" alt="user icon" /> <div className="icon-text"> Servings: {recipe.servings} </div> 
          </div>


          <div className="recipe-card-icon-item">
            <img src="/timer.png" alt="timer icon" /> <div className="icon-text"> Prep: {recipe.prepTime} </div> 
          </div>
       
       
          <div className="recipe-card-icon-item">
            <img src="/food.png" alt="food icon" /> <div className="icon-text">Cook: {recipe.cookTime}</div>
          </div>
       
      </div>
      
      
        <div className="view-recipe">
          <button onClick={handleViewRecipe}>View Recipe</button>     
      </div>

     
    </div>

  );
}

export default RecipeCard;
