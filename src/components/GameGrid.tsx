import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, err } = useGames();

  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding={10} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
