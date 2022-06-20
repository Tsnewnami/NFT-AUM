import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import avatar from "../assets/img/avatar.png";
import { Typography } from "@mui/material";

const drawerWidth = 240;

export default function Sidebar(props: any) {
  const { content, setContent } = props;
  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          minWidth: drawerWidth,
          position: "static",
          height: "100%",
          px: 2,
          pt: 8,
        },
      }}
    >
      <Toolbar sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          component={"img"}
          alt="avatar"
          src={avatar}
          sx={{ width: "192px" }}
        />
        <Typography>Trader God</Typography>
      </Toolbar>
      <List sx={{ pt: 4 }}>
        {[
          "Stressed Dads ",
          "Dads Portfolio",
          "Transactions",
          "Dads Payday",
        ].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton
              onClick={() => setContent(index)}
              sx={{
                height: "56px",
                borderRadius: "16px",
                background: content === index ? "#141722" : "white",
                color: content === index ? "white" : '"#141722"',
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
