import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import {
  Card,
  CardText,
  CardTitle,
  ClaimButtonText,
  ClaimText,
  ClaimValueText,
  SubTitle,
  Title,
  Wrapper,
} from "./styles";

const Payday = () => {
  const elevation: number = 8;
  const [proposals, setProposals] = useState([
    {
      title: "Mens Health",
      amount: "Donation Amount",
    },
    {
      title: "Mens Health",
      amount: "Donation Amount",
    },
    {
      title: "Mens Health",
      amount: "Donation Amount",
    },
  ]);

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
            <ClaimText>Claimable</ClaimText>
            <ClaimValueText>$15,000</ClaimValueText>
          </Box>
          <Button
            variant="contained"
            sx={{
              borderRadius: "48px",
              background: "white",
              color: "#141722",
              p: 2,
            }}
          >
            <ClaimButtonText>Claim Rewards</ClaimButtonText>
          </Button>
        </Box>
        <Title sx={{ mt: 9 }}>Monthly Mens Inititives</Title>
        <SubTitle>Vote every month on 3 charity proposals</SubTitle>
        {proposals.map((el, index) => (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "112px",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 3,
              background: "#F1F1F4",
              px: 4,
              borderRadius: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ClaimText sx={{ color: "#141722" }}>
                Initive {index}{" "}
                <span style={{ color: "#7E7D7D" }}>{el.amount}</span>
              </ClaimText>
              <ClaimValueText sx={{ color: "#141722" }}>
                {el.title}
              </ClaimValueText>
            </Box>
            <Button
              variant="contained"
              sx={{
                borderRadius: "48px",
                background: "white",
                color: "#141722",
                py: 2,
                px: 4,
              }}
            >
              <ClaimButtonText>Vote</ClaimButtonText>
            </Button>
          </Box>
        ))}
      </Wrapper>
    </>
  );
};

export default Payday;
