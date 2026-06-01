import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Sidebar from '../shared/Sidebar'
import { Box } from "@mui/material";
import { useState } from "react";

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Header handleDrawerToggle={handleDrawerToggle} />
        <Sidebar mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: 8,
            minHeight: "100vh",
            background: "#f5f6fa",
            ml: { xs: 0, sm: "240px" },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;