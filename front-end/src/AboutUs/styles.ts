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

export const Wrapper = styled(Container)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    py: "120px",
  })
);

export const AboutUsTitle = styled(Typography)(({ theme: Theme }) =>
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
    alignItems: "center",
    background: "#FFFFFF",
    height: "428px",
    cursor: "context-menu",
    borderRadius: "8px",
    width: "100%",
  })
);
