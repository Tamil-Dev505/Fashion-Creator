import { Box, Typography, Button, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";

const slides = [
  {
    image: hero1,
    title: "Manufacturers & Exporters of Hosiery Garments",
    subtitle:
      "Delivering premium quality knitted garments with modern infrastructure.",
  },
  {
    image: hero2,
    title: "Advanced Infrastructure & Skilled Workforce",
    subtitle:
      "State-of-the-art machinery ensuring consistent quality and output.",
  },
  {
    image: hero3,
    title: "Trusted by Global Clients",
    subtitle:
      "Committed to quality, compliance, and timely delivery worldwide.",
  },
];

export default function HeroSlider() {
  return (
    <Box 
      sx={{ 
        height: { xs: "70vh", sm: "75vh", md: "80vh" }, 
        position: "relative",
        "@keyframes fadeInUp": {
          "0%": {
            opacity: 0,
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "@keyframes fadeInLeft": {
          "0%": {
            opacity: 0,
            transform: "translateX(-40px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "@keyframes scaleIn": {
          "0%": {
            opacity: 0,
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        speed={1200}
        style={{ height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: { xs: "70vh", sm: "75vh", md: "80vh" },
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Dark Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.65)",
                }}
              />

              {/* Content */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  px: { xs: 3, md: 8 },
                  maxWidth: 750,
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "#fbc02d",
                    fontWeight: 600,
                    letterSpacing: 2,
                    animation: "fadeInUp 0.8s ease-out forwards",
                  }}
                >
                  Welcome to Fashion Creator
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    mt: 2,
                    lineHeight: 1.2,
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.75rem", lg: "3.25rem" },
                    animation: "fadeInUp 0.8s ease-out 0.2s forwards",
                    opacity: 0,
                  }}
                >
                  {slide.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#ddd",
                    mt: { xs: 2, md: 3 },
                    fontSize: { xs: 13, sm: 14, md: 16 },
                    animation: "fadeInUp 0.8s ease-out 0.4s forwards",
                    opacity: 0,
                  }}
                >
                  {slide.subtitle}
                </Typography>

                <Stack 
                  direction={{ xs: "column", sm: "row" }} 
                  spacing={{ xs: 2, sm: 3 }} 
                  mt={{ xs: 3, md: 5 }}
                  sx={{
                    animation: "fadeInUp 0.8s ease-out 0.6s forwards",
                    opacity: 0,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#fbc02d",
                      color: "#000",
                      px: { xs: 3, md: 4 },
                      py: { xs: 1.2, md: 1.4 },
                      fontSize: { xs: 13, md: 14 },
                      fontWeight: 600,
                      width: { xs: "100%", sm: "auto" },
                      "&:hover": { bgcolor: "#f9a825" },
                    }}
                  >
                    Get a Quote
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      color: "#fff",
                      borderColor: "#fff",
                      px: { xs: 3, md: 4 },
                      py: { xs: 1.2, md: 1.4 },
                      fontSize: { xs: 13, md: 14 },
                      width: { xs: "100%", sm: "auto" },
                      "&:hover": {
                        borderColor: "#fbc02d",
                        color: "#fbc02d",
                      },
                    }}
                  >
                    View Products
                  </Button>
                </Stack>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
