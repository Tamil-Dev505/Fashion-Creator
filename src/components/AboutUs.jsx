import { Box, Typography, Divider, Grid, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


import buildingImg from "../assets/gallery/MAD_0444.JPG";
import workersImg from "../assets/about/workers.jpg";

export default function AboutUs() {
  return (
    <Box 
      sx={{ 
        py: 12, 
        bgcolor: "#ffffff",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${buildingImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "blur(8px)",
          opacity: 0.15,
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* HEADER */}
        <Box textAlign="center" mb={8}>
          <Typography 
            sx={{ 
              color: "#fbc02d", 
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 1,
              textTransform: "uppercase",
              mb: 2
            }}
          >
            About Us
          </Typography>

          <Typography 
            variant="h3" 
            fontWeight={800}
            sx={{ mb: 3, fontSize: { xs: 28, md: 44 } }}
          >
            Manufacturers & Exporters <br /> of Hosiery Garments
          </Typography>

          <Box
            sx={{
              width: 80,
              height: 4,
              bgcolor: "#fbc02d",
              mx: "auto",
            }}
          />
        </Box>

        {/* MAIN GRID */}
        <Grid container spacing={6} alignItems="center">
          {/* LEFT COLUMN - IMAGE AND TEXT */}
          <Grid item xs={12} md={6}>
            {/* BUILDING IMAGE */}
            <Box
              sx={{
                height: { xs: 300, md: 400 },
                borderRadius: 2,
                overflow: "hidden",
                mb: 4,
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 15px 50px rgba(0,0,0,0.15)",
                }
              }}
            >
              <Box
                component="img"
                src={buildingImg}
                alt="Fashion Creator Factory"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* DESCRIPTION TEXT */}
            <Typography 
              sx={{ 
                lineHeight: 1.8, 
                mb: 3, 
                fontSize: { xs: 14, md: 16 },
                color: "#333",
              }}
            >
              Fashion Creator is a professionally managed garment manufacturing
              company located in Tirupur, India. We specialize in producing
              premium quality hosiery and knitted garments for domestic and
              international markets.
            </Typography>

            <Typography 
  sx={{ 
    lineHeight: 1.8, 
    fontSize: { xs: 14, md: 16 },
    color: "#666",
  }}
>
  With modern infrastructure, skilled manpower and strict quality
  control systems, we ensure consistent quality, competitive pricing
  and timely delivery. Our ethical business practices and customer-first
  approach have earned us long-term partnerships across the globe.
</Typography>
            <Box mt={4}>
  <Button
    component={Link}
    to="/about"
    variant="contained"
    endIcon={<ArrowForwardIcon />}
    sx={{
      bgcolor: "#fbc02d",
      color: "#000",
      fontWeight: 700,
      px: 4,
      py: 1.5,
      borderRadius: 1,
      textTransform: "none",
      fontSize: 15,
      textDecoration: "none",
      boxShadow: "0 8px 20px rgba(251,192,45,0.4)",
      "&:hover": {
        bgcolor: "#f9a825",
        boxShadow: "0 12px 28px rgba(251,192,45,0.6)",
      },
    }}
  >
    More About Us
  </Button>
</Box>

</Grid>

         {/* RIGHT COLUMN - WHY CHOOSE + WORKERS IMAGE */}
<Grid item xs={12} md={6}>
  <Grid container spacing={3} alignItems="stretch">
    
    {/* WHY CHOOSE BOX */}
    <Grid item xs={12} md={7}>
      <Box
        sx={{
          bgcolor: "#2b2f33",
          color: "#fff",
          p: { xs: 3, md: 4 },
          height: "100%",
          borderRadius: 2,
          boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          mb={3}
          sx={{ fontSize: { xs: 16, md: 18 } }}
        >
          Why Choose Fashion Creator
        </Typography>

        {[
          "ISO & Compliance Certified",
          "Advanced Manufacturing Facility",
          "Skilled & Experienced Workforce",
          "Strict Quality Control",
          "On-Time Delivery Commitment",
        ].map((item, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2.5,
              "&:last-child": { mb: 0 },
            }}
          >
            <CheckCircleIcon
              sx={{
                color: "#fbc02d",
                fontSize: 20,
                mr: 2,
                mt: 0.3,
              }}
            />
            <Typography fontSize={15} fontWeight={500}>
              {item}
            </Typography>
          </Box>
        ))
    }
      </Box>
    </Grid>

    {/* WORKERS IMAGE */}
    <Grid item xs={12} md={5}>
      <Box
        sx={{
          height: { xs: 200, md: "340px" },
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <Box
          component="img"
          src={workersImg}
          alt="Garment Workers"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.75)",
          }}
        />

        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.25)",
          }}
        />
      </Box>
    </Grid>

  </Grid>
</Grid>
        </Grid>
      </Container>
    </Box>
  );
}


