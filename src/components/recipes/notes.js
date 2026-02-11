
     <div className="view-recipe">
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Recipe" : "View Recipe"}
        </button>
      </div>

  

      {showDetails && (
        <div className="recipe-details">
          <div className="rec-ing">
          <h3 className="recipe-ingredients">Ingredients</h3>
          <ul>
                  {recipe.ingredients.map((item, index) => (
                <li key={index}><img src={recipe.iconUrl} alt="icon" />
            
      {item}
      </li>
            ))}
          </ul>
          </div>

          <div className="rec-inst">



          <h3 className="recipe-instructions">Instructions</h3>
          <ul>
            {recipe.instructions.map((step, index) => (
              <li key={index}>
                <img src={recipe.iconUrl} alt="icon" />
                {step}</li>
            ))}
          </ul>
          </div>
        </div>
      )}


       /* if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate("/recipes")}>
          Back to Recipes
        </button>
      </div>
    );
  }*/