import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import {
  Wrapper,
  Title,
  ButtonJoin,
  ButtonTitle,
  ButtonDashboard,
  SubTitle,
} from "./styles";
import space from "../assets/img/space.png";

const Initial = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Wrapper maxWidth="xl">
      <Grid container columnSpacing={2} sx={{ mt: 7, px: "96px" }}>
        <Grid
          item
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Title>5000</Title>
          <Title>Stressed Dads</Title>
          <Title>On a Money</Title>
          <Title>Making Mission</Title>
          <SubTitle>The First NFT Hedge Fund On ETH</SubTitle>
          <Box sx={{ display: "flex", mt: 7 }}>
            <ButtonJoin variant="contained">
              <ButtonTitle>Join The Club</ButtonTitle>
            </ButtonJoin>
            <ButtonDashboard variant="outlined">
              <ButtonTitle sx={{ color: "#141722" }}>
                View Dashboard
              </ButtonTitle>
            </ButtonDashboard>
          </Box>
        </Grid>
        <Grid
          item
          sm={6}
          sx={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Box component="img" alt="arrow" src={space} sx={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Initial;
