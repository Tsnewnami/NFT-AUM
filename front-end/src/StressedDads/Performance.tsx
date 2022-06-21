import { Paper, Grid, Box } from "@mui/material";
import {
  Card,
  CardSubTitle,
  CardText,
  CardTitle,
  ButtonBuyDad,
  Wrapper,
  ButtonTitle,
} from "./styles";

import SettingsIcon from "@mui/icons-material/Settings";
import pc from "../assets/img/pc.png";

const Performance = () => {
  return (
    <Wrapper maxWidth="xl">
      <Paper
        elevation={0}
        sx={{
          background: "transparent",
          width: "100%",
          borderRadius: "8px",
          py: "48px",
          px: "48px",
        }}
      >
        <Grid container columnSpacing={5}>
          <Grid item sm={6}>
            <Card sx={{ background: "transparent" }}>
              <CardTitle>DashBoard </CardTitle>
              <CardTitle sx={{ mt: -2 }}>Performance</CardTitle>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1, mt: 3 }}>
                <SettingsIcon sx={{ width: "40px", height: "40px" }} />
                <CardSubTitle sx={{ ml: 1 }}>
                  Track Stats in Realtime
                </CardSubTitle>
              </Box>

              <CardText paragraph sx={{ ml: "48px" }}>
                As a Lazy Lions NFT holder, you automatically gain access to our
                exclusive ROARwards program
              </CardText>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1, mt: 3 }}>
                <SettingsIcon sx={{ width: "40px", height: "40px" }} />
                <CardSubTitle sx={{ ml: 1 }}>
                  DAO Voting & Submissions
                </CardSubTitle>
              </Box>

              <CardText paragraph sx={{ ml: "48px" }}>
                Take part in voting on the next business venture or submit your
                own idea. Every wallet gets one vote regardless on the amount of
                ducks. Whales are great, but they should not be the deciding
                factor of our community.
              </CardText>

              <Box
                sx={{ display: "flex", alignItems: "center", mt: "8px", ml: 6 }}
              >
                <ButtonBuyDad key="connect" variant="contained">
                  <ButtonTitle>Buy a Dad</ButtonTitle>
                </ButtonBuyDad>
              </Box>
            </Card>
          </Grid>
          <Grid item sm={6} justifyContent={"center"}>
            <Box component="img" alt="nft" src={pc} sx={{ width: "526px" }} />
          </Grid>
        </Grid>
      </Paper>
    </Wrapper>
  );
};

export default Performance;
