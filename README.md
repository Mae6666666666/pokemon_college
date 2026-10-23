# pokemon_college
This is where I make a Pokemon information website for a college assignment

Note to myself: The way you find the names for the pokemon, for example if you wanted to find the name that belongs to stats to show stats, this is the overall thing you do:

the const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) will grab an id, this id contains the pokemon and all of their information. to find the name of it, youd just print the response json data im pretty sure. then all you do is put the . next to it

so if you wanted the pokemon name, youd do:
pokemon.name
pokemon is the variable where the data is stored, name is the name of the key storing the name of the pokemon

so for the stats, its
pokemon.stats
that will give you the entirety of the stats of the pokemon, so dont do something like pokemon.name.stats, because stats isnt inside name, its inside pokemon and nothing else!
