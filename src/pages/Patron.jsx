import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  Chip,
} from "@mui/material";
import { 
  Favorite, 
  SportsSoccer, 
  LocationOn, 
  VolunteerActivism,
  Groups,
  EmojiEvents
} from "@mui/icons-material";
import patronimg from "../assets/logos/patron.png";
import patron1Bg from "../assets/logos/patron1.png";

export default function Patron() {
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
          backgroundImage: `url(${patron1Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "blur(8px)",
          opacity: 0.1,
          zIndex: -1,
        }
      }}
    >
      {/* HERO HEADER */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: "linear-gradient(135deg, rgba(26,26,46,0.85) 0%, rgba(22,33,62,0.85) 50%, rgba(15,52,96,0.85) 100%)",
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
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${patron1Bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Chip 
            icon={<Favorite sx={{ fontSize: 16 }} />}
            label="GIVING BACK TO COMMUNITY" 
            sx={{ 
              bgcolor: "rgba(251,192,45,0.2)", 
              color: "#fbc02d", 
              fontWeight: 700, 
              mb: 3,
              fontSize: 12,
              letterSpacing: 1,
              animation: "fadeInDown 0.8s ease-out forwards",
              "& .MuiChip-icon": { color: "#fbc02d" }
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
            Being a <span style={{ color: "#fbc02d" }}>Patron</span> is a Responsibility!
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
            At Fashion Creator, we believe in giving back to the community and 
            supporting initiatives that bring people together through sports and teamwork.
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

      {/* MAIN CONTENT */}
      <Box sx={{ py: 10, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* IMAGE */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)",
                    zIndex: 1,
                  }
                }}
              >
                <Box
                  component="img"
                  src={patronimg}
                  alt="Club Deportivo Yumanos Soccer Jersey"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    zIndex: 2,
                  }}
                >
                  <Chip
                    icon={<SportsSoccer />}
                    label="Proud Sponsor"
                    sx={{
                      bgcolor: "#fbc02d",
                      color: "#212121",
                      fontWeight: 700,
                      "& .MuiChip-icon": { color: "#212121" }
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* TEXT CONTENT */}
            <Grid item xs={12} md={7}>
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
                Our Partnership
              </Typography>

              <Typography variant="h3" fontWeight={800} sx={{ mb: 3, fontSize: { xs: 28, md: 38 } }}>
                Club Deportivo Yumanos, AC
              </Typography>

              <Typography sx={{ color: "#555", lineHeight: 2, mb: 3, fontSize: 16 }}>
                Club Deportivo Yumanos, AC is a non-profit organization that was born from the 
                effort of a group of dedicated parents committed to fostering youth development 
                through sports. The club provides young athletes with opportunities to learn, 
                grow, and excel in soccer while building character and teamwork skills.
              </Typography>

              <Typography sx={{ color: "#555", lineHeight: 2, mb: 4, fontSize: 16 }}>
                We at Fashion Creator are incredibly proud to be the official sponsor of their 
                Soccer Jersey. This partnership represents our commitment to supporting grassroots 
                sports initiatives and giving back to communities that inspire the next generation 
                of athletes.
              </Typography>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 3 }}>
                <LocationOn sx={{ color: "#fbc02d", mt: 0.3 }} />
                <Typography sx={{ color: "#666", fontSize: 14 }}>
                  Ave. Ermita, Alfonso Coronel del Rosal, Unidad deportiva, Guadalajara, 22104 Tijuana, B.C., Mexico
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* WHY WE SPONSOR */}
      <Box sx={{ py: 10, bgcolor: "#fafafa" }}>
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
              Our Commitment
            </Typography>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 3 }}>
              Why We Support Community Sports
            </Typography>
            <Typography sx={{ color: "#666", maxWidth: 600, mx: "auto", lineHeight: 1.8 }}>
              Being a patron is more than just sponsorship - it is about making a lasting impact
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: <VolunteerActivism sx={{ fontSize: 40, color: "#fbc02d" }} />,
                title: "Community Development",
                description: "Supporting local initiatives that bring families and communities together through the love of sports"
              },
              {
                icon: <Groups sx={{ fontSize: 40, color: "#fbc02d" }} />,
                title: "Youth Empowerment",
                description: "Helping young athletes develop discipline, teamwork, and leadership skills that last a lifetime"
              },
              {
                icon: <EmojiEvents sx={{ fontSize: 40, color: "#fbc02d" }} />,
                title: "Promoting Excellence",
                description: "Encouraging athletic excellence while providing quality sportswear that teams can wear with pride"
              }
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    p: 4,
                    height: "100%",
                    textAlign: "center",
                    borderRadius: 3,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                    border: "1px solid #f0f0f0",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 15px 50px rgba(0,0,0,0.12)",
                      borderColor: "#fbc02d",
                    }
                  }}
                >
                  <Box sx={{ mb: 3 }}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 2, color: "#212121" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#666", lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* QUOTE SECTION */}
      <Box 
        sx={{ 
          py: 10, 
          background: "linear-gradient(135deg, #fbc02d 0%, #f9a825 100%)",
          textAlign: "center"
        }}
      >
        <Container maxWidth="md">
          <SportsSoccer sx={{ fontSize: 60, color: "#212121", mb: 3, opacity: 0.3 }} />
          <Typography 
            variant="h4" 
            fontWeight={700} 
            sx={{ mb: 3, color: "#212121", fontStyle: "italic" }}
          >
            &quot;When you support a team, you support dreams. When you sponsor a jersey, 
            you become part of their journey.&quot;
          </Typography>
          <Typography sx={{ color: "#333", fontWeight: 600 }}>
            — Fashion Creator Team
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
