import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import HomePage from "./components/homepage/homePage";
import About from "./components/about/about";
import Recipes from "./components/recipes/recipes";

function App() {
  return (

    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
      </Route>
    </Routes>
  );
}

export default App;