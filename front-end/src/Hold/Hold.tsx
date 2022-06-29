import { Grid, Box } from "@mui/material";
import {
  ButtonCard,
  Card,
  CardText,
  CardTitle,
  HoldTitle,
  Wrapper,
} from "./styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Coinbag from "../assets/img/bag.png";

const Hold = () => {
  const elevation: number = 4;

  return (
    <Wrapper maxWidth="xl">
      <HoldTitle>Why Hold</HoldTitle>
      <HoldTitle>Stressed Dads?</HoldTitle>

      <Grid container columnSpacing={2} sx={{ mt: 7, px: "96px" }}>
        <Grid
          item
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Card elevation={elevation}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                alt="Lottoticket"
                src={Coinbag}
                sx={{ height: "219px" }}
              />
              <CardTitle>Weekly Rewards</CardTitle>
              <CardText>
                Our bulls are the luckiest on Cardano. Holding a Bull
                automatically enters you into the jackpot!
              </CardText>
            </Box>
            <ButtonCard>
              <ArrowForwardIcon sx={{ color: "#141722" }} />
            </ButtonCard>
          </Card>
        </Grid>
        <Grid
          item
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card elevation={elevation}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                alt="Coinbag"
                src={Coinbag}
                sx={{ height: "219px" }}
              />
              <CardTitle>Payout Rewards</CardTitle>
              <CardText>
                Get bullish. We're bringing the first Lottery token to Cardano,
                Holding a Bull makes you eligible for Payday Rewards.
              </CardText>
            </Box>
            <ButtonCard>
              <ArrowForwardIcon sx={{ color: "#141722" }} />
            </ButtonCard>
          </Card>
        </Grid>
        <Grid
          item
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Card elevation={elevation}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                alt="arrow"
                src={Coinbag}
                sx={{ height: "219px" }}
              />
              <CardTitle>Weekly Rewards</CardTitle>
              <CardText>
                We don't just rely on luck. We're all savy Business Bulls. So Q3
                we start expanding our service offering (bullflip).
              </CardText>
            </Box>
            <ButtonCard>
              <ArrowForwardIcon sx={{ color: "#141722" }} />
            </ButtonCard>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Hold;
