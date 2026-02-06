import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Infrastructure", path: "/infrastructure" },
    { label: "Clientale", path: "/clientale" },
    { label: "Patron", path: "/patron" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#ffffff",
          borderBottom: "1px solid #eee",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 3 },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO / BRAND */}
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{ color: "#000", fontSize: { xs: 16, md: 20 } }}
          >
            Fashion Creator
          </Typography>

          {/* DESKTOP MENU */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: { md: 3, lg: 4 } }}>
              {menuItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "#fbc02d" : "#000",
                    fontWeight: isActive ? 700 : 500,
                    position: "relative",
                    fontSize: 14,
                  })}
                >
                  {({ isActive }) => (
                    <span>
                      {item.label}
                      {isActive && (
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            bottom: -6,
                            width: "100%",
                            height: 2,
                            backgroundColor: "#fbc02d",
                          }}
                        />
                      )}
                    </span>
                  )}
                </NavLink>
              ))}
            </Box>
          )}

          {/* MOBILE HAMBURGER BUTTON */}
          {isMobile && (
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{
                color: "#000",
                p: 1,
              }}
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "280px",
            bgcolor: "#1a1a2e",
            color: "#fff",
          },
        }}
      >
        {/* DRAWER HEADER */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography fontWeight={700} fontSize={18}>
            Menu
          </Typography>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* DRAWER MENU LIST */}
        <List sx={{ pt: 2 }}>
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={toggleDrawer(false)}
              style={{ textDecoration: "none" }}
            >
              {({ isActive }) => (
                <ListItem
                  sx={{
                    py: 1.5,
                    px: 3,
                    bgcolor: isActive ? "rgba(251,192,45,0.15)" : "transparent",
                    borderLeft: isActive ? "3px solid #fbc02d" : "3px solid transparent",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.05)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#fbc02d" : "#fff",
                      fontSize: 15,
                    }}
                  />
                </ListItem>
              )}
            </NavLink>
          ))}
        </List>

        {/* DRAWER FOOTER */}
        <Box
          sx={{
            mt: "auto",
            p: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography fontSize={12} color="rgba(255,255,255,0.5)" textAlign="center">
            Fashion Creator
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
