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
import dog from "../assets/img/dog.png";
import { docsLink } from "../utils/links";

const LearnMore = () => {
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
          <Grid item sm={6} justifyContent={"center"}>
            <Box component="img" alt="nft" src={dog} sx={{ width: "500px" }} />
          </Grid>
          <Grid item sm={6}>
            <Card sx={{ background: "transparent" }}>
              <CardTitle>Learn More About </CardTitle>
              <CardTitle sx={{ mt: -2 }}>Stressed Dads</CardTitle>

              <CardText paragraph sx={{ mt: 3 }}>
                Our collection of 10,000 NFTs have been handdrawn by Guava De
                Artist to include over a million different attribute
                combinations. Each duck is categorized into Legendary, Super
                Rare, Rare & Common values.
              </CardText>
              <CardText paragraph>
                25 have been 100% hand drawn & are the only legendaries.
              </CardText>
              <CardText paragraph>
                25 have been 100% hand drawn & are the only legendaries.
              </CardText>
              <CardText paragraph>
                25 have been 100% hand drawn & are the only legendaries.
              </CardText>

              <Box sx={{ display: "flex", alignItems: "center", mt: "8px" }}>
                <ButtonBuyDad key="connect" variant="contained">
                  <ButtonTitle>Buy a Dad</ButtonTitle>
                </ButtonBuyDad>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Wrapper>
  );
};

export default LearnMore;
