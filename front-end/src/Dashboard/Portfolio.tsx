import { Grid } from "@mui/material";
import { Card, CardText, CardTitle, Title, Wrapper } from "./styles";

const Portfolio = () => {
  const elevation: number = 8;

  return (
    <>
      <Wrapper>
        <Title>Portfolio Overview </Title>
        <Grid container columnSpacing={2} sx={{ mt: 3 }}>
          <Grid
            item
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Card elevation={elevation}>
              <CardTitle>Total Trades</CardTitle>
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
              <CardTitle>Account Value</CardTitle>
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
              <CardTitle>Collatoral</CardTitle>
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
              <CardTitle>Profit to Date </CardTitle>
              <CardText>12</CardText>
            </Card>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default Portfolio;
