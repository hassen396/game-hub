import type { GameQuery } from '@/App'
import { Typography } from '@mui/material'
interface Props {
    gamequery: GameQuery;
}
const GameHeading = ({ gamequery }: Props) => {
  return (
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      {`${gamequery?.platform?.name || ''} ${gamequery?.genre?.name || ''} Games`}
    </Typography>
  )
}

export default GameHeading
