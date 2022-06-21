import { Box, Container, Typography, Theme, Button, Link } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const Wrapper = styled(Box)(({ theme: Theme }) =>
  sx({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#212529",
  })
);

export const WrapperInit = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mt: 6,
  })
);

export const Socials = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: "82px",
    mt: 6,
  })
);

export const TitleJoin = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "white",
    fontSize: "48px",
    fontFamily: "TTNormsProBold",
    letterSpacing: 1,
  })
);

export const SubTitleJoin = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "white",
    fontSize: "24px",
    fontFamily: "TTNormsPro",
    letterSpacing: 1,
  })
);

export const ButtonSocials = styled(Button)(({ theme: Theme }) =>
  sx({
    background: "#626FFF",
    borderRadius: "1000px",
    height: "48px",
    px: 3,
  })
);

export const ButtonTitle = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "white",
    fontSize: "16px",
    fontFamily: "TTNormsPro",
    letterSpacing: 1,
  })
);

export const ContainerWrapper = styled(Container)(({ theme: Theme }) =>
  sx({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 6,
    mt: 4,
    [Theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  })
);

export const WrapperColumn = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [Theme.breakpoints.down("sm")]: {
      mt: 3,
      mb: 3,
    },
  })
);

export const WrapperRow = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    mt: 2,
    [Theme.breakpoints.down("sm")]: {
      justifyContent: "space-evenly",
      width: "100%",
    },
  })
);

export const Copyright: any = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "white",
    fontSize: "14px",
    fontFamily: "TTNormsPro",
    letterSpacing: 1,
  })
);

export const WrapperColumn2 = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    mr: 8,
    [Theme.breakpoints.down("sm")]: {
      alignItems: "center",
      mr: 0,
      mb: 3,
    },
  })
);

export const WrapperRow2 = styled(Box)(({ theme: Theme }) =>
  sx({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [Theme.breakpoints.down("sm")]: {
      mt: 1,
      flexDirection: "column",
      justifyContent: "space-evenly",
      width: "100%",
    },
  })
);

export const Title = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "#878787",
    fontSize: "16px",
    fontFamily: "TTNormsProBold",
    letterSpacing: 1,
  })
);

export const TextNormal = styled(Typography)(({ theme: Theme }) =>
  sx({
    color: "white",
    fontSize: "16px",
    fontFamily: "TTNormsPro",
    letterSpacing: 1,
    "&: hover": {
      color: "#0066FF",
    },
  })
);

export const LinkWrapper = styled(Link)(({ theme: Theme }) =>
  sx({
    textDecoration: "none",
    cursor: "pointer",
    mt: 1,
  })
);
