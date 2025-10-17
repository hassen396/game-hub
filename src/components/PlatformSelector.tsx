import usePlatforms from "@/hooks/usePlatforms";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();
  if(error) return null;
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-platform">Platforms</InputLabel>
      <Select
        labelId="select-platform"
        id="demo-select-small"
        value={""}
        label="Platforms"
        // onChange={handleChange}
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {platforms.map(platform => (
          <MenuItem key={platform.id} value={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PlatformSelector;
