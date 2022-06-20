import { Box, Button, Grid, Typography } from "@mui/material";
import { Card, CardText, CardTitle, Title, Wrapper } from "./styles";

const Payday = () => {
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
              <CardTitle>Last Payday </CardTitle>
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
              <CardTitle>Earnings to Date</CardTitle>
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
              <CardTitle>Avg Weekly Rewards</CardTitle>
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
              <CardTitle>Yearly Rewards</CardTitle>
              <CardText>12</CardText>
            </Card>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "112px",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
            background: "#141722",
            px: 4,
            borderRadius: "16px",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", color: "white" }}
          >
            <Typography>Claimable</Typography>
            <Typography>$15,000</Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ borderRadius: "48px", background: "white", color: "#141722" }}
          >
            Claim Rewards
          </Button>
        </Box>
      </Wrapper>
    </>
  );
};

export default Payday;
