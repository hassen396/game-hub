import GameCardContainer from "./GameCardContainer";
import Typography from "@mui/material/Typography";
import GameCardSkeloton from "./GameCardSkeloton";
import type { GameQuery } from "@/App";
import { Grid } from "@mui/material";
import GameCard from "./GameCard";
import useGames from "@/hooks/useGames";

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, loading } = useGames(gameQuery);
  if (error)
    return (
      <Typography color="error" textAlign="center" mt={5}>
        {error}
      </Typography>
    );

  return (
    <Grid container spacing={3}>
      {loading
        ? Array.from({ length: 16 }).map((_, i) => (
            <GameCardContainer key={i}>
              <GameCardSkeloton />
            </GameCardContainer>
          ))
        : games.map(game => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
    </Grid>
  );
};

export default GameGrid;
