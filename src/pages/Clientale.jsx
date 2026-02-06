import { Link } from "react-router-dom";
import { Box, Typography, Container, Grid, Card, Button, Avatar, Chip } from "@mui/material";
import { 
  Public, 
  Handshake, 
  Star, 
  TrendingUp, 
  LocalShipping, 
  Verified, 
  Groups,
  EmojiEvents,
  SupportAgent,
  Speed,
  FormatQuote,
  ArrowForward,
  CheckCircle
} from "@mui/icons-material";

// Import certification logos
import oeko from "../assets/logos/oeko.png";
import sedex from "../assets/logos/sedex.png";
import iso from "../assets/logos/iso.png";

// Import client logos
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";

// Import map background
import mapBg from "../assets/logos/map.png";

export default function Clientale() {
  // Client regions data
  const clientRegions = [
    { 
      region: "Europe", 
      countries: ["United Kingdom", "Germany", "France", "Italy", "Spain", "Netherlands", "Belgium", "Sweden"],
      icon: "🇪🇺",
      color: "#1a237e"
    },
    { 
      region: "North America", 
      countries: ["United States", "Canada", "Mexico"],
      icon: "🌎",
      color: "#0d47a1"
    },
    { 
      region: "Middle East", 
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
      icon: "🏜️",
      color: "#006064"
    },
    { 
      region: "Asia Pacific", 
      countries: ["Australia", "Japan", "Singapore", "South Korea", "Hong Kong", "New Zealand"],
      icon: "🌏",
      color: "#4a148c"
    },
  ];

  // Client testimonials
  const testimonials = [
    {
      name: "Michael Thompson",
      company: "Nordic Fashion Co.",
      country: "Sweden",
      text: "Fashion Creator has been our trusted manufacturing partner for over 5 years. Their commitment to quality and on-time delivery is exceptional.",
      rating: 5
    },
    {
      name: "Sarah Mitchell",
      company: "Urban Apparel Group",
      country: "United Kingdom",
      text: "Outstanding quality and professionalism! Their team understands our brand requirements perfectly.",
      rating: 5
    },
    {
      name: "Ahmed Al-Rahman",
      company: "Gulf Star Trading",
      country: "UAE",
      text: "We've partnered with many manufacturers, but Fashion Creator stands out for their ethical practices and consistent quality.",
      rating: 5
    },
    {
      name: "Jennifer Chen",
      company: "Pacific Brands Ltd.",
      country: "Australia",
      text: "From initial design consultation to final delivery, the Fashion Creator team provides excellent support.",
      rating: 5
    }
  ];

  // Partnership benefits
  const benefits = [
    {
      icon: <Verified sx={{ fontSize: 40, color: "#fbc02d" }} />,
      title: "Quality Assurance",
      description: "Rigorous quality control at every production stage with AQL standards"
    },
    {
      icon: <LocalShipping sx={{ fontSize: 40, color: "#fbc02d" }} />,
      title: "Timely Delivery",
      description: "On-time shipments with reliable logistics partners worldwide"
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: "#fbc02d" }} />,
      title: "Quick Turnaround",
      description: "Efficient production cycles with sample delivery in 7-10 days"
    },
    {
      icon: <SupportAgent sx={{ fontSize: 40, color: "#fbc02d" }} />,
      title: "Dedicated Support",
      description: "Personal account managers for seamless communication"
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: "#fbc02d" }} />,
      title: "Competitive Pricing",
      description: "Best value without compromising on quality or ethical standards"
    },
    {
      icon: <Groups sx={{ fontSize: 40, color: "#fbc02d" }} />,
      title: "Flexible MOQ",
      description: "Customized minimum order quantities to suit your business needs"
    }
  ];

  // Industries served
  const industries = [
    "Fashion Brands",
    "Retail Chains", 
    "E-commerce Stores",
    "Boutiques",
    "Sports Apparel",
    "Workwear Companies",
    "Private Labels",
    "Uniform Suppliers"
  ];

  return (
    <Box
      sx={{
        position: "relative",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${mapBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "blur(8px)",
          opacity: 0.08,
          zIndex: -1,
        }
      }}
    >
      {/* HERO HEADER */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: "linear-gradient(135deg, #212121 0%, #424242 50%, #212121 100%)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "@keyframes fadeInUp": {
            "0%": { opacity: 0, transform: "translateY(40px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          "@keyframes fadeInDown": {
            "0%": { opacity: 0, transform: "translateY(-30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          "@keyframes expandWidth": {
            "0%": { width: 0, opacity: 0 },
            "100%": { width: 100, opacity: 1 },
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Chip 
            label="TRUSTED WORLDWIDE" 
            sx={{ 
              bgcolor: "rgba(251,192,45,0.2)", 
              color: "#fbc02d", 
              fontWeight: 700, 
              mb: 3,
              fontSize: 12,
              letterSpacing: 1,
              animation: "fadeInDown 0.8s ease-out forwards",
            }} 
          />
          
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{ 
              fontSize: { xs: 32, md: 52 },
              color: "#fff",
              mb: 3,
              animation: "fadeInUp 0.8s ease-out 0.2s forwards",
              opacity: 0,
            }}
          >
            Our Global <span style={{ color: "#fbc02d" }}>Clientale</span>
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: { xs: 16, md: 18 },
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.8,
              mb: 4,
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
              opacity: 0,
            }}
          >
            Building lasting partnerships with leading fashion brands and retailers 
            across 15+ countries. Experience the Fashion Creator difference in 
            quality, reliability, and service excellence.
          </Typography>

          <Box
            sx={{
              width: 100,
              height: 4,
              bgcolor: "#fbc02d",
              mx: "auto",
              borderRadius: 2,
              animation: "expandWidth 0.8s ease-out 0.6s forwards",
            }}
          />
        </Container>
      </Box>

      {/* CLIENT STATS */}
      <Box sx={{ py: 10, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {[
              { icon: <Public sx={{ fontSize: 50 }} />, value: "15+", label: "Countries Served", color: "#1976d2" },
              { icon: <Handshake sx={{ fontSize: 50 }} />, value: "150+", label: "Happy Clients", color: "#388e3c" },
              { icon: <EmojiEvents sx={{ fontSize: 50 }} />, value: "11+", label: "Years of Excellence", color: "#f57c00" },
              { icon: <Star sx={{ fontSize: 50 }} />, value: "98%", label: "Client Retention", color: "#d32f2f" },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card 
                  sx={{ 
                    p: 4, 
                    textAlign: "center", 
                    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(0,0,0,0.05)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                    }
                  }}
                >
                  <Box sx={{ color: stat.color, mb: 2 }}>{stat.icon}</Box>
                  <Typography variant="h3" fontWeight={800} sx={{ color: "#212121", mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography sx={{ color: "#666", fontSize: 14, fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* OUR CLIENTS */}
      <Box sx={{ py: 10, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              sx={{
                color: "#fbc02d",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Trusted By
            </Typography>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 3 }}>
              Our Valued Clients
            </Typography>
            <Typography sx={{ color: "#666", maxWidth: 600, mx: "auto", lineHeight: 1.8 }}>
              We are proud to partner with leading brands and businesses across the globe
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: "#fafafa",
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 120,
                    transition: "all 0.3s ease",
                    border: "1px solid #eee",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      borderColor: "#fbc02d",
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt={`Client ${index + 1}`}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: 80,
                      objectFit: "contain",
                      filter: "grayscale(50%)",
                      transition: "filter 0.3s ease",
                      "&:hover": {
                        filter: "grayscale(0%)",
                      }
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* INDUSTRIES WE SERVE */}
      <Box sx={{ py: 10, bgcolor: "#fafafa" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              sx={{
                color: "#fbc02d",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Who We Serve
            </Typography>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 3 }}>
              Industries & Business Types
            </Typography>
            <Typography sx={{ color: "#666", maxWidth: 600, mx: "auto", lineHeight: 1.8 }}>
              We cater to diverse businesses in the apparel industry, from emerging brands to established retail chains
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
            {industries.map((industry, index) => (
              <Chip
                key={index}
                label={industry}
                icon={<CheckCircle sx={{ fontSize: 18 }} />}
                sx={{
                  py: 3,
                  px: 2,
                  fontSize: 15,
                  fontWeight: 600,
                  bgcolor: "#fff",
                  border: "2px solid #e0e0e0",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "& .MuiChip-icon": { color: "#fbc02d" },
                  "&:hover": {
                    borderColor: "#fbc02d",
                    bgcolor: "rgba(251,192,45,0.08)",
                    transform: "scale(1.05)"
                  }
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* PARTNERSHIP BENEFITS */}
      <Box sx={{ py: 10, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              sx={{
                color: "#fbc02d",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Why Partner With Us
            </Typography>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 3 }}>
              The Fashion Creator Advantage
            </Typography>
            <Typography sx={{ color: "#666", maxWidth: 600, mx: "auto", lineHeight: 1.8 }}>
              We go beyond manufacturing to become a strategic partner in your success
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    border: "1px solid #f0f0f0",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
                      borderColor: "#fbc02d",
                      transform: "translateY(-5px)"
                    }
                  }}
                >
                  <Box sx={{ mb: 3 }}>{benefit.icon}</Box>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 2, color: "#212121" }}>
                    {benefit.title}
                  </Typography>
                  <Typography sx={{ color: "#666", lineHeight: 1.7 }}>
                    {benefit.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* GLOBAL PRESENCE - EXPORT REGIONS */}
      <Box 
        sx={{ 
          py: 10, 
          background: "linear-gradient(135deg, rgba(26,26,46,0.85) 0%, rgba(22,33,62,0.85) 100%)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -20,
            left: -20,
            right: -20,
            bottom: -20,
            backgroundImage: `url(${mapBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(4px)",
            opacity: 0.25,
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box textAlign="center" mb={8}>
            <Typography
              sx={{
                color: "#fbc02d",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Global Reach
            </Typography>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 3, color: "#fff" }}>
              We Export Worldwide
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 600, mx: "auto", lineHeight: 1.8 }}>
              Seamless international shipping to major markets across four continents
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {clientRegions.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card 
                  sx={{ 
                    p: 4, 
                    height: "100%", 
                    bgcolor: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.1)",
                      transform: "translateY(-5px)",
                      borderColor: "#fbc02d"
                    }
                  }}
                >
                  <Box sx={{ fontSize: 40, mb: 2 }}>{item.icon}</Box>
                  <Typography 
                    variant="h6" 
                    fontWeight={700} 
                    mb={3} 
                    sx={{ color: "#fbc02d" }}
                  >
                    {item.region}
                  </Typography>
                  {item.countries.map((country, i) => (
                    <Typography 
                      key={i} 
                      sx={{ 
                        color: "rgba(255,255,255,0.8)", 
                        py: 0.5,
                        fontSize: 14,
                        display: "flex",
                        alignItems: "center",
                        gap: 1
                      }}
                    >
                      <Box sx={{ width: 6, height: 6, bgcolor: "#fbc02d", borderRadius: "50%" }} />
                      {country}
                    </Typography>
                  ))}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CLIENT TESTIMONIALS */}
      <Box sx={{ py: 10, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              sx={{
                color: "#fbc02d",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Client Testimonials
            </Typography>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 3 }}>
              What Our Clients Say
            </Typography>
            <Typography sx={{ color: "#666", maxWidth: 600, mx: "auto", lineHeight: 1.8 }}>
              Hear from businesses around the world who have experienced our commitment to excellence
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                    border: "1px solid #f5f5f5",
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 15px 50px rgba(0,0,0,0.12)",
                      transform: "translateY(-3px)"
                    }
                  }}
                >
                  <FormatQuote 
                    sx={{ 
                      fontSize: 60, 
                      color: "#fbc02d", 
                      opacity: 0.3,
                      position: "absolute",
                      top: 20,
                      right: 20
                    }} 
                  />
                  
                  <Box sx={{ display: "flex", gap: 0.5, mb: 3 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ fontSize: 20, color: "#fbc02d" }} />
                    ))}
                  </Box>

                  <Typography 
                    sx={{ 
                      color: "#444", 
                      lineHeight: 1.8, 
                      mb: 4,
                      fontSize: 15,
                      fontStyle: "italic"
                    }}
                  >
                    &quot;{testimonial.text}&quot;
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar 
                      sx={{ 
                        width: 50, 
                        height: 50, 
                        bgcolor: "#fbc02d",
                        fontWeight: 700,
                        fontSize: 18
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography fontWeight={700} sx={{ color: "#212121" }}>
                        {testimonial.name}
                      </Typography>
                      <Typography sx={{ color: "#666", fontSize: 13 }}>
                        {testimonial.company} • {testimonial.country}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CERTIFICATIONS */}
      <Box sx={{ py: 8, bgcolor: "#fafafa" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              sx={{
                color: "#fbc02d",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Certified Excellence
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              Our Quality & Compliance Certifications
            </Typography>
          </Box>

          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center",
              flexWrap: "wrap",
              gap: { xs: 4, md: 8 }
            }}
          >
            {[
              { img: oeko, name: "OEKO-TEX Certified" },
              { img: sedex, name: "SEDEX Member" },
              { img: iso, name: "ISO Certified" }
            ].map((cert, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)"
                  }
                }}
              >
                <Box
                  component="img"
                  src={cert.img}
                  alt={cert.name}
                  sx={{
                    height: { xs: 60, md: 80 },
                    objectFit: "contain",
                    filter: "grayscale(30%)",
                    transition: "filter 0.3s ease",
                    "&:hover": {
                      filter: "grayscale(0%)"
                    }
                  }}
                />
                <Typography sx={{ color: "#666", fontSize: 12, mt: 1, fontWeight: 500 }}>
                  {cert.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* TRUST STATEMENT */}
      <Box 
        sx={{ 
          py: 10, 
          bgcolor: "#fff",
          borderTop: "1px solid #f0f0f0"
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography 
              variant="h5" 
              fontWeight={700} 
              sx={{ mb: 4, color: "#212121" }}
            >
              Building Partnerships That Last
            </Typography>
            <Typography
              sx={{
                color: "#555",
                lineHeight: 2,
                fontSize: 16,
                mb: 4
              }}
            >
              At Fashion Creator, we believe in building relationships that go beyond transactions. 
              Our success is measured by the success of our clients. With transparent communication, 
              ethical manufacturing practices, and an unwavering commitment to quality, we have 
              earned the trust of leading brands worldwide. From first sample to final shipment, 
              we are dedicated to exceeding expectations and being the manufacturing partner you can rely on.
            </Typography>
            <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
              {["Transparent Pricing", "Ethical Manufacturing", "Long-term Relationships", "Customer First"].map((item, i) => (
                <Chip
                  key={i}
                  icon={<CheckCircle sx={{ fontSize: 18 }} />}
                  label={item}
                  sx={{
                    py: 2.5,
                    px: 1,
                    fontSize: 13,
                    fontWeight: 600,
                    bgcolor: "rgba(251,192,45,0.1)",
                    color: "#212121",
                    "& .MuiChip-icon": { color: "#fbc02d" }
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA SECTION */}
      <Box 
        sx={{ 
          py: 10, 
          background: "linear-gradient(135deg, #fbc02d 0%, #f9a825 100%)",
          textAlign: "center"
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h4" 
            fontWeight={800} 
            sx={{ mb: 3, color: "#212121" }}
          >
            Ready to Partner With Us?
          </Typography>
          <Typography sx={{ color: "#333", mb: 5, fontSize: 17, lineHeight: 1.8 }}>
            Join 150+ satisfied clients worldwide. Let us discuss how we can bring your 
            apparel vision to life with quality, reliability, and competitive pricing.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                bgcolor: "#212121",
                color: "#fff",
                fontWeight: 700,
                px: 5,
                py: 2,
                fontSize: 16,
                borderRadius: 2,
                textTransform: "none",
                textDecoration: "none",
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                "&:hover": {
                  bgcolor: "#000",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
                }
              }}
            >
              Get In Touch
            </Button>
            <Button
              component={Link}
              to="/gallery"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#212121",
                borderWidth: 2,
                color: "#212121",
                fontWeight: 700,
                px: 5,
                py: 2,
                fontSize: 16,
                borderRadius: 2,
                textTransform: "none",
                textDecoration: "none",
                "&:hover": {
                  borderWidth: 2,
                  bgcolor: "rgba(33,33,33,0.1)",
                }
              }}
            >
              View Our Work
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
