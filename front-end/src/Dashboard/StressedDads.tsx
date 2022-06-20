import { Grid } from "@mui/material";
import { Card, CardText, CardTitle, Title, Wrapper } from "./styles";

const StressedDads = () => {
  const elevation: number = 8;

  return (
    <>
      <Wrapper>
        <Title>Portfolio Value: 12,000 USD</Title>
        <Grid container columnSpacing={2} sx={{ mt: 3 }}>
          <Grid
            item
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Card elevation={elevation}>
              <CardTitle>Dad Holdings </CardTitle>
              <CardText>12</CardText>
            </Card>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Card elevation={elevation}>
              <CardTitle>Collection Value</CardTitle>
              <CardText>$12</CardText>
            </Card>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Card elevation={elevation}>
              <CardTitle>Payout APY</CardTitle>
              <CardText>122</CardText>
            </Card>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Card elevation={elevation}>
              <CardTitle>Floor Price</CardTitle>
              <CardText>12</CardText>
            </Card>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default StressedDads;
