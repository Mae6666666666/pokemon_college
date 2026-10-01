
const pokemonList = document.querySelector("#pokemon-list");

document.querySelectorAll(".general-container img").forEach((image) => {
image.addEventListener("click", async () => {
    const match = image.alt.match(/^(.+?) type pokemon icon$/i);

    if (!match) return;

    const type = match[1].toLowerCase();
    pokemonList.textContent = "Loading...";

    try {
    const response = await fetch(
        `https://pokeapi.co/api/v2/type/${type}/`
    );

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();
    pokemonList.replaceChildren();

    data.pokemon.forEach(({ pokemon }) => {
        const item = document.createElement("li");
        item.textContent = pokemon.name;
        pokemonList.append(item);
    });
    } catch (error) {
    pokemonList.textContent = "Could not load Pokémon. Please try again.";
    console.error(error);
    }
});
});
