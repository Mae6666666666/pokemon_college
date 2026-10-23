const generatePokemon = document.getElementById("generate-pokemon"); 
const pokemonName = document.getElementById("pokemon-name"); 
const pokemonImage = document.getElementById("pokemon-img"); 
const pokemonStats = document.getElementById("pokemon-stats");

generatePokemon.addEventListener("click", async () => { 
  const id = Math.floor(Math.random() * 1025) + 1;

  try { 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); 
    if (!response.ok) { 
      throw new Error(`Request failed: ${response.status}`);
    }

    const pokemon = await response.json(); 
    pokemonName.textContent = pokemon.name; 
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonImage.alt = `Picture of ${pokemon.name}`; 
    pokemonStats.replaceChildren();
    pokemon.stats.forEach((stat) => {
      const item = document.createElement("li")
      item.textContent = `${stat.stat.name}: ${stat.base_stat}`;
      pokemonStats.append(item);
    });
  } catch (error) { 
    pokemonName.textContent = "Could not load Pokémon. Try again."; 
    console.error(error); 
  }
}); 

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

// async function loadData(url){
//   displayPokemon(await fetchData(url))

// }

