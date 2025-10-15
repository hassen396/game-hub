
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CriticScore = ({ score }: { score: number }) => {
  const bgColor = score > 90? 'success.light': score > 80? "warning.light": score > 70? "warning.main":"";
    return (
    <Box
      sx={{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 20,
        borderRadius: 1,
        bgcolor:bgColor ,
      }}>
      <Typography fontSize={20}>{score}</Typography>
    </Box>
  );
};

export default CriticScore;
