import { Box, Typography, Container } from "@mui/material";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <>
      {/* MAP HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 450, md: 600 },
          overflow: "hidden",
          "@keyframes fadeInUp": {
            "0%": { opacity: 0, transform: "translateY(40px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          "@keyframes fadeInDown": {
            "0%": { opacity: 0, transform: "translateY(-30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          "@keyframes scaleIn": {
            "0%": { opacity: 0, transform: "scale(0.8)" },
            "100%": { opacity: 1, transform: "scale(1)" },
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            backdropFilter: "blur(2px)",
            zIndex: 2,
          },
        }}
      >
        {/* GOOGLE MAP BACKGROUND */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            "& iframe": {
              width: "100%",
              height: "100%",
              border: "none",
            },
          }}
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.8487!2d77.3183207!3d11.0877063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9076e57d7c89d%3A0xf9bcf1f4f55ca2c0!2sFashion%20Creator!5e0!3m2!1sen!2sin!4v1707000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: "none" }}
          />
        </Box>

        {/* OVERLAY CONTENT */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3,
          }}
        >
          <Container maxWidth="md">
            <Box textAlign="center">
              <Typography
                sx={{
                  color: "#fbc02d",
                  fontWeight: 700,
                  fontSize: { xs: 12, md: 14 },
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  mb: 2,
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  bgcolor: "rgba(251, 192, 45, 0.15)",
                  borderRadius: 50,
                  border: "1px solid rgba(251, 192, 45, 0.4)",
                  backdropFilter: "blur(10px)",
                  animation: "fadeInDown 0.8s ease-out forwards",
                }}
              >
                Get In Touch
              </Typography>

              <Typography
                variant="h2"
                fontWeight={900}
                sx={{
                  color: "#fff",
                  fontSize: { xs: 32, md: 56 },
                  mb: 3,
                  lineHeight: 1.2,
                  textShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
                  animation: "fadeInUp 0.8s ease-out 0.2s forwards",
                  opacity: 0,
                }}
              >
                We're Here To Help
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: { xs: 15, md: 18 },
                  maxWidth: 500,
                  mx: "auto",
                  lineHeight: 1.8,
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                  animation: "fadeInUp 0.8s ease-out 0.4s forwards",
                  opacity: 0,
                }}
              >
                Reach out to us and let's discuss your fashion manufacturing needs. Our team is ready to support your vision.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* CONTACT CONTENT */}
      <ContactSection />
    </>
  );
}
