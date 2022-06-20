import { Box } from "@mui/material";
import { useState } from "react";
import Portfolio from "../Dashboard/Portfolio";
import Payday from "../Dashboard/Payday";
import StressedDads from "../Dashboard/StressedDads";
import Transactions from "../Dashboard/Transactions";
import HeaderDashboard from "../Header/HeaderDashboard";
import Sidebar from "../Sidebar/Sidebar";

function Dashboard() {
  const [content, setContent] = useState(0);
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <Sidebar {...{ content, setContent }} />
      <Box
        sx={{
          flex: 1,
          height: "100vh",
          background: "#F3CE8C",
        }}
      >
        <HeaderDashboard />
        {content === 0 && <StressedDads />}
        {content === 1 && <Portfolio />}
        {content === 2 && <Transactions />}
        {content === 3 && <Payday />}
      </Box>
    </Box>
  );
}

export default Dashboard;
