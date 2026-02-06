import { Box, Typography, Container, Grid, Divider, Card } from "@mui/material";
import { useEffect, useState } from "react";
import {
  EmojiEvents,
  Groups,
  Factory,
  SentimentSatisfiedAlt,
  CheckCircle,
  Lightbulb,
  Recycling,
  Handshake,
} from "@mui/icons-material";
import g9Img from "../assets/gallery/g9.JPG";
import g10Img from "../assets/gallery/g10.JPG";
import g11Img from "../assets/gallery/g11.JPG";
import g12Img from "../assets/gallery/g12.JPG";
import workersImg from "../assets/about/workers.jpg";
import buildingImg from "../assets/gallery/MAD_0418.JPG";
import factoryImg1 from "../assets/gallery/MAD_0431.JPG";
import factoryImg2 from "../assets/gallery/MAD_0432.JPG";

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 30));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Typography variant="h3" fontWeight={700} color="#fbc02d">
      {count.toLocaleString()}
      {suffix}
    </Typography>
  );
};

const StatCard = ({ Icon, label, value, suffix }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card
      sx={{
        textAlign: "center",
        p: 4,
        bgcolor: "#ffffff",
        border: "1px solid #eaeaea",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(251, 192, 45, 0.15)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Icon sx={{ fontSize: 48, color: "#fbc02d", mb: 2 }} />
      <Counter value={value} suffix={suffix} />
      <Typography sx={{ mt: 2, color: "#666", fontWeight: 600 }}>
        {label}
      </Typography>
    </Card>
  </Grid>
);

export default function About() {
  const statsData = [
    {
      label: "Years of Experience",
      value: 11,
      suffix: "+",
      icon: EmojiEvents,
    },
    {
      label: "Skilled Employees",
      value: 250,
      suffix: "+",
      icon: Groups,
    },
    {
      label: "Monthly Production",
      value: 500000,
      suffix: "+",
      icon: Factory,
    },
    {
      label: "Happy Clients",
      value: 150,
      suffix: "+",
      icon: SentimentSatisfiedAlt,
    },
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <Box
        sx={{
          py: 10,
          bgcolor: "#f5f5f5",
          textAlign: "center",
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
            "100%": { width: 80, opacity: 1 },
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "#fbc02d",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              mb: 2,
              animation: "fadeInDown 0.8s ease-out forwards",
            }}
          >
            About Fashion Creator
          </Typography>

          <Typography
            variant="h3"
            fontWeight={800}
            sx={{ 
              fontSize: { xs: 28, md: 42 },
              animation: "fadeInUp 0.8s ease-out 0.2s forwards",
              opacity: 0,
            }}
          >
            Who We Are
          </Typography>

          <Divider
            sx={{
              width: 80,
              height: 4,
              bgcolor: "#fbc02d",
              mx: "auto",
              mt: 3,
              animation: "expandWidth 0.8s ease-out 0.4s forwards",
            }}
          />
        </Container>
      </Box>

      {/* ABOUT US HEADING */}
      <Box sx={{ py: 8, bgcolor: "#ffffff", borderBottom: "1px solid #eaeaea" }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              color: "#fbc02d",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              mb: 2,
              fontSize: 14,
            }}
          >
            Learn About Us
          </Typography>

          <Typography variant="h4" fontWeight={800}>
            About Us
          </Typography>
        </Container>
      </Box>

      {/* FACTORY IMAGES SECTION */}
      <Box sx={{ py: 8, bgcolor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "50%" },
                maxWidth: 600,
                height: 400,
                borderRadius: 2,
                overflow: "hidden",
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
                src={factoryImg1}
                alt="Fashion Creator Factory"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            <Box
              sx={{
                width: { xs: "100%", sm: "50%" },
                maxWidth: 600,
                height: 400,
                borderRadius: 2,
                overflow: "hidden",
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
                src={factoryImg2}
                alt="Fashion Creator Factory"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* WHO WE ARE SECTION */}
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
            backgroundImage: `url(${g9Img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            filter: "blur(8px)",
            opacity: 0.1,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={g9Img}
                alt="Fashion Creator Products"
                sx={{
                  width: "100%",
                  height: { xs: 350, md: 500 },
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                  mb: { xs: 4, md: 0 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: "#fbc02d",
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  mb: 2,
                  fontSize: 14,
                }}
              >
                Who We Are
              </Typography>

              <Typography variant="h5" fontWeight={800} mb={3}>
                Well Established Garment Manufacturing & Exporting Company
              </Typography>

              <Typography sx={{ lineHeight: 1.8, color: "#555", mb: 2 }}>
                Fashion Creator is a well-established company manufacturing and exporting garments with excellence. Our factory is strategically situated at 2/1 Sree Nithi Garden, Kurinji Nagar, Managalam Road, Andipalayam, Tirupur - 641 687.
              </Typography>

              <Typography sx={{ lineHeight: 1.8, color: "#555", mb: 2 }}>
                We derive our strength from a robust production and quality system developed over the years, supported by a dynamic group of experienced, energetic, and hardworking merchandisers and quality controllers.
              </Typography>

              <Typography sx={{ lineHeight: 1.8, color: "#555", mb: 2 }}>
                Our workforce of 250+ well-looked-after professionals supports our operations and growth. Based in Tirupur, which offers world-class facilities for garment manufacturing, we benefit from ideal climatic conditions, skilled workforce, excellent infrastructure, and proximity to textile mills for sourcing high-quality yarn.
              </Typography>

              <Typography sx={{ lineHeight: 1.8, color: "#555" }}>
                With over 11+ years of experience in the garment business, we have catered to the requirements of leading customers across the globe, making us a trusted partner for garment manufacturing and export.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* STATS SECTION */}
      <Box
        sx={{
          py: 12,
          bgcolor: "#ffffff",
          borderTop: "1px solid #eaeaea",
          borderBottom: "1px solid #eaeaea",
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              sx={{
                color: "#fbc02d",
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Our Achievements
            </Typography>

            <Typography variant="h4" fontWeight={800} mb={2}>
              By The Numbers
            </Typography>

            <Divider
              sx={{
                width: 80,
                height: 4,
                bgcolor: "#fbc02d",
                mx: "auto",
              }}
            />
          </Box>

          <Grid container spacing={3}>
            {statsData.map((stat, index) => (
              <StatCard
                key={index}
                Icon={stat.icon}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
              />
            ))}
          </Grid>
        </Container>
      </Box>

      {/* MISSION / VISION WITH IMAGES */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* MISSION */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={buildingImg}
                alt="Our Facility"
                sx={{
                  width: "100%",
                  height: { xs: 350, md: 500 },
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                  mb: { xs: 4, md: 0 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight={700} mb={3}>
                Our Mission
              </Typography>
              <Typography sx={{ lineHeight: 1.8, color: "#555", mb: 3 }}>
                Fashion Creator endeavors to be one of the world's best known, largest manufacturers and exporters of top quality, aesthetically designed, safe-to-wear and eco-friendly readymade garments.
              </Typography>
              <Typography sx={{ lineHeight: 1.8, color: "#555", mb: 3 }}>
                We plan to achieve this through continuous improvement of our production capabilities, financial health, human resources, and quality systems. Our commitment extends to research and development capabilities, worker safety and happiness, and the exclusive use of sustainable raw materials and processing methods that are safest on human skin.
              </Typography>
            </Grid>
          </Grid>

          {/* VISION */}
          <Grid container spacing={6} alignItems="center" sx={{ mt: 4 }}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Typography variant="h5" fontWeight={700} mb={3}>
                Our Vision
              </Typography>
              <Typography sx={{ lineHeight: 1.8, color: "#555", mb: 3 }}>
                To become a globally trusted garment manufacturing brand known
                for quality, reliability, and sustainable growth in the apparel
                industry.
              </Typography>
              <Typography sx={{ lineHeight: 1.8, color: "#555" }}>
                We envision a future where ethical manufacturing and innovative
                design go hand in hand, creating value for our clients worldwide.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Box
                component="img"
                src={workersImg}
                alt="Our Process"
                sx={{
                  width: "100%",
                  height: { xs: 350, md: 500 },
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* QUALITY ASSURANCE SECTION */}
      <Box sx={{ py: 12, bgcolor: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight={700} mb={3}>
                Quality Assurance
              </Typography>

              <Typography sx={{ lineHeight: 1.9, color: "#555", fontSize: 15 }}>
                A quality driven firm, we follow rigorous quality guidelines and procedures to maintain the quality of our entire product range in adherence with the international standards of quality. We fabricate our products from superior quality fabrics, which are procured from some of the certified vendors in the industry. We have employed an adept team of quality controllers, which conducts rigorous tests of our comprehensive array of garments at all stages of the production process in order to deliver a flawless gamut of products at our client's end.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Box
                    component="img"
                    src={g10Img}
                    alt="Quality Assurance"
                    sx={{
                      width: "100%",
                      height: { xs: 150, md: 280 },
                      objectFit: "cover",
                      borderRadius: 2,
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Box
                    component="img"
                    src={g11Img}
                    alt="Quality Products 1"
                    sx={{
                      width: "100%",
                      height: { xs: 150, md: 280 },
                      objectFit: "cover",
                      borderRadius: 2,
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Box
                    component="img"
                    src={g12Img}
                    alt="Quality Products 2"
                    sx={{
                      width: "100%",
                      height: { xs: 150, md: 280 },
                      objectFit: "cover",
                      borderRadius: 2,
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
