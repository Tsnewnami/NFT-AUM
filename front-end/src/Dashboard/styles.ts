import { Box, Typography, Paper, IconButton } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const Wrapper = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    mt: 9,
    px: 7,
    mb: "100px",
  })
);

export const Title = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#141722",
    fontSize: "28px",
    fontFamily: "TTNormsProBold",
    letterSpacing: 1,
  })
);

export const SubTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#141722",
    fontSize: "20px",
    fontFamily: "TTNormsPro",
    letterSpacing: 1,
  })
);

export const CardTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#7E7D7D",
    fontSize: "20px",
    fontFamily: "TTNormsPro",
    letterSpacing: 1,
  })
);

export const CardSubTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: "34px",
    fontFamily: "Changa",
    letterSpacing: 1,
  })
);

export const CardText = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#141722",
    fontSize: "28px",
    fontFamily: "TTNormsProExtraBold",
    letterSpacing: 1,
    textAlign: "center",
  })
);

export const Card = styled(Paper)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    background: "#FFFFFF",
    height: "112px",
    p: 2,
    cursor: "context-menu",
    borderRadius: "8px",
    width: "100%",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  })
);

export const ButtonCard = styled(IconButton)(({ theme: Theme }) =>
  sx({
    border: "2px solid #141722",
    borderRadius: "48px",
    width: "72px",
    height: "48px",
    p: 3,
    mt: 3,
  })
);

export const ButtonTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "white",
    fontSize: "16px",
    fontFamily: "ChangaOne",
    letterSpacing: 1,
  })
);

export const ClaimText = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "white",
    fontSize: "20px",
    fontFamily: "TTNormsPro",
    letterSpacing: 1,
  })
);

export const ClaimValueText = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "white",
    fontSize: "28px",
    fontFamily: "TTNormsProBold",
    letterSpacing: 1,
  })
);

export const ClaimButtonText: any = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#141722",
    fontSize: "16px",
    fontFamily: "TTNormsProBold",
    letterSpacing: 1,
  })
);
