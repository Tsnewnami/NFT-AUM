import {
  Box,
  FormControl,
  Typography,
  Theme,
  Button,
  Paper,
  Container,
  IconButton,
} from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const Wrapper = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    mt: 9,
    px: 7,
  })
);

export const Title = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "rgba(0, 0, 0, 0.9)",
    fontSize: "42px",
    fontFamily: "ChangaOne",
    letterSpacing: 1,
  })
);

export const CardTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#212529",
    fontSize: "24px",
    fontFamily: "Changa",
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
    color: "#212529",
    fontSize: "16px",
    fontFamily: "Changa",
    letterSpacing: 1,
    textAlign: "center",
    maxWidth: "257px",
  })
);

export const Card = styled(Paper)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    background: "#FFFFFF",
    height: "112px",
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
