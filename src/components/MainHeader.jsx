import { Box, Stack, Typography, Button } from "@mui/material";

import logo from "../assets/logos/logo.png";
import iso from "../assets/logos/iso.png";
import sedex from "../assets/logos/sedex.png";
import oeko from "../assets/logos/oeko.png";
import fama from "../assets/logos/fama.png";
import company from "../assets/logos/company.png";

const Badge = ({ icon, title, subtitle }) => (
  <Stack direction="row" spacing={1.5} alignItems="center">
    <img src={icon} alt={title} style={{ height: 34 }} />
    <Stack spacing={0}>
      <Typography fontWeight={600} fontSize={14}>
        {title}
      </Typography>
      <Typography fontSize={12} color="text.secondary">
        {subtitle}
      </Typography>
    </Stack>
  </Stack>
);

export default function MainHeader() {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        px: 4,
        py: 2,
        borderBottom: "1px solid #eaeaea",
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        gap: 4,
      }}
    >
      {/* LEFT – Logo */}
      <Stack spacing={0.5}>
        <img src={logo} alt="Fashion Creator" style={{ height: 50 }} />
        <Typography fontSize={13} color="text.secondary">
          Mfrs. & Exporters of Hosiery Garments
        </Typography>
      </Stack>

      {/* CENTER – Trust Badges */}
      <Stack direction="row" spacing={5} justifyContent="center">
        <Badge icon={iso} title="Certified" subtitle="ISO 9001:2015" />
        <Badge icon={oeko} title="The Best" subtitle="Quality Assured" />
        <Badge icon={fama} title="Number #1" subtitle="Supplier in Region" />
        <Badge icon={sedex} title="Member of" subtitle="SEDEX" />
        <Badge icon={company} title="Since 1995" subtitle="Trusted Worldwide" />
      </Stack>

      {/* RIGHT – CTA */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "#fbc02d",
          color: "#000",
          px: 3,
          py: 1.2,
          fontWeight: 600,
          "&:hover": { bgcolor: "#f9a825" },
        }}
      >
        Get a Quote
      </Button>
    </Box>
  );
}
