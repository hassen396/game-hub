import useGames from "@/hooks/useGames";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import GameCard from "./GameCard";
import GameCardSkeloton from "./GameCardSkeloton";
import GameCardContainer from "./GameCardContainer";
const GameGrid = () => {
  const { data: games, error, loading } = useGames();
  if (error)
    return (
      <Typography color="error" textAlign="center" mt={5}>
        {error}
      </Typography>
    );

  return (
    <Grid container justifyContent="center" spacing={2}>
      {loading
        ? Array.from({ length: 16 }).map((_, i) => (
            <GameCardContainer key={i}>
              <GameCardSkeloton />
            </GameCardContainer>
          ))
        : games.map((game) => (
            <GameCardContainer>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
    </Grid>
  );
};

export default GameGrid;
