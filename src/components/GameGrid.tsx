import useGames from "@/hooks/useGames";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Stack from "@mui/material/Stack";
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
          <Card
            sx={{
              bgcolor: "background.paper",
              borderRadius: 3,
              overflow: "hidden",
              border: (theme) => (theme.palette.mode === "dark" ? 1 : 0),
              maxWidth: 280,
              mx: "auto",
            }}>
            <CardMedia
              component="img"
              height="180"
              image={game.background_image || "/placeholder.png"}
              alt={game.name}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom noWrap>
                {game.name}
              </Typography>
              <Typography variant="body2" color="grey.100">
                Released: {game.released}
              </Typography>
              <Typography variant="body2" color="grey.100">
                Rating: {game.rating}
              </Typography>
              <Stack
                direction="row"
                justifyContent={"space-between"}
                alignItems={"center"}>
                <PlatformIconList
                  platforms={game.parent_platforms.map((p) => p.platform)}
                />
                <CriticScore score={game.metacritic} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GameGrid;
