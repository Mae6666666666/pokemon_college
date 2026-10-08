
  // const pokemonList = document.querySelector("#pokemon-list");

  // document.querySelectorAll(".general-container img").forEach((image) => {
  //   image.addEventListener("click", async () => {
  //     const match = image.alt.match(/^(.+?) type pokemon icon$/i);

  //     if (!match) return;

  //     const type = match[1].toLowerCase();
  //     pokemonList.textContent = "Loading...";

  //     try {
  //       const response = await fetch(
  //         `https://pokeapi.co/api/v2/type/${type}/`
  //       );

  //       if (!response.ok) {
  //         throw new Error(`Request failed: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       pokemonList.replaceChildren();

  //       data.pokemon.forEach(({ pokemon }) => {
  //         const item = document.createElement("li");
  //         item.textContent = pokemon.name;
  //         pokemonList.append(item);
  //       });
  //     } catch (error) {
  //       pokemonList.textContent = "Could not load Pokémon. Please try again.";
  //       console.error(error);
  //     }
  //   });
  // });

  
  // const pokemonList = document.querySelector("#pokemon-list");

  // document.querySelectorAll(".general-container img").forEach((image) => {
  //   image.addEventListener("click", async () => {
  //     const match = image.alt.match(/^(.+?) type pokemon icon$/i);

  //     if (!match) return;

  //     const type = match[1].toLowerCase();
  //     pokemonList.textContent = "Loading...";

  //     try {
  //       const response = await fetch(
  //         `https://pokeapi.co/api/v2/type/${type}/`
  //       );

  //       if (!response.ok) {
  //         throw new Error(`Request failed: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       pokemonList.replaceChildren();

  //       data.pokemon.forEach(({ pokemon }) => {
  //         const item = document.createElement("li");
  //         item.textContent = pokemon.name;
  //         pokemonList.append(item);
  //       });
  //     } catch (error) {
  //       pokemonList.textContent = "Could not load Pokémon. Please try again.";
  //       console.error(error);
  //     }
  //   });
  // });

// const generatePokemon = document.getElementById("generate-pokemon").addEventListener("click", displayPokemon)
// const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//
// async function randomPokemon(){
//   const id = Math.floor(Math.random() * 1025) + 1
//   const pokemon = await response.json();
//   nameElemet.textContent = pokemon.name;
//   imageElement.src = pokemon.sprites.front_default;
//   imageElement.alt = `Picture of ${pokemon.name}`;
// }
//
// async function getData(url){
//     const response = await fetch(url)
//     return response.json()
// }
//
//
// function displayPokemon(data){
//   if (data.sprites.front_default){
//     document.querySelector("#pokemon-img").src = data.sprites.front_default;
//     document.querySelector("#pokemon-name").alt = data.name;
//
//   }
// }
//
// async function loadData(url){
//   displayPokemon(await getData(url))
//
// }

const generatePokemon = document.getElementById("generate-pokemon"); // Finds the button in the HTML.
const pokemonName = document.getElementById("pokemon-name"); // Finds the heading where the name will appear.
const pokemonImage = document.getElementById("pokemon-img"); // Finds the image element where the sprite will appear.

generatePokemon.addEventListener("click", async () => { // Runs this function whenever the button is clicked.
  const id = Math.floor(Math.random() * 1025) + 1; // Chooses a random Pokémon ID from 1 through 1025.

  try { // Starts error handling in case the request does not work.
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); // Requests that Pokémon's data from PokéAPI.
    if (!response.ok) { // Checks whether the server returned a successful response.
      throw new Error(`Request failed: ${response.status}`); // Sends unsuccessful responses to the catch block.
    }

    const pokemon = await response.json(); // Converts the server response into JavaScript data.
    pokemonName.textContent = pokemon.name; // Shows the Pokémon's name inside the heading.
    pokemonImage.src = pokemon.sprites.front_default; // Shows the Pokémon's sprite in the image element.
    pokemonImage.alt = `Picture of ${pokemon.name}`; // Gives the image an accessible description.
  } catch (error) { // Handles network errors or unsuccessful responses.
    pokemonName.textContent = "Could not load Pokémon. Try again."; // Shows a useful message on the page.
    console.error(error); // Writes error details to the browser's developer console.
  }
}); // Finishes registering the button click handler.