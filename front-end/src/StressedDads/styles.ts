import { Box, Typography, Button, Container } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const Wrapper = styled(Container)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: 7,
  })
);

export const CardTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#141722",
    fontSize: "48px",
    fontFamily: "TTNormsProBold",
    letterSpacing: 1,
  })
);

export const CardSubTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#141722",
    fontSize: "28px",
    fontFamily: "TTNormsProBold",
    letterSpacing: 1,
  })
);

export const CardText = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#7E7D7D",
    fontSize: "20px",
    fontFamily: "TTNormsPro",
    letterSpacing: 1,
    maxWidth: "100%",
    ml: 1,
  })
);

export const Card = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    background: "#FFFFFF",
    cursor: "context-menu",
  })
);

export const ButtonBuyDad = styled(Button)(({ theme: Theme }) =>
  sx({
    background: "#141722",
    borderRadius: "48px",
    height: "48px",
    minWidth: "124px",
  })
);

export const ButtonTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "white",
    fontSize: "16px",
    fontFamily: "TTNormsProBold",
    letterSpacing: 1,
  })
);

export const ButtonDetails = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#0066FF",
    textDecoration: "underline",
    fontSize: "16px",
    fontFamily: "ChangaOne",
    letterSpacing: 1,
    "&: hover": {
      opacity: 0.5,
    },
  })
);

export const WrapperWelcome = styled(Container)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    pt: "67px",
    pb: "73px",
  })
);

export const ButtonDiscord = styled(Button)(({ theme: Theme }) =>
  sx({
    background: "#626FFF",
    borderRadius: "8px",
    height: "52px",
    minWidth: "311px",
  })
);

export const LotteryWrapper = styled(Box)(({ theme: Theme }) =>
  sx({
    pt: "27px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "context-menu",
    position: "relative",
  })
);

export const TitleWrapper = styled(Box)(({ theme: Theme }) =>
  sx({
    zIndex: 5,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "context-menu",
  })
);

export const LpText = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "white",
    fontSize: "50px",
    fontFamily: "ChangaOne",
    letterSpacing: 1,
  })
);

export const LpSubText = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "white",
    fontSize: "20px",
    fontFamily: "ChangaOne",
    letterSpacing: 1,
  })
);

export const ButtonMint = styled(Button)(({ theme: Theme }) =>
  sx({
    background: "#FFF037",
    borderRadius: "8px",
    height: "58px",
    minWidth: "165px",
    "&: disabled": {
      background: "#FFF037",
    },
  })
);

export const ButtonMintText = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#212529",
    fontSize: "16px",
    fontFamily: "ChangaOne",
    letterSpacing: 1,
  })
);

export const ButtonWrapper = styled(Box)(({ theme: Theme }) =>
  sx({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    my: 3,
    alignItems: "center",
  })
);

export const LotteryInfoWrapper = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    mt: 6,
    [Theme.breakpoints.only("md")]: {
      mt: 12,
    },
    [Theme.breakpoints.only("sm")]: {
      mt: 12,
    },
  })
);

export const SmallBoxWrapper = styled(Box)(({ theme: Theme }) =>
  sx({
    position: "absolute",
    top: 0,
    mt: -5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "541px",
    height: "46px",
    background: "white",
    borderRadius: "16px 16px 0px 0px",
    [Theme.breakpoints.only("sm")]: {
      width: "470px",
    },
  })
);

export const SmallBoxText = styled(Box)(({ theme: Theme }) =>
  sx({
    color: "rgba(33, 37, 41, 0.8)",
    fontSize: "16px",
    letterSpacing: 1.5,
    fontFamily: "ChangaOne",
    [Theme.breakpoints.only("sm")]: {
      fontSize: "13px",
    },
    [Theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  })
);

export const BoxInfoWrapper = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    background: "white",
    width: "1108px",
    height: "139px",
    borderRadius: "16px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
    border: "1px solid #EFEFEF",
    zIndex: 1,
    [Theme.breakpoints.only("md")]: {
      width: "900px",
    },
    [Theme.breakpoints.only("sm")]: {
      width: "700px",
      height: "108px",
    },
  })
);

export const BoxInfoText = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "350px",
    [Theme.breakpoints.only("md")]: {
      width: "350px",
    },
    [Theme.breakpoints.only("sm")]: {
      width: "320px",
    },
  })
);

export const InfoTextTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "rgba(134, 142, 150, 1)",
    fontSize: "16px",
    fontFamily: "Changa",
    letterSpacing: 1,
  })
);

export const InfoTextSubTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "rgba(33, 37, 41, 1)",
    fontFamily: "Changa",
    letterSpacing: 1,
    fontSize: "50px",
    [Theme.breakpoints.only("md")]: {
      fontSize: "40px",
    },
    [Theme.breakpoints.only("sm")]: {
      fontSize: "30px",
    },
    [Theme.breakpoints.down("sm")]: {
      fontSize: "26px",
    },
  })
);
