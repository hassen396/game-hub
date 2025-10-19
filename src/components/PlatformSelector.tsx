import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

interface Props {
  onPlatformChange: (platform: Platform | null) => void;
  platform: Platform | null;
}
const PlatformSelector = ({ onPlatformChange, platform }: Props) => {
  const { data: platforms, error } = usePlatforms();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedId = event.target.value;
    const platform: Platform | null = platforms.find(p => p.id === Number(selectedId)) || null;
    onPlatformChange(platform);
  };
  if (error) return null;
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-platform-label"></InputLabel>
      <Select
        onChange={handleChange}
        labelId="select-platform-label"
        id="platform-select"
        displayEmpty
        value={platform?.id.toString() || ""}
        label="Platforms">
        <MenuItem value="">
          <em>All Platforms</em>
        </MenuItem>
        {platforms.map(platform => (
          <MenuItem key={platform.id} value={platform.id.toString()}>
            {platform.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PlatformSelector;
