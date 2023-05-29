import { HStack, Icon, Image, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Pokemon from "../assets/pokemon.png";
import PokemonList from "../components/PokemonList";
import useSearchPokemon from "../hooks/useSearchPokemon";

function Home() {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const { pokemon } = useSearchPokemon(search);
  console.log(pokemon)
          
  return (
    <VStack id="home" h="100vh" gap={12}>
      <Image src={Pokemon} alt="pokemon logo" />
      <HStack
        boxShadow="md"
        px={6}
        borderRadius="md"
        maxW="container.md"
        w="full"
        bgColor="gray.100"
      >
        <Input
          type="text"
          placeholder="Search"
          variant="unstyled"
          onChange={(e) => handleSearch(e)}
          autoFocus
          fontSize='20px'
          _placeholder={{ paddingLeft: 1 }}
          lineHeight='54px'
        />
        <Icon cursor="pointer" as={BsSearch} boxSize={5} />
      </HStack>
      <PokemonList />
    </VStack>
  );
}

export default Home;
