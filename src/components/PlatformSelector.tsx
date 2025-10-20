import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

interface Props {
  onPlatformChange: (platform: Platform | null) => void;
  platform: Platform | null;
}
const PlatformSelector = ({ onPlatformChange, platform }: Props) => {
  const { data: platforms, error } = usePlatforms();

  const handlePlatformChange = (event: SelectChangeEvent<string>) => {
    const selectedId = event.target.value;
    const platform: Platform | null = platforms.find(p => p.id === Number(selectedId)) || null;
    onPlatformChange(platform);
  };
  if (error) return null;
  return (
    <FormControl sx={{ minWidth: { sm: 120, md: 160 } }} size="small">
      <Select
        displayEmpty
        input={<OutlinedInput />}
        onChange={handlePlatformChange}
        id="platform-select"
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
