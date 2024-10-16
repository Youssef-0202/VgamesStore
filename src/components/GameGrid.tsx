import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, err, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding={10} spacing={5}>
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer>
              <GameCardSkeleton key={s}></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
