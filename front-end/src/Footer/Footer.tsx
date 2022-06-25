import { Box, Link } from "@mui/material";
import {
  Wrapper,
  ContainerWrapper,
  WrapperColumn,
  Copyright,
  WrapperRow,
  WrapperRow2,
  WrapperColumn2,
  TextNormal,
  Title,
  LinkWrapper,
  WrapperInit,
  TitleJoin,
  Socials,
  SubTitleJoin,
  ButtonSocials,
  ButtonTitle,
} from "./styles";
import twitter from "../assets/img/twitterWhite.svg";
import discord from "../assets/img/discordWhite.svg";
import { useTheme } from "@mui/material/styles";
import { discordLink, docsLink, mediumLink, twitterLink } from "../utils/links";
import { useLocation } from "react-router-dom";

function Footer() {
  const theme = useTheme();
  const { pathname } = useLocation();
  return (
    <Wrapper>
      {pathname !== "/dashboard" && (
        <WrapperInit>
          <TitleJoin>Join Now</TitleJoin>
          <SubTitleJoin>
            Join the Most Bullish and newest community on Cardano
          </SubTitleJoin>
          <Socials>
            <ButtonSocials
              endIcon={<Box component="img" src={discord} alt="discord" />}
            >
              <ButtonTitle>Discord</ButtonTitle>
            </ButtonSocials>
            <ButtonSocials
              sx={{ background: "#3CC8C8", ml: 2 }}
              endIcon={<Box component="img" src={twitter} alt="twitter" />}
            >
              <ButtonTitle>Twitter</ButtonTitle>
            </ButtonSocials>
          </Socials>
        </WrapperInit>
      )}
      <ContainerWrapper maxWidth="xl">
        <WrapperRow sx={{ mt: 0 }}>
          <Box
            sx={{
              mb: 1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img src={discord} alt="bscwin" width="50px" />
          </Box>
          <WrapperColumn sx={{ ml: 2 }}>
            <Copyright>StressedDads</Copyright>
            <Copyright>Copyright © 2022</Copyright>
            <WrapperRow sx={{ mt: 1 }}>
              <Link
                href={twitterLink}
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                sx={{ cursor: "pointer", "&:hover": { opacity: 0.5 } }}
              >
                <Box
                  component="img"
                  src={twitter}
                  alt="twitter"
                  sx={{ mr: 3 }}
                />
              </Link>
              <Link
                href={discordLink}
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                sx={{ cursor: "pointer", "&:hover": { opacity: 0.5 } }}
              >
                <Box
                  component="img"
                  src={discord}
                  alt="discord"
                  sx={{ mr: 3 }}
                />
              </Link>
            </WrapperRow>
          </WrapperColumn>
        </WrapperRow>
        <WrapperRow2>
          <WrapperColumn2>
            <Title>Product</Title>
            <LinkWrapper
              href={docsLink}
              rel="noopener noreferrer"
              color="inherit"
              target="_blank"
            >
              <TextNormal>Dashboard</TextNormal>
            </LinkWrapper>
          </WrapperColumn2>
          <WrapperColumn2>
            <Title>Community</Title>
            <LinkWrapper
              href={discordLink}
              rel="noopener noreferrer"
              color="inherit"
              target="_blank"
            >
              <TextNormal>Discord</TextNormal>
            </LinkWrapper>
            <LinkWrapper
              href={twitterLink}
              rel="noopener noreferrer"
              color="inherit"
              target="_blank"
            >
              <TextNormal>Twitter</TextNormal>
            </LinkWrapper>
          </WrapperColumn2>

          <WrapperColumn2 sx={{ mr: 0 }}>
            <Title>Info</Title>
            <LinkWrapper
              href={docsLink}
              rel="noopener noreferrer"
              color="inherit"
              target="_blank"
            >
              <TextNormal>Gitbook Docs</TextNormal>
            </LinkWrapper>
            <LinkWrapper
              href={""}
              rel="noopener noreferrer"
              color="inherit"
              target="_blank"
            >
              <TextNormal>Collection Info</TextNormal>
            </LinkWrapper>
            <LinkWrapper
              href={mediumLink}
              rel="noopener noreferrer"
              color="inherit"
              target="_blank"
            >
              <TextNormal>Medium (soon)</TextNormal>
            </LinkWrapper>
            <LinkWrapper
              href={""}
              rel="noopener noreferrer"
              color="inherit"
              target="_blank"
            >
              <TextNormal>FAQ</TextNormal>
            </LinkWrapper>
          </WrapperColumn2>
        </WrapperRow2>
      </ContainerWrapper>
    </Wrapper>
  );
}

export default Footer;
