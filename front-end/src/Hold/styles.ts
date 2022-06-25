import { Typography, Paper, Container, IconButton } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const Wrapper = styled(Container)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    py: "120px",
  })
);

export const HoldTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#141722",
    fontSize: "48px",
    fontFamily: "TTNormsProBold",
    letterSpacing: 1,
  })
);

export const CardTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#141722",
    fontSize: "28px",
    fontFamily: "TTNormsProBold",
    letterSpacing: 1,
    textAlign: "center",
    mt: 2,
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
    mt: 1,
    color: "#7E7D7D",
    fontSize: "16px",
    fontFamily: "TTNormsPro",
    letterSpacing: 1,
    textAlign: "center",
    maxWidth: "80%",
  })
);

export const Card = styled(Paper)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFFFFF",
    height: "501px",
    p: 2,
    cursor: "context-menu",
    borderRadius: "8px",
    width: "100%",
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
