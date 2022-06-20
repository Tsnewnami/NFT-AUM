import { Box, FormControl, Typography, Theme, Button } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const BoxSocialsConnect = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    mr: 2,
  })
);

export const ButtonDashboard = styled(Button)(({ theme: Theme }) =>
  sx({
    background: "#141722",
    borderRadius: "48px",
    height: "48px",
    px: 3,
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

export const TitleSections = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "rgba(0, 0, 0, 0.75)",
    fontSize: "16px",
    fontFamily: "ChangaOne",
    letterSpacing: 1,
  })
);

export const BoxLogo = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [Theme.breakpoints.down("sm")]: {
      flexGrow: 1,
    },
  })
);

export const BoxMenuItems = styled(Box)(({ theme: Theme }) =>
  sx({
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    textTransform: "none",
  })
);

export const BannerTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "white",
    fontSize: "16px",
    fontFamily: "Changa",
    letterSpacing: 1,
  })
);
