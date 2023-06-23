const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeListElement = document.getElementById("recipe-list");

async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();

    return data.recipes;
}

async function init() {
    const recipes = await getRecipes();

    recipes => {
        recipeListElement.innerHTML = "";
        recipes.forEach(recipe => {
            const recipeElement1 = document.createElement("li");
            recipeElement1.classList
        })
    }
}

init();