import useGenres from '@/hooks/useGenres';
import Avatar from '@mui/material/Avatar';

import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import getCropedImageUrl from '@/Services/image-url';

const GenreList = () => {
  const { data: genres } = useGenres();
  console.log(genres);
  return (
    <List>
      {genres.map(genre => (
        <ListItem sx={{ pt: 2, display: 'flex', alignItems: 'center', gap: 2 }} key={genre.id}>
          <ListItemAvatar>
            <Avatar variant="square" sx={{ width: 50, height: 50, borderRadius: 2 }} src={getCropedImageUrl(genre.image_background)}></Avatar>
          </ListItemAvatar>
          <ListItemText slotProps={{ primary: { sx: { fontSize: '1.1rem', fontWeight: 500 } } }} primary={genre.name}></ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
