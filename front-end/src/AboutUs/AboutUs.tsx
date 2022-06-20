import { Grid, Box } from "@mui/material";
import { Card, AboutUsTitle, Wrapper, CardTitle } from "./styles";
import Coinbag from "../assets/img/bag.png";

const AboutUs = () => {
  const elevation: number = 4;

  return (
    <Wrapper maxWidth="xl">
      <AboutUsTitle>LearnMore</AboutUsTitle>
      <AboutUsTitle>AboutUs</AboutUsTitle>

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
          <Card elevation={elevation}>
            <Box
              component="img"
              alt="Lottoticket"
              src={Coinbag}
              sx={{ height: "100%" }}
            />
          </Card>
          <CardTitle>Meet the Team behind Stress Dads </CardTitle>
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
          <Card elevation={elevation}>
            <Box
              component="img"
              alt="arrow"
              src={Coinbag}
              sx={{ height: "100%" }}
            />
          </Card>
          <CardTitle>Roadmap</CardTitle>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AboutUs;
