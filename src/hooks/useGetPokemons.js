import { useEffect, useState } from "react";

function useGetPokemons(url) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error(`Sorry, we have had the following problem ${error}`))
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
  }, [url]);

  return {pokemons, loading};
}

export default useGetPokemons;
