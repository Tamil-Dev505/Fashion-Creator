  import { useState } from "react";
  import {
    Box,
    Typography,
    Container,
    Grid,
    Button,
    ButtonGroup,
  } from "@mui/material";
  import FactoryIcon from "@mui/icons-material/Factory";
  import GroupsIcon from "@mui/icons-material/Groups";
  import VerifiedIcon from "@mui/icons-material/Verified";
  import LocalShippingIcon from "@mui/icons-material/LocalShipping";
  import CameraAltIcon from "@mui/icons-material/CameraAlt";
  import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

  // Import gallery images
  import g1 from "../assets/gallery/g1.jpg";
  import g2 from "../assets/gallery/g2.jpg";
  import g3 from "../assets/gallery/g3.jpg";
  import g4 from "../assets/gallery/g4.jpg";
  import g5 from "../assets/gallery/g5.jpg";
  import g6 from "../assets/gallery/g6.jpg";
  import g7 from "../assets/gallery/g7.jpg";
  import g8 from "../assets/gallery/g8.jpg";
  import g10 from "../assets/gallery/g10.JPG";
  import g11 from "../assets/gallery/g11.JPG";
  import g12 from "../assets/gallery/g12.JPG";

  // Import MAD images
  import MAD_0452 from "../assets/gallery/MAD_0452.JPG";
  import MAD_0453 from "../assets/gallery/MAD_0453.JPG";
  import MAD_0454 from "../assets/gallery/MAD_0454.JPG";
  import MAD_0455 from "../assets/gallery/MAD_0455.JPG";
  import MAD_0457 from "../assets/gallery/MAD_0457.JPG";
  import MAD_0462 from "../assets/gallery/MAD_0462.JPG";
  import MAD_0463 from "../assets/gallery/MAD_0463.JPG";
  import MAD_0464 from "../assets/gallery/MAD_0464.JPG";
  import MAD_0466 from "../assets/gallery/MAD_0466.JPG";
  import MAD_0467 from "../assets/gallery/MAD_0467.JPG";
  import MAD_0468 from "../assets/gallery/MAD_0468.JPG";
  import MAD_0469 from "../assets/gallery/MAD_0469.JPG";
  import MAD_0470 from "../assets/gallery/MAD_0470.JPG";
  import MAD_0471 from "../assets/gallery/MAD_0471.JPG";
  import MAD_0472 from "../assets/gallery/MAD_0472.JPG";
  import MAD_0473 from "../assets/gallery/MAD_0473.JPG";
  import MAD_0474 from "../assets/gallery/MAD_0474.JPG";
  import MAD_0475 from "../assets/gallery/MAD_0475.JPG";
  import MAD_0476 from "../assets/gallery/MAD_0476.JPG";
  import MAD_0477 from "../assets/gallery/MAD_0477.JPG";
  import MAD_0478 from "../assets/gallery/MAD_0478.JPG";
  import MAD_0479 from "../assets/gallery/MAD_0479.JPG";
  import MAD_0480 from "../assets/gallery/MAD_0480.JPG";
  import MAD_0481 from "../assets/gallery/MAD_0481.JPG";
  import MAD_0482 from "../assets/gallery/MAD_0482.JPG";
  import MAD_0483 from "../assets/gallery/MAD_0483.JPG";
  import MAD_0484 from "../assets/gallery/MAD_0484.JPG";
  import MAD_0485 from "../assets/gallery/MAD_0485.JPG";
  import MAD_0486 from "../assets/gallery/MAD_0486.JPG";
  import MAD_0487 from "../assets/gallery/MAD_0487.JPG";
  import MAD_0488 from "../assets/gallery/MAD_0488.JPG";
  import MAD_0489 from "../assets/gallery/MAD_0489.JPG";
  import MAD_0490 from "../assets/gallery/MAD_0490.JPG";
  import MAD_0491 from "../assets/gallery/MAD_0491.JPG";
  import MAD_0492 from "../assets/gallery/MAD_0492.JPG";
  import MAD_0493 from "../assets/gallery/MAD_0493.JPG";
  import MAD_0494 from "../assets/gallery/MAD_0494.JPG";
  import MAD_0495 from "../assets/gallery/MAD_0495.JPG";
  import MAD_0496 from "../assets/gallery/MAD_0496.JPG";
  import MAD_0497 from "../assets/gallery/MAD_0497.JPG";
  import MAD_0499 from "../assets/gallery/MAD_0499.JPG";
  import MAD_0500 from "../assets/gallery/MAD_0500.JPG";
  import MAD_0501 from "../assets/gallery/MAD_0501.JPG";
  import MAD_0502 from "../assets/gallery/MAD_0502.JPG";
  import MAD_0503 from "../assets/gallery/MAD_0503.JPG";
  import MAD_0504 from "../assets/gallery/MAD_0504.JPG";
  import MAD_0505 from "../assets/gallery/MAD_0505.JPG";
  import MAD_0506 from "../assets/gallery/MAD_0506.JPG";
  import MAD_0507 from "../assets/gallery/MAD_0507.JPG";
  import MAD_0508 from "../assets/gallery/MAD_0508.JPG";
  import MAD_0509 from "../assets/gallery/MAD_0509.JPG";
  import MAD_0510 from "../assets/gallery/MAD_0510.JPG";
  import MAD_0511 from "../assets/gallery/MAD_0511.JPG";
  import MAD_0512 from "../assets/gallery/MAD_0512.JPG";
  import MAD_0513 from "../assets/gallery/MAD_0513.JPG";
  import MAD_0514 from "../assets/gallery/MAD_0514.JPG";
  import MAD_0516 from "../assets/gallery/MAD_0516.JPG";
  import MAD_0517 from "../assets/gallery/MAD_0517.JPG";
  import MAD_0518 from "../assets/gallery/MAD_0518.JPG";
  import MAD_0520 from "../assets/gallery/MAD_0520.JPG";
  import MAD_0521 from "../assets/gallery/MAD_0521.JPG";
  import MAD_0522 from "../assets/gallery/MAD_0522.JPG";
  import MAD_0523 from "../assets/gallery/MAD_0523.JPG";
  import MAD_0524 from "../assets/gallery/MAD_0524.JPG";
  import MAD_0525 from "../assets/gallery/MAD_0525.JPG";
  import MAD_0526 from "../assets/gallery/MAD_0526.JPG";
  import MAD_0527 from "../assets/gallery/MAD_0527.JPG";
  import MAD_0528 from "../assets/gallery/MAD_0528.JPG";
  import MAD_0529 from "../assets/gallery/MAD_0529.JPG";
  import MAD_0530 from "../assets/gallery/MAD_0530.JPG";
  import MAD_0531 from "../assets/gallery/MAD_0531.JPG";
  import MAD_0532 from "../assets/gallery/MAD_0532.JPG";
  import MAD_0533 from "../assets/gallery/MAD_0533.JPG";
  import MAD_0534 from "../assets/gallery/MAD_0534.JPG";
  import MAD_0535 from "../assets/gallery/MAD_0535.JPG";
  import MAD_0536 from "../assets/gallery/MAD_0536.JPG";
  import MAD_0537 from "../assets/gallery/MAD_0537.JPG";
  import MAD_0538 from "../assets/gallery/MAD_0538.JPG";
  import MAD_0539 from "../assets/gallery/MAD_0539.JPG";
  import MAD_0540 from "../assets/gallery/MAD_0540.JPG";
  import MAD_0541 from "../assets/gallery/MAD_0541.JPG";
  import MAD_0542 from "../assets/gallery/MAD_0542.JPG";
  import MAD_0543 from "../assets/gallery/MAD_0543.JPG";
  import MAD_0544 from "../assets/gallery/MAD_0544.JPG";
  import MAD_0545 from "../assets/gallery/MAD_0545.JPG";
  import MAD_0546 from "../assets/gallery/MAD_0546.JPG";
  import MAD_0547 from "../assets/gallery/MAD_0547.JPG";

  const galleryImages = [
    // Boys category
    { src: g1, category: "boys" },
    { src: g2, category: "boys" },
    { src: g3, category: "boys" },
    { src: g4, category: "boys" },
    { src: g5, category: "boys" },
    { src: g6, category: "boys" },
    { src: MAD_0533, category: "boys" },
    { src: MAD_0534, category: "boys" },
    { src: MAD_0535, category: "boys" },
    { src: MAD_0536, category: "boys" },
    { src: MAD_0537, category: "boys" },
    { src: MAD_0538, category: "boys" },
    { src: MAD_0539, category: "boys" },
    { src: MAD_0540, category: "boys" },
    { src: MAD_0541, category: "boys" },
    { src: MAD_0542, category: "boys" },
    { src: MAD_0543, category: "boys" },
    { src: MAD_0544, category: "boys" },
    { src: MAD_0545, category: "boys" },
    { src: MAD_0546, category: "boys" },
    { src: MAD_0547, category: "boys" },
    { src: MAD_0455, category: "boys" },
    { src: MAD_0457, category: "boys" },
    { src: MAD_0462, category: "boys" },
    { src: MAD_0463, category: "boys" },
    { src: MAD_0464, category: "boys" },
    { src: MAD_0466, category: "boys" },
    { src: MAD_0467, category: "boys" },
    { src: MAD_0468, category: "boys" },
    { src: MAD_0469, category: "boys" },
    { src: MAD_0470, category: "boys" },
    { src: MAD_0471, category: "boys" },
    { src: MAD_0472, category: "boys" },
    { src: MAD_0473, category: "boys" },
    { src: MAD_0474, category: "boys" },
    { src: MAD_0475, category: "boys" },
    { src: MAD_0476, category: "boys" },
    { src: MAD_0477, category: "boys" },
    
    // Girls category
    { src: g7, category: "girls" },
    { src: g8, category: "girls" },
    { src: g10, category: "girls" },
    { src: g11, category: "girls" },
    { src: g12, category: "girls" },
    { src: MAD_0478, category: "girls" },
    { src: MAD_0479, category: "girls" },
    { src: MAD_0480, category: "girls" },
    { src: MAD_0481, category: "girls" },
    { src: MAD_0482, category: "girls" },
    { src: MAD_0483, category: "girls" },
    { src: MAD_0484, category: "girls" },
    { src: MAD_0485, category: "girls" },
    { src: MAD_0486, category: "girls" },
    { src: MAD_0487, category: "girls" },
    { src: MAD_0488, category: "girls" },
    { src: MAD_0489, category: "girls" },
    { src: MAD_0490, category: "girls" },
    { src: MAD_0491, category: "girls" },
    { src: MAD_0492, category: "girls" },
    { src: MAD_0493, category: "girls" },
    { src: MAD_0494, category: "girls" },
    { src: MAD_0495, category: "girls" },
    { src: MAD_0496, category: "girls" },
    { src: MAD_0497, category: "girls" },
    { src: MAD_0506, category: "girls" },
    { src: MAD_0507, category: "girls" },
    { src: MAD_0508, category: "girls" },
    { src: MAD_0509, category: "girls" },
    { src: MAD_0510, category: "girls" },
    { src: MAD_0511, category: "girls" },
    { src: MAD_0512, category: "girls" },
    { src: MAD_0513, category: "girls" },
    { src: MAD_0514, category: "girls" },
    { src: MAD_0516, category: "girls" },
    { src: MAD_0517, category: "girls" },
    { src: MAD_0518, category: "girls" },
    { src: MAD_0520, category: "girls" },
    { src: MAD_0521, category: "girls" },
    { src: MAD_0522, category: "girls" },
    { src: MAD_0523, category: "girls" },
    { src: MAD_0524, category: "girls" },
    { src: MAD_0525, category: "girls" },
    { src: MAD_0526, category: "girls" },
    { src: MAD_0527, category: "girls" },
    { src: MAD_0528, category: "girls" },
    { src: MAD_0529, category: "girls" },
    { src: MAD_0530, category: "girls" },
    { src: MAD_0531, category: "girls" },
    { src: MAD_0532, category: "girls" },
    
    // Briefs category
    { src: MAD_0499, category: "briefs" },
    { src: MAD_0500, category: "briefs" },
    { src: MAD_0501, category: "briefs" },
    { src: MAD_0502, category: "briefs" },
    { src: MAD_0503, category: "briefs" },
    { src: MAD_0504, category: "briefs" },
    { src: MAD_0505, category: "briefs" },
    
  ];

  const filterCategories = [
    { label: "All", value: "all" },
    { label: "Boys", value: "boys" },
    { label: "Girls", value: "girls" },
    { label: "Briefs", value: "briefs" },
  ];

  const stats = [
    { icon: <FactoryIcon sx={{ fontSize: 40 }} />, value: "50,000+", label: "Sq. Ft. Facility" },
    { icon: <GroupsIcon sx={{ fontSize: 40 }} />, value: "500+", label: "Skilled Workers" },
    { icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />, value: "300+", label: "Machines" },
    { icon: <LocalShippingIcon sx={{ fontSize: 40 }} />, value: "1M+", label: "Units/Month" },
  ];

  export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredImages = activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

    return (
      <Box
        sx={{
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
        }}
      >
        {/* HERO SECTION */}
        <Box
          sx={{
            py: { xs: 12, md: 18 },
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Box textAlign="center">
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  bgcolor: "rgba(251,192,45,0.15)",
                  border: "1px solid rgba(251,192,45,0.4)",
                  borderRadius: 50,
                  px: 3,
                  py: 1,
                  mb: 3,
                  animation: "fadeInDown 0.8s ease-out forwards",
                }}
              >
                <CameraAltIcon sx={{ color: "#fbc02d", fontSize: 20 }} />
                <Typography
                  sx={{
                    color: "#fbc02d",
                    fontWeight: 600,
                    fontSize: 14,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Gallery
                </Typography>
              </Box>

              <Typography
                variant="h2"
                fontWeight={800}
                sx={{
                  color: "#fff",
                  fontSize: { xs: 32, md: 56 },
                  mb: 3,
                  lineHeight: 1.2,
                  animation: "fadeInUp 0.8s ease-out 0.2s forwards",
                  opacity: 0,
                }}
              >
                Craftsmanship in
                <Box component="span" sx={{ color: "#fbc02d" }}> Action</Box>
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: { xs: 16, md: 18 },
                  maxWidth: 700,
                  mx: "auto",
                  lineHeight: 1.8,
                  animation: "fadeInUp 0.8s ease-out 0.4s forwards",
                  opacity: 0,
                }}
              >
                Take a visual journey through our state-of-the-art manufacturing facilities,
                witness our skilled workforce in action, and discover the precision that goes
                into every garment we create.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* STATS SECTION */}
        <Box sx={{ bgcolor: "#1a1a2e", py: 6 ,  justifyContent: "center"}}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box
                    sx={{
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 2,
                      px: 3,
                      py: 2,
                      borderRight: index < 3 ? { md: "1px solid rgba(251,192,45,0.2)" } : "none",
                    }}
                  >
                    <Box sx={{ color: "#fbc02d", mb: 1 }}>{stat.icon}</Box>
                    <Typography
                      variant="h4"
                      fontWeight={800}
                      sx={{ color: "#fff", fontSize: { xs: 24, md: 32 } }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* PRODUCT GALLERY */}
        <Box sx={{ bgcolor: "#f5f5f5", py: { xs: 4, md: 6 } }}>
          <Container maxWidth="lg">
            {/* Gallery Heading */}
            <Box textAlign="center" mb={6}>
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
                Exclusive Collections
              </Typography>
              <Typography
                variant="h3"
                fontWeight={800}
                sx={{ fontSize: { xs: 28, md: 40 }, mb: 4 }}
              >
                Discover Our Style Spectrum
              </Typography>
            </Box>

            {/* Filter Buttons */}
            <Box sx={{ mb: 6, display: "flex", justifyContent: "center" }}>
              <ButtonGroup variant="outlined" sx={{ gap: 1, flexWrap: "wrap" }}>
                {filterCategories.map((category) => (
                  <Button
                    key={category.value}
                    onClick={() => setActiveFilter(category.value)}
                    sx={{
                      bgcolor: activeFilter === category.value ? "#fbc02d" : "transparent",
                      color: activeFilter === category.value ? "#000" : "#333",
                      borderColor: "#fbc02d",
                      fontWeight: 600,
                      textTransform: "capitalize",
                      px: 3,
                      py: 1.2,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: activeFilter === category.value ? "#f9a825" : "rgba(251,192,45,0.1)",
                        borderColor: "#fbc02d",
                      },
                    }}
                  >
                    {category.label}
                  </Button>
                ))}
              </ButtonGroup>
            </Box>

            <Grid container spacing={3} justifyContent="center">
              {filteredImages.map((img, index) => (
                <Grid item xs={6} sm={6} md={3} lg={3} key={index}>
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: 2,
                      overflow: "hidden",
                      width: 320,
                      height: 420,
                      cursor: "pointer",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      mx: "auto",
                      "&:hover": {
                        transform: "translateY(-12px) scale(1.02)",
                        boxShadow: "0 20px 40px rgba(251, 192, 45, 0.25)",
                      },
                      "&:hover .gallery-overlay": {
                        opacity: 1,
                        backdropFilter: "blur(4px)",
                      },
                      "&:hover .gallery-image": {
                        transform: "scale(1.08)",
                      },
                      "&:hover .gallery-badge": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    {/* Image */}
                    <Box
                      component="img"
                      src={img.src}
                      alt={`Product ${index + 1}`}
                      className="gallery-image"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />

                    {/* Dark Overlay */}
                    <Box
                      className="gallery-overlay"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0, 0, 0, 0.3)",
                        opacity: 0,
                        transition: "opacity 0.4s ease",
                        zIndex: 1,
                      }}
                    />

                    {/* Gold Border on Hover */}
                    <Box
                      className="gallery-border"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        border: "2px solid #fbc02d",
                        opacity: 0,
                        transition: "opacity 0.4s ease",
                        zIndex: 2,
                        pointerEvents: "none",
                        borderRadius: 2,
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    />

                    {/* Category Badge */}
                    <Box
                      className="gallery-badge"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        bgcolor: "rgba(251, 192, 45, 0.95)",
                        color: "#000",
                        padding: "12px 16px",
                        textAlign: "center",
                        fontWeight: 700,
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        opacity: 0,
                        transform: "translateY(100%)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        zIndex: 3,
                      }}
                    >
                      {img.category}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* QUALITY SECTION */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: "#f8f9fa",
          }}
        >
          <Container maxWidth="lg">
            <Box textAlign="center" mb={6}>
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
                Our Commitment
              </Typography>
              <Typography
                variant="h3"
                fontWeight={800}
                sx={{ fontSize: { xs: 28, md: 40 }, mb: 3 }}
              >
                Excellence at Every Step
              </Typography>
              <Typography sx={{ color: "#666", lineHeight: 1.9, maxWidth: 700, mx: "auto" }}>
                From the initial fabric cutting to the final inspection, each step is
                executed with precision and care. Our state-of-the-art facilities and
                skilled workforce ensure that every garment meets international standards.
              </Typography>
            </Box>

            <Grid container spacing={3} justifyContent="center">
              {[
                { icon: <VerifiedIcon />, text: "ISO 9001 Certified" },
                { icon: <VerifiedIcon />, text: "OEKO-TEX Standard" },
                { icon: <VerifiedIcon />, text: "SEDEX Registered" },
                { icon: <VerifiedIcon />, text: "BSCI Compliant" },
              ].map((item, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1,
                      p: 3,
                      bgcolor: "#fff",
                      borderRadius: 2,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    }}
                  >
                    <Box sx={{ color: "#fbc02d", fontSize: 32 }}>{item.icon}</Box>
                    <Typography fontWeight={600} sx={{ fontSize: 14, textAlign: "center" }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* CTA SECTION */}
        <Box
          sx={{
            py: { xs: 10, md: 14 },
            bgcolor: "#1a1a2e",
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{ color: "#fff", fontSize: { xs: 28, md: 42 }, mb: 3 }}
            >
              Want to See Our Facilities?
            </Typography>
            <Typography
              sx={{ color: "rgba(255,255,255,0.7)", fontSize: 18, mb: 4, lineHeight: 1.8 }}
            >
              Schedule a virtual or in-person tour of our manufacturing facilities.
              Witness firsthand our commitment to quality and craftsmanship.
            </Typography>
            <Box
              component="a"
              href="/contact"
              sx={{
                display: "inline-block",
                bgcolor: "#fbc02d",
                color: "#000",
                fontWeight: 700,
                fontSize: 16,
                px: 5,
                py: 2,
                borderRadius: 50,
                textDecoration: "none",
                boxShadow: "0 8px 25px rgba(251,192,45,0.4)",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#f9a825",
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 35px rgba(251,192,45,0.5)",
                },
              }}
            >
              Schedule a Tour
            </Box>
          </Container>
        </Box>
      </Box>
    );
  }
