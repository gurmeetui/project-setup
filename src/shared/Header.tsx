import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
interface HeaderProps {
  handleDrawerToggle: () => void;
}

const Header = ({
  handleDrawerToggle,
}: HeaderProps) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) =>
            theme.zIndex.drawer + 1,
          background: "var(--primary)",
        }}
      >
        <Toolbar>
          <IconButton
            sx={{
              display: {
                sm: "none",
              },
              color: "#fff",
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </>

  );
};

export default Header;