import useGenres, { type Genre } from "@/hooks/useGenres";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import getCropedImageUrl from "@/Services/image-url";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

interface Props {
  onGenreSelect: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}
const GenreList = ({ onGenreSelect, selectedGenre }: Props) => {
  const { data: genres, loading, error } = useGenres();
  if (loading)
    return (
      <Box display={"flex"} justifyContent="center" pt={20}>
        <CircularProgress enableTrackSlot variant="indeterminate" size={60} />
      </Box>
    );
  if (error) console.log(error);
  return (
    <>
      <Typography align="center" variant="h4" fontWeight="bold" gutterBottom>
        Genres
      </Typography>
      <List>
        {genres.map(genre => (
          <ListItem sx={{ pt: 2, display: "flex", alignItems: "center", gap: 2 }} key={genre.id}>
            <ListItemAvatar>
              <Avatar
                variant="square"
                sx={{ width: 50, height: 50, borderRadius: 2, "& img": { objectFit: "cover" } }}
                src={getCropedImageUrl(genre.image_background)}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Link
                  component="button"
                  underline="hover"
                  onClick={() => onGenreSelect(genre)}
                  sx={{
                    display: "block",
                    textAlign: "left",
                    alignSelf: "flex-start",
                    fontSize: selectedGenre?.id == genre.id ? "1.5rem" : "1.1rem",
                    fontWeight: selectedGenre?.id == genre.id ? 900 : 500,
                    color: "text.primary",
                    "&:hover": { color: "primary.main" },
                  }}>
                  {genre.name}
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
