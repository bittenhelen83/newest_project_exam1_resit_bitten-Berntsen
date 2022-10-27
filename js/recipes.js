import { getExistingFavs } from "./data/favFunctions.js";
const recipeContainer = document.querySelector(".recipeContainer");

const api = {
    method: `GET`,
    headers: {
        `X-API-KEY`: '8d13f27b766444338fcdf22ed323afc8'
    } 
};

const url = "https://api.spoonacular.com/recipes/complexSearch?query=healthy&type=main%20course&instructionsRequired=true&addRecipeInformation=true&sortDirection=asc&number=50";

const corsFix = "https://noroffcors.herokuapp.com/" + url;

const favourites = getExistingFavs();

async function getRecipe() {
    
    const response = await fetch(corsFix, api, favourites);

    const json = await response.json();

    const recipe = json.results;

    console.log(recipe);

    recipe.forEach(recipe => {
        let cssClass = "far"
    });

}

getRecipe();