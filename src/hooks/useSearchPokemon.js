import { useEffect } from "react";
import { useState } from "react";

function useSearchPokemon (name) {
    const [pokemon, setPokemon] = useState({});

    useEffect(
        () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => setPokemon(data))
        .catch(error => console.error(error))
        }, [name]
    )

        return { pokemon }
}

export default useSearchPokemon;