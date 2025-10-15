import type { Platform } from "@/hooks/useGames";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { JSX } from "react";
interface Props {
  platforms: Platform[];
}

// Map platform slug to icon component
const platformIconMap: Record<string, JSX.Element> = {
  pc: <FaWindows />,
  playstation: <FaPlaystation />,
  xbox: <FaXbox />,
  nintendo: <SiNintendo />,
  mac: <FaApple />,
  linux: <FaLinux />,
  ios: <MdPhoneIphone />,
  android: <FaAndroid />,
  web: <BsGlobe />,
};
const PlatformIconList = ({ platforms }: Props) => {
  return (
    <Box display={"flex"} mt={1.5} flexDirection={"row"} gap={1}>
      {platforms.map((p) => (
        <Typography key={p.id} color='grey.500' component="span">
          {platformIconMap[p.slug] || <BsGlobe />}
        </Typography>
      ))}
    </Box>
  );
};

export default PlatformIconList;
