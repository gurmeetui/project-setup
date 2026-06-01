import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";

import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  {
    text: "Dashboard",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    text: "Analytics",
    path: "/analytics",
    icon: <AnalyticsIcon />,
  },
  {
    text: "Services",
    path: "/service",
    icon: <SettingsIcon />,
  },
];

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}
const Sidebar = ({
  mobileOpen,
  handleDrawerToggle,
}: SidebarProps) => {

  const drawer = (
    <Box>
      <Toolbar />

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;