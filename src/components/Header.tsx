import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useCustomTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { mode, toggleTheme } = useCustomTheme();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Omoh
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
          {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <Button
          color="primary"
          variant="contained"
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.ozosotf.omoh&pcampaignid=web_share",
              "_blank"
            )
          }
        >
          Télécharger
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
