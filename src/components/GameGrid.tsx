import useGames from "@/hooks/useGames";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import GameCard from "./GameCard";
const GameGrid = () => {
  const { games, error, loading } = useGames();
  if (loading)
    return (
      <Grid container spacing={2} justifyContent={"center"}>
        {Array.from({ length: 16 }).map((_, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
            <Skeleton variant="rectangular" height={200} />
            <Skeleton />
            <Skeleton width="60%" />
          </Grid>
        ))}
      </Grid>
    );

  if (error)
    return (
      <Typography color="error" textAlign="center" mt={5}>
        {error}
      </Typography>
    );

  return (
    <Grid container justifyContent="center" spacing={2}>
      {games.map((game) => (
        <Grid columns={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={game.id}>
          <GameCard game={game} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GameGrid;
