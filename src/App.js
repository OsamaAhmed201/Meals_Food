import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Commponent/Layout/Layout.jsx";
import Home from './Commponent/Home/Home';
import NotFound from "./Commponent/NotFound/NotFound.jsx";
import DetalisFood from "./Commponent/DetalisFood/DetalisFood.jsx";

import Categories from './Commponent/Categories/Categories';
import CategoryMeals from "./Commponent/MealsCategory/CategoryMeals.jsx";
import Contact from "./Commponent/Contact/Contact.jsx";
import Area from "./Commponent/Area/Area.jsx";
import AreaMeals from "./Commponent/Area/AreaMeals.jsx";
import Ingredients from "./Commponent/Ingredients/Ingredients.jsx";
import IngredientsMeals from './Commponent/Ingredients/IngredientsMeals';




function App() {
  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'FoodDetails/:id', element: <DetalisFood /> },
        { path: 'ingredients', element: <Ingredients /> },
        { path: 'Meals_Food', element: <Home/> },
        { path: 'home', element: <Home /> },
        { path: 'categories', element: <Categories /> },
        { path:"/categoryMeals/:mealsCat", element: <CategoryMeals/> },
        { path:"/areaMeals/:meals", element: <AreaMeals/> },
        { path:"/IngMeals/:meals", element: <IngredientsMeals/> },
        { path:"/Contact", element: <Contact/> },
        { path:"/area", element: <Area/> },
        { path: '*', element: <NotFound /> },

      ]
    }
  ])
  return (
   <>
   <RouterProvider router={routers}></RouterProvider>
   </>
  );
}

export default App;
