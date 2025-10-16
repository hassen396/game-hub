import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import type { Game } from "@/hooks/useGames"
import getCropedImageUrl from "@/Services/image-url";

interface Props {
    game: Game;
}
const GameCard = ({game}: Props) => {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        borderRadius: 3,
        overflow: "hidden",
        border: (theme) => (theme.palette.mode === "dark" ? 1 : 0),
        // maxWidth: 280,
        mx: "auto",
      }}>
      <CardMedia
        component="img"
        height="180"
        image={getCropedImageUrl(game.background_image) || "/placeholder.png"}
        alt={game.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom noWrap>
          {game.name}
        </Typography>
        <Typography variant="body2">Released: {game.released}</Typography>
        <Typography variant="body2">Rating: {game.rating}</Typography>
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
  );
}

export default GameCard
