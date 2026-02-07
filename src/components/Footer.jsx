import {
  Box,
  Grid,
  Typography,
  Container,
  Divider,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #121212 0%, #1f1f1f 60%, #3a2c00 100%)",
        color: "#fff",
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        {/* MAIN FOOTER CONTENT - REDUCED SIZE */}
        <Grid container spacing={4}>
          {/* COMPANY INFO */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" fontWeight={700} mb={2} fontSize={14}>
              Fashion Creator
            </Typography>
            <Typography sx={{ color: "#ccc", lineHeight: 1.6, fontSize: 12 }}>
              Premium hosiery manufacturer based in Tirupur, India.
            </Typography>

            {/* SOCIAL ICONS */}
            <Box mt={2} display="flex" gap={0.5}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                size="small"
                sx={{ color: "#fbc02d" }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                size="small"
                sx={{ color: "#fbc02d" }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                size="small"
                sx={{ color: "#fbc02d" }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" fontWeight={700} mb={2} fontSize={14}>
              Quick Links
            </Typography>
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Infrastructure", path: "/infrastructure" },
              { label: "Clientale", path: "/clientale" },
              { label: "Patron", path: "/patron" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact", path: "/contact" },
            ].map((link, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <ArrowForwardIosIcon sx={{ fontSize: 10, mr: 0.5, color: "#fbc02d" }} />
                <Typography
                  component={Link}
                  to={link.path}
                  sx={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: 12,
                    "&:hover": { color: "#fbc02d" },
                  }}
                >
                  {link.label}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* PRODUCTS - FUTURE SECTION */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" fontWeight={700} mb={2} fontSize={14}>
              Products
            </Typography>
            <Typography sx={{ color: "#999", fontSize: 11, mb: 1 }}>
              🔜 T-Shirts
            </Typography>
            <Typography sx={{ color: "#999", fontSize: 11, mb: 1 }}>
              🔜 Hoodies
            </Typography>
            <Typography sx={{ color: "#999", fontSize: 11, mb: 1 }}>
              🔜 Activewear
            </Typography>
            <Typography sx={{ color: "#999", fontSize: 11 }}>
              🔜 Custom Collections
            </Typography>
          </Grid>

          {/* SERVICES - FUTURE SECTION */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" fontWeight={700} mb={2} fontSize={14}>
              Services
            </Typography>
            <Typography sx={{ color: "#999", fontSize: 11, mb: 1 }}>
              🔜 Bulk Orders
            </Typography>
            <Typography sx={{ color: "#999", fontSize: 11, mb: 1 }}>
              🔜 B2B Solutions
            </Typography>
            <Typography sx={{ color: "#999", fontSize: 11, mb: 1 }}>
              🔜 Custom Design
            </Typography>
            <Typography sx={{ color: "#999", fontSize: 11 }}>
              🔜 Consulting
            </Typography>
          </Grid>

          {/* CONTACT INFO */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" fontWeight={700} mb={2} fontSize={14}>
              Contact & Address
            </Typography>

            <Box display="flex" mb={1.5} alignItems="flex-start">
              <LocationOnIcon sx={{ color: "#fbc02d", mr: 1, fontSize: 14, mt: 0.2 }} />
              <Box>
                <Typography sx={{ color: "#ccc", fontSize: 10, fontWeight: 600, mb: 0.3 }}>
                  Address:
                </Typography>
                <Typography sx={{ color: "#ccc", fontSize: 10, lineHeight: 1.3 }}>
                  No 2/1, Sree Nithi Garden,<br />
                  Andhipalayam, Mangalam Road,<br />
                  Tirupur – 641 687,<br />
                  Tamil Nadu, INDIA
                </Typography>
              </Box>
            </Box>

            <Box display="flex" mb={1.5} alignItems="center">
              <PhoneIcon sx={{ color: "#fbc02d", mr: 1, fontSize: 14 }} />
              <a
                href="tel:+919842903603"
                style={{ color: "#fbc02d", textDecoration: "none", fontSize: 10 }}
              >
                +91 98429 03603
              </a>
            </Box>

            <Box display="flex" mb={1.5} alignItems="center">
              <EmailIcon sx={{ color: "#fbc02d", mr: 1, fontSize: 14 }} />
              <Typography sx={{ color: "#ccc", fontSize: 10 }}>
                info@fashioncreator.in
              </Typography>
            </Box>

            {/* WHATSAPP ICON */}
            <Box mt={1}>
              <IconButton
                href="https://wa.me/919842903603"
                target="_blank"
                size="small"
                sx={{
                  bgcolor: "#25D366",
                  color: "#fff",
                  p: 0.5,
                  "&:hover": { bgcolor: "#1ebe5d" },
                }}
              >
                <WhatsAppIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* DIVIDER */}
        <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)", my: 3 }} />

        {/* NEWSLETTER - FUTURE SECTION */}
        <Box
          sx={{
            mb: 3,
            p: 2,
            bgcolor: "rgba(251, 192, 45, 0.05)",
            borderRadius: 1,
            border: "1px solid rgba(251, 192, 45, 0.2)",
          }}
        >
          <Typography variant="subtitle2" fontWeight={700} mb={1} fontSize={12}>
            📧 Newsletter (Coming Soon)
          </Typography>
          <Box display="flex" gap={1}>
            <TextField
              size="small"
              placeholder="Your email"
              disabled
              sx={{
                flex: 1,
                "& .MuiInputBase-input": { fontSize: 12 },
                opacity: 0.6,
              }}
            />
            <Button
              variant="contained"
              size="small"
              disabled
              sx={{ bgcolor: "#fbc02d", color: "#000" }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        {/* COPYRIGHT */}
        <Box textAlign="center" pb={2}>
          <Typography sx={{ color: "#aaa", fontSize: 12 }}>
            © {new Date().getFullYear()} Fashion Creator. All Rights Reserved.
          </Typography>
          <Typography sx={{ color: "#777", fontSize: 10, mt: 0.5 }}>
            Designed & Developed | More features coming soon...
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
