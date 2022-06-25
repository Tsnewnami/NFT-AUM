import { Typography, Paper, Container } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const Wrapper = styled(Container)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    py: "120px",
  })
);

export const AboutUsTitle: any = styled(Typography)(({ theme: Theme }) =>
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
    mt: 3,
  })
);

export const Card = styled(Paper)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFFFFF",
    height: "428px",
    cursor: "context-menu",
    borderRadius: "8px",
    width: "100%",
  })
);
