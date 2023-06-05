import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import MealDetails from './pages/MealDetails';
import DrinkDetails from './pages/DrinkDetails';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/meals" component={ Meals } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/meals/:id" component={ MealDetails } />
        <Route exact path="/drinks/:id" component={ DrinkDetails } />
        <Route exact path="/meals/:id/in-progress" component={ MealDetails } />
        <Route exact path="/drinks/:id/in-progress" component={ DrinkDetails } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
