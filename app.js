
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

  async function getData(url){
    const response = await fetch(url)
    return response.json()
  }


function displayPokemon(data){
  if (data.sprites.front_default){
    document.querySelector("#pokemon-img").src = data.sprites.front_default;
    document.querySelector("#pokemon-name").alt = data.name;

  }
}

