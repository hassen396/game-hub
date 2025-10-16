import { Box } from "@mui/material";
import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const GameCardContainer = ({children}: Props) => {
  return <Box width={280}>
    {children}
  </Box>;
};

export default GameCardContainer;
