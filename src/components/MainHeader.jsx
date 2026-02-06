import { Box, Stack, Typography, Button, useMediaQuery, useTheme } from "@mui/material";

import logo from "../assets/logos/logo.png";
import iso from "../assets/logos/iso.png";
import sedex from "../assets/logos/sedex.png";
import oeko from "../assets/logos/oeko.png";
import fama from "../assets/logos/fama.png";
import company from "../assets/logos/company.png";

const Badge = ({ icon, title, subtitle }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <Box
      component="img"
      src={icon}
      alt={title}
      sx={{ height: { xs: 24, md: 34 }, width: "auto" }}
    />
    <Stack spacing={0} sx={{ display: { xs: "none", lg: "flex" } }}>
      <Typography fontWeight={600} fontSize={12}>
        {title}
      </Typography>
      <Typography fontSize={10} color="text.secondary">
        {subtitle}
      </Typography>
    </Stack>
  </Stack>
);

export default function MainHeader() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        px: { xs: 2, md: 4 },
        py: { xs: 1.5, md: 2 },
        borderBottom: "1px solid #eaeaea",
        display: "flex",
        flexDirection: { xs: "row", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 2, md: 4 },
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {/* LEFT – Logo */}
      <Stack spacing={0.5} sx={{ flexShrink: 0 }}>
        <Box
          component="img"
          src={logo}
          alt="Fashion Creator"
          sx={{ height: { xs: 35, sm: 40, md: 50 }, width: "auto" }}
        />
        <Typography 
          fontSize={{ xs: 10, md: 13 }} 
          color="text.secondary"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Mfrs. & Exporters of Hosiery Garments
        </Typography>
      </Stack>

      {/* CENTER – Trust Badges (Hidden on mobile, show icons only on tablet) */}
      <Stack 
        direction="row" 
        spacing={{ xs: 1, sm: 2, md: 3, lg: 5 }} 
        justifyContent="center"
        sx={{ 
          display: { xs: "none", sm: "flex" },
          flexGrow: 1,
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Badge icon={iso} title="Certified" subtitle="ISO 9001:2015" />
        <Badge icon={oeko} title="The Best" subtitle="Quality Assured" />
        {!isTablet && (
          <>
            <Badge icon={fama} title="Number #1" subtitle="Supplier in Region" />
            <Badge icon={sedex} title="Member of" subtitle="SEDEX" />
            <Badge icon={company} title="Since 1995" subtitle="Trusted Worldwide" />
          </>
        )}
      </Stack>

      {/* RIGHT – CTA */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "#fbc02d",
          color: "#000",
          px: { xs: 2, md: 3 },
          py: { xs: 0.8, md: 1.2 },
          fontSize: { xs: 12, md: 14 },
          fontWeight: 600,
          whiteSpace: "nowrap",
          flexShrink: 0,
          "&:hover": { bgcolor: "#f9a825" },
        }}
      >
        {isMobile ? "Quote" : "Get a Quote"}
      </Button>
    </Box>
  );
}
