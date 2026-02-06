import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g3 from "../assets/gallery/g3.jpg";
import g4 from "../assets/gallery/g4.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.jpg";
import g7 from "../assets/gallery/g7.jpg";
import g8 from "../assets/gallery/g8.jpg";
import g9 from "../assets/gallery/g9.JPG";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

export default function Gallery() {
  const navigate = useNavigate();

  const handleExploreGallery = () => {
    navigate("/gallery");
  };

  return (
    <Box 
      sx={{ 
        py: 12, 
        bgcolor: "#ffffff",
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${g1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "blur(8px)",
          opacity: 0.12,
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="100%" disableGutters sx={{ position: "relative", zIndex: 1, height: "100%" }}>
        {/* HEADER */}
        <Box textAlign="center" mb={8} sx={{ px: { xs: 3, md: 6 } }}>
          <Typography
            sx={{
              color: "#fbc02d",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 1,
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Gallery
          </Typography>

          <Typography
            variant="h4"
            fontWeight={800}
            sx={{ fontSize: { xs: 26, md: 40 } }}
          >
            Craftsmanship in Action
          </Typography>

          <Box
            sx={{
              width: 80,
              height: 4,
              bgcolor: "#fbc02d",
              mx: "auto",
              mt: 3,
              mb: 4,
            }}
          />
        </Box>

        {/* GALLERY CONTAINER */}
        <Box
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.95)",
            borderRadius: 0,
            p: { xs: 3, md: 6 },
            boxShadow: "none",
            backdropFilter: "blur(10px)",
            border: "none",
            width: "100%",
            minHeight: "100%",
            position: "relative",
          }}
        >
          {/* GALLERY GRID */}
          <Grid container spacing={4}>
            {images.map((img, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    width: 300,
                    height: 420,
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    mx: "auto",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    },
                    "&:hover img": {
                      transform: "scale(1.1)",
                    },
                    "&:hover .overlay": {
                      opacity: 1,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor: "rgba(0,0,0,0.35)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* EXPLORE GALLERY BUTTON */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: 30, md: 60 },
              right: { xs: 20, md: 60 },
              zIndex: 10,
            }}
          >
            <Button
              variant="contained"
              onClick={handleExploreGallery}
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
                boxShadow: "0 8px 20px rgba(251,192,45,0.4)",
                "&:hover": {
                  bgcolor: "#f9a825",
                  boxShadow: "0 12px 28px rgba(251,192,45,0.6)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Explore Gallery
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
