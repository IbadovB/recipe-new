import { StrictMode } from "react";  
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client"; 
import RootLayout from "./Root.jsx";
import HomePage from "./components/home/homepage/homePage.jsx";
import About from "./components/about/about.jsx";
import Recipes from "./components/recipes/recipes.jsx";
import RecipeDetail from "./components/recipes/RecipeDetail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "recipes", element: <Recipes /> },
      { path: "recipes/:slug", element: <RecipeDetail /> }
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
