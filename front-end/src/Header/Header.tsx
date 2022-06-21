import { useState } from "react";
import { AppBar, Toolbar, Button, Container, Box, Link } from "@mui/material";
import {
  BoxLogo,
  BoxMenuItems,
  BoxSocialsConnect,
  ButtonDashboard,
  ButtonTitle,
  TitleSections,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import logo from "../assets/img/logo.png";
import discord from "../assets/img/discord.svg";
import twitter from "../assets/img/twitter.svg";
import medium from "../assets/img/medium.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { discordLink, mediumLink, twitterLink } from "../utils/links";

const Header = (props: any) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const pages = ["Roadmap", "Docs", "Features", "About", "Opensea"];

  const handleNavigation = (index: number) => {
    // if (index === 0) {
    //   navigate("/");
    // }
    // if (index === 1) {
    //   navigate("/dashboard");
    // }
    // if (index === 2) {
    //   navigate("/bullionairesRarity");
    // }
  };

  return (
    <>
      <AppBar
        position="static"
        style={{ background: "#F3CE8C", zIndex: 5 }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ pb: matches ? 2 : 1, pt: 5 }}>
            {matches && (
              <Menu
                onClick={() => setOpen(true)}
                sx={{ color: "black", position: "absolute", left: 0 }}
              />
            )}
            <BoxLogo>
              <img src={logo} alt="bullionaires" />
            </BoxLogo>
            {!matches && (
              <BoxMenuItems>
                {pages.map((page, index) => (
                  <Button
                    key={page}
                    onClick={() => {
                      handleNavigation(index);
                    }}
                    sx={{ my: 2, display: "block", borderRadius: 1000, mr: 4 }}
                  >
                    <TitleSections>{page}</TitleSections>
                  </Button>
                ))}
                <BoxSocialsConnect>
                  <Link
                    href={twitterLink}
                    rel="noopener noreferrer"
                    color="inherit"
                    target="_blank"
                    sx={{ textDecoration: "none", display: "flex" }}
                  >
                    <Box
                      component="img"
                      src={twitter}
                      alt="twitter"
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          opacity: 0.5,
                        },
                      }}
                    />
                  </Link>
                  <Link
                    href={discordLink}
                    rel="noopener noreferrer"
                    color="inherit"
                    target="_blank"
                    sx={{ textDecoration: "none", display: "flex" }}
                  >
                    <Box
                      component="img"
                      src={discord}
                      alt="discord"
                      sx={{
                        mx: 3,
                        cursor: "pointer",
                        "&:hover": {
                          opacity: 0.5,
                        },
                      }}
                    />
                  </Link>
                  <Link
                    href={mediumLink}
                    rel="noopener noreferrer"
                    color="inherit"
                    target="_blank"
                    sx={{ textDecoration: "none", display: "flex" }}
                  >
                    <Box
                      component="img"
                      src={medium}
                      alt="medium"
                      sx={{
                        mr: 3,
                        cursor: "pointer",
                        "&:hover": {
                          opacity: 0.5,
                        },
                      }}
                    />
                  </Link>
                </BoxSocialsConnect>
                <ButtonDashboard
                  endIcon={<ArrowForwardIcon sx={{ color: "white" }} />}
                  onClick={() => navigate("dashboard")}
                >
                  <ButtonTitle>Dashboard</ButtonTitle>
                </ButtonDashboard>
              </BoxMenuItems>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
