import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Infrastructure", path: "/infrastructure" },
    { label: "Clientale", path: "/clientale" },
    { label: "Patron", path: "/patron" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
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
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO / BRAND */}
        <Typography
          variant="h6"
          fontWeight={800}
          sx={{ color: "#000" }}
        >
          Fashion Creator
        </Typography>

        {/* MENU */}
        <Box sx={{ display: "flex", gap: 4 }}>
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#fbc02d" : "#000",
                fontWeight: isActive ? 700 : 500,
                position: "relative",
              })}
            >
              {({ isActive }) => (
                <span>
                  {item.label}
                  {/* Active underline */}
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
      </Toolbar>
    </AppBar>
  );
}
