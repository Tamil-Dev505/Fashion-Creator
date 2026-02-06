import { Box, Stack, Typography } from "@mui/material";

export default function TopInfoBar() {
  return (
    <Box
      sx={{
        bgcolor: "#f2f2f2",
        height: 40,
        px: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 13,
      }}
    >
      {/* LEFT */}
      <Typography fontWeight={600}>Tirupur</Typography>

      {/* CENTER */}
      <Stack direction="row" spacing={3} alignItems="center">
        <Typography>+91 98429 03603</Typography>
        <Typography>Mon – Sat 09:00 – 18:00</Typography>
        <Typography>Tirupur, Tamil Nadu</Typography>
      </Stack>

      {/* RIGHT */}
      <Typography sx={{ cursor: "pointer" }}>ⓘ</Typography>
    </Box>
  );
}
