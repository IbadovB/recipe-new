import { useParams, useNavigate } from "react-router-dom";
import { recipesData } from "./recipesData";
// import { recipesData } from "./recipesData";
import "./RecipeDetail.css";
import '../../assets/index.css'
import  RecipeCard from ".//RecipeCard"
 



function RecipeDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  /*const handleViewRecipe = () => {
    navigate(`/recipes/${recipe.slug}`);
  };*/


  const recipe = recipesData.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <div className="recipe-main">

<div className="recipe-detail-container">
        <div className="recipe-not-found">
          <h2>Recipe not found</h2>
          <button onClick={() => navigate("/recipes")}>
            Back to Recipes
          </button>
        </div>
      </div>

      </div>
      
    );
  };

  return (
    
    <div>
    <div className="recipe-detail-container">
      <div className="recipeNameText">
        <div className="recipeText">
          Recipes /
        </div>
        <div className="recipeName">
         {recipe.title}
        </div>
      </div>

      <div className="recipe-detail-container2">
    
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-detail-image"
        />

<div className="recipe-detail-header">
      
        <div className="recipe-detail-info">
          <h1>{recipe.title}</h1>
          <p className="recipe-detail-description">
            {recipe.description.join(" ")}
          </p>
          <div className="recipe-meta">
            <div className="meta-item">
              <img src="/user.png" alt="servings" />
              <div className="meta-number">Servings: {recipe.servings}</div>
            </div>

            <div className="meta-item">

                <img src="/timer.png" alt="prep time" />          

              <div className="meta-number">
                Prep: {recipe.prepTime}</div>
            </div>

            <div className="meta-item">
              <img src="/food.png" alt="cook time" />
              <div className="meta-number">Cook: {recipe.cookTime}</div>
            </div>

          </div>
        </div>
   

      <div className="recipe-detail-content">
        <div className="ingredients-section">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((item, index) => (
              <li key={index}><img src={recipe.iconUrl} alt="icon" />

                {item}
              </li>
            ))}

          </ul>
        </div>

        <div className="instructions-section">
          <h2>Instructions</h2>
          <ul className="instructions-list">
            {recipe.instructions.map((instruction, index) => (

              <li key={index}><img src={recipe.iconUrl} alt="icon" />
                {instruction}
              </li>
            ))}
          </ul>
        </div>
      </div>

      </div>

      </div>

      </div>

  


 

   

           <div className="other-recipes">
            <div className="more-text"> More recipes </div>

            <div className="other-recipes2">
        {recipesData
          .filter(r => r.slug !== slug)
          .map(r => (
            <RecipeCard key={r.slug} recipe={r} />
          ))}
          </div>
          
      </div>
      </div>
      

  
  );
};

export default RecipeDetail;





/*import { useParams, useNavigate } from "react-router-dom";
import { recipesData } from "./recipesData";
import RecipeCard from "./RecipeCard";
import "./RecipeDetail.css";




function RecipeDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const recipe = recipesData.find(r => r.slug === slug);


  return (
    <div className="recipe-detail">

      <button onClick={() => navigate("/recipes")}>
        ← Back to Recipes
      </button>
<div>
<div>
  Recipes / 
</div>

<div>
  Mediterranean Chickpea Salad
</div>

</div>
 
  
      <img src={recipe.image} alt={recipe.title} />

          <h1>{recipe.title}</h1>

      <p>{recipe.description.join(" ")}</p>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol>
        {recipe.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>


      <h2>Other Recipes</h2>
      <div className="other-recipes">
        {recipesData
          .filter(r => r.slug !== slug)
          .map(r => (
            <RecipeCard key={r.slug} recipe={r} />
          ))}
      </div>
    </div>
        </div>

  );
}

export default RecipeDetail;
*/