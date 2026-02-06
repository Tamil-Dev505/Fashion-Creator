import {
  Box,
  Typography,
  Container,
  Grid,
  Divider,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import {
  Handshake,
  ThumbUp,
  Warehouse,
  Build,
  Star,
  Factory,
} from "@mui/icons-material";
import vendorImg from "../assets/about/vendor.png";
import clientImg from "../assets/about/client.png";
import warehouseImg from "../assets/about/warehouse.png";
import customImg from "../assets/about/custom.png";
import whyUsImg from "../assets/about/whyus.png";
import assetsImg from "../assets/about/assets.png";
import qualityImg from "../assets/about/quality.png";
import cutImg from "../assets/about/cut.png";
import finishImg from "../assets/about/finish.png";

const SectionCard = ({ icon: Icon, title, description, image, reverse }) => (
  <Box sx={{ py: 10, bgcolor: reverse ? "#f9f9f9" : "#ffffff" }}>
    <Container maxWidth="lg">
      <Grid
        container
        spacing={6}
        alignItems="center"
        direction={reverse ? "row-reverse" : "row"}
      >
        {/* Image Side */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: 350,
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)",
              bgcolor: image ? "transparent" : "#e0e0e0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {image ? (
              <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Typography sx={{ color: "#999", fontSize: 14 }}>
                Add Image Here
              </Typography>
            )}
          </Box>
        </Grid>

        {/* Content Side */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                bgcolor: "rgba(251, 192, 45, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 2,
              }}
            >
              <Icon sx={{ fontSize: 28, color: "#fbc02d" }} />
            </Box>
            <Typography variant="h5" fontWeight={700}>
              {title}
            </Typography>
          </Box>

          <Typography sx={{ lineHeight: 1.9, color: "#555" }}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default function Infrastructure() {
  const sections = [
    {
      icon: Handshake,
      title: "Vendor Base",
      description:
        "We have established strong relationships with a wide network of certified vendors and suppliers. Our vendor base includes premium fabric mills, accessory providers, and raw material suppliers who meet our stringent quality standards. This extensive network ensures consistent supply of high-quality materials at competitive prices, enabling us to deliver superior products to our clients.",
      image: vendorImg,
      reverse: false,
    },
    {
      icon: ThumbUp,
      title: "Client Satisfaction",
      description:
        "Customer satisfaction is at the heart of everything we do. We maintain transparent communication, ensure timely deliveries, and provide dedicated support throughout the production process. Our commitment to quality and reliability has earned us long-term partnerships with leading brands across the globe. We consistently exceed expectations through our attention to detail and personalized service.",
      image: clientImg,
      reverse: true,
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description:
        "Our modern warehousing facilities are designed to handle large volumes of finished goods and raw materials with utmost efficiency. Climate-controlled storage areas protect sensitive fabrics, while our systematic inventory management ensures quick retrieval and dispatch. Our warehouses are strategically located for optimal logistics and timely deliveries.",
      image: warehouseImg,
      reverse: false,
    },
    {
      icon: Build,
      title: "Customization",
      description:
        "We offer comprehensive customization services to meet the unique requirements of each client. From custom designs, sizes, and colors to specialized labeling and packaging, we accommodate all specifications. Our flexible production lines and skilled team ensure that even complex customizations are executed with precision, maintaining quality throughout.",
      image: customImg,
      reverse: true,
    },
    {
      icon: Star,
      title: "Why Us?",
      description:
        "Fashion Creator stands apart with over 11+ years of industry experience, a dedicated workforce of 250+ professionals, and a commitment to ethical manufacturing. We combine traditional craftsmanship with modern technology, ensuring every product meets international quality standards. Our sustainable practices, competitive pricing, and timely delivery make us the preferred partner for global brands.",
      image: whyUsImg,
      reverse: false,
    },
  ];

  const assetCards = [
    {
      title: "Sewing Machines",
      description: "High-speed industrial sewing machines for precision stitching",
      image: assetsImg,
    },
    {
      title: "Cutting Equipment",
      description: "Modern cutting machines for accurate fabric cutting",
      image: cutImg,
    },
    {
      title: "Finishing Units",
      description: "Advanced finishing equipment for quality output",
      image: finishImg,
    },
    {
      title: "Quality Lab",
      description: "Dedicated quality testing and control laboratory",
      image: qualityImg,
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
            "100%": { width: 80, opacity: 1 },
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${assetsImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            opacity: 0.15,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
            Infrastructure
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
            World-Class Manufacturing Facility
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

      {/* INTRO TEXT */}
      <Box
        sx={{
          py: 10,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${vendorImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(10px)",
            opacity: 0.1,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              maxWidth: 900,
              mx: "auto",
              color: "#333",
              lineHeight: 1.9,
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            Our state-of-the-art infrastructure is designed to support high-quality
            garment manufacturing with efficiency, precision, and consistency.
            Equipped with modern machinery and supported by skilled manpower, we
            ensure smooth production flow and timely delivery for every order.
          </Typography>
        </Container>
      </Box>

      {/* SECTIONS */}
      {sections.map((section, index) => (
        <SectionCard
          key={index}
          icon={section.icon}
          title={section.title}
          description={section.description}
          image={section.image}
          reverse={section.reverse}
        />
      ))}

      {/* OUR ASSETS SECTION */}
      <Box sx={{ py: 12, bgcolor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                bgcolor: "rgba(251, 192, 45, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              <Factory sx={{ fontSize: 28, color: "#fbc02d" }} />
            </Box>
            <Typography variant="h4" fontWeight={800} mb={2}>
              Our Assets
            </Typography>
            <Typography sx={{ color: "#555", maxWidth: 700, mx: "auto", lineHeight: 1.8 }}>
              Our manufacturing unit is equipped with state-of-the-art machinery including high-speed sewing machines, cutting-edge finishing equipment, and quality testing instruments.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {assetCards.map((asset, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 16px 40px rgba(251, 192, 45, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: 200,
                      bgcolor: asset.image ? "transparent" : "#e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    {asset.image ? (
                      <Box
                        component="img"
                        src={asset.image}
                        alt={asset.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <Typography sx={{ color: "#999", fontSize: 12 }}>
                        Add Image
                      </Typography>
                    )}
                  </Box>
                  <CardContent sx={{ textAlign: "center", p: 3 }}>
                    <Typography variant="h6" fontWeight={700} mb={1}>
                      {asset.title}
                    </Typography>
                    <Typography sx={{ color: "#666", fontSize: 14 }}>
                      {asset.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* BOTTOM CTA */}
      <Box sx={{ py: 10, bgcolor: "#1a1a1a", textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{ color: "#ffffff", mb: 2 }}
          >
            Ready to Partner With Us?
          </Typography>
          <Typography sx={{ color: "#aaa", lineHeight: 1.8 }}>
            Experience world-class manufacturing capabilities with Fashion Creator.
            Contact us today to discuss your requirements.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
