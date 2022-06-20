import { Grid, Box, Typography } from "@mui/material";
import {
  Card,
  Wrapper,
  CardTitle,
  ButtonJoin,
  ButtonTitle,
  ButtonDashboard,
} from "./styles";
import space from "../assets/img/space.png";

const AboutUs = () => {
  const elevation: number = 4;

  return (
    <Wrapper maxWidth="xl">
      <Grid container columnSpacing={2} sx={{ mt: 7 }}>
        <Grid
          item
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <CardTitle>5000</CardTitle>
          <CardTitle>Stressed Dads</CardTitle>
          <CardTitle>On a Money</CardTitle>
          <CardTitle>Making Mission</CardTitle>
          <Typography>The First NFT Hedge Fund On ETH</Typography>
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
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box component="img" alt="arrow" src={space} sx={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AboutUs;
