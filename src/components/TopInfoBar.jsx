import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function TopInfoBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Hide on mobile for cleaner look
  if (isMobile) {
    return null;
  }

  return (
    <Box
      sx={{
        bgcolor: "#f2f2f2",
        height: 40,
        px: { xs: 2, md: 4 },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 13,
      }}
    >
      {/* LEFT */}
      <Typography fontWeight={600} sx={{ display: { xs: "none", md: "block" } }}>
        Tirupur
      </Typography>

      {/* CENTER */}
      <Stack 
        direction="row" 
        spacing={{ xs: 1, md: 3 }} 
        alignItems="center"
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        <Stack direction="row" spacing={0.5} alignItems="center">
          <PhoneIcon sx={{ fontSize: 14, color: "#fbc02d" }} />
          <Typography sx={{ fontSize: { xs: 11, md: 13 } }}>+91 98429 03603</Typography>
        </Stack>
        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ display: { xs: "none", sm: "flex" } }}>
          <AccessTimeIcon sx={{ fontSize: 14, color: "#fbc02d" }} />
          <Typography sx={{ fontSize: { xs: 11, md: 13 } }}>Mon – Sat 09:00 – 18:00</Typography>
        </Stack>
        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ display: { xs: "none", lg: "flex" } }}>
          <LocationOnIcon sx={{ fontSize: 14, color: "#fbc02d" }} />
          <Typography sx={{ fontSize: { xs: 11, md: 13 } }}>Tirupur, Tamil Nadu</Typography>
        </Stack>
      </Stack>

      {/* RIGHT */}
      <Typography sx={{ cursor: "pointer", display: { xs: "none", md: "block" } }}>ⓘ</Typography>
    </Box>
  );
}
