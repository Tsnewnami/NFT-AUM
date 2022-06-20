import { Paper, Grid, Box, Link } from "@mui/material";
import {
  Card,
  CardSubTitle,
  CardText,
  CardTitle,
  ButtonBuyDad,
  Wrapper,
  ButtonTitle,
  ButtonDetails,
} from "./styles";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import pc from "../assets/img/pc.png";
import { docsLink } from "../utils/links";

const Performance = () => {
  return (
    <Wrapper maxWidth="xl">
      <Paper
        elevation={0}
        sx={{
          background: "white",
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

              <CardText paragraph sx={{ mt: 3 }}>
                Track Stats in Realtime
              </CardText>
              <CardText paragraph>
                As a Lazy Lions NFT holder, you automatically gain access to our
                exclusive ROARwards program
              </CardText>
              <CardText paragraph>DAO Voting & Submissions</CardText>
              <CardText paragraph>
                Take part in voting on the next business venture or submit your
                own idea. Every wallet gets one vote regardless on the amount of
                ducks. Whales are great, but they should not be the deciding
                factor of our community.
              </CardText>

              <Box sx={{ display: "flex", alignItems: "center", mt: "8px" }}>
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
