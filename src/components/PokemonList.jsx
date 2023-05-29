import { Grid, GridItem, Heading, Spinner, VStack, Text } from "@chakra-ui/react";
import useGetPokemons from "../hooks/useGetPokemons";

function PokemonList() {
  const { pokemons, loading } = useGetPokemons(
    "https://pokeapi.co/api/v2/pokemon/?limit=20"
  );

  return (
    <VStack w='full' h='full' align='center' justify='center'>
      {loading ? (
        <VStack align='center' gap={6}>
          <Spinner boxSize='80px' alignSelf='center' borderWidth={4} justifySelf='center' label="loading pokemons" speed='500ms'/>
          <Text>Loading Pokemons...</Text>
        </VStack>
      ) : (
        <Grid w="full" templateColumns={{ base: 'repeat(2, 1fr)', md: "repeat(4, 1fr)"}} gap={10} h="full">
          {pokemons.map(({ name }) => (
            <GridItem key={name} bgColor='gray.100' p={4} borderRadius='md' boxShadow='md'>
              <Heading textTransform='uppercase' fontSize={20}>{name}</Heading>
            </GridItem>
          ))}
        </Grid>
      )}
    </VStack>
  );
}

export default PokemonList;
