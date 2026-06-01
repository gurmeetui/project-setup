import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeContext } from "./theme/ThemeContext";
import { useContext } from "react";
const Header = () => {

    const { theme, toggleTheme, changeTheme } = useContext(ThemeContext);
    return (

        <>
            <Box className='headertop-bar'>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                    <Box>
                        <Button onClick={() => changeTheme("orange")}>orange</Button>
                        <Button onClick={() => changeTheme("green")}>Green</Button>
                        <Button onClick={() => changeTheme("purple")}>Purple</Button>
                        <Button onClick={() => changeTheme("red")}>Red</Button>
                        <Button onClick={() => changeTheme("blue")}>Blue</Button>
                    </Box>
                    <Box>

                    </Box>
                </Box>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                    >
                        {/* Dark Mode */}
                    </label>
                </div>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </Box>
            </Box>
        </>
    );
};

export default Header;