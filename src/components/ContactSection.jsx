import {
  Box,
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Tamil_123",          // ✅ YOUR SERVICE ID
        "template_e4tu34m",   // 🔴 replace
        formRef.current,
        "rHrzeM_tAPWgQf3SX"     // 🔴 replace
      )
      .then(() => {
        setSuccess(true);
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <Box 
        sx={{ 
          py: { xs: 10, md: 14 }, 
          bgcolor: "#fafafa",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(251,192,45,0.2) 50%, transparent 100%)",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          {/* SECTION HEADER */}
          <Box textAlign="center" mb={10}>
            <Typography
              sx={{
                color: "#fbc02d",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                mb: 2,
                display: "inline-block",
                px: 3,
                py: 1,
                bgcolor: "rgba(251,192,45,0.1)",
                borderRadius: 50,
                border: "1px solid rgba(251,192,45,0.3)",
              }}
            >
              Contact Information
            </Typography>

            <Typography
              variant="h3"
              fontWeight={800}
              sx={{ 
                mb: 3, 
                fontSize: { xs: 32, md: 44 },
                color: "#1a1a2e"
              }}
            >
              Connect With Our Team
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 15, md: 16 },
                color: "#666",
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Need more details? Here's how you can reach us. We're available to answer your questions and discuss your business needs.
            </Typography>
          </Box>

          {/* CONTACT INFO CARDS */}
          <Grid container spacing={3} sx={{ mb: 10 }}>
            {/* ADDRESS CARD */}
            <Grid item xs={12} md={6} lg={3}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 2,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "1px solid #f0f0f0",
                  height: "100%",
                  "&:hover": {
                    boxShadow: "0 16px 40px rgba(251,192,45,0.15)",
                    transform: "translateY(-8px)",
                  }
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "12px",
                    bgcolor: "rgba(251, 192, 45, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                  }}
                >
                  <LocationOnIcon sx={{ color: "#fbc02d", fontSize: 28 }} />
                </Box>
                <Typography fontWeight={800} fontSize={16} mb={2} sx={{ color: "#1a1a2e" }}>
                  Office Address
                </Typography>
                <Typography fontSize={13} color="#666" lineHeight={2}>
                  No 2/1, Sree Nithi Garden,<br />
                  Andhipalayam, Mangalam Road,<br />
                  Tirupur – 641 687,<br />
                  Tamil Nadu, INDIA
                </Typography>
              </Paper>
            </Grid>

            {/* PHONE CARD */}
            <Grid item xs={12} md={6} lg={3}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 2,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "1px solid #f0f0f0",
                  height: "100%",
                  "&:hover": {
                    boxShadow: "0 16px 40px rgba(251,192,45,0.15)",
                    transform: "translateY(-8px)",
                  }
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "12px",
                    bgcolor: "rgba(251, 192, 45, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                  }}
                >
                  <PhoneIcon sx={{ color: "#fbc02d", fontSize: 28 }} />
                </Box>
                <Typography fontWeight={800} fontSize={16} mb={2} sx={{ color: "#1a1a2e" }}>
                  Phone
                </Typography>
                <Box>
                  <a
                    href="tel:+919842903603"
                    style={{ 
                      textDecoration: "none", 
                      color: "#333",
                      fontSize: 13,
                      fontWeight: 600,
                      display: "block",
                      marginBottom: "8px",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => e.target.style.color = "#fbc02d"}
                    onMouseLeave={(e) => e.target.style.color = "#333"}
                  >
                    +91 98429 03603
                  </a>
                  <a
                    href="tel:+919842903609"
                    style={{ 
                      textDecoration: "none", 
                      color: "#333",
                      fontSize: 13,
                      fontWeight: 600,
                      display: "block",
                      marginBottom: "8px",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => e.target.style.color = "#fbc02d"}
                    onMouseLeave={(e) => e.target.style.color = "#333"}
                  >
                    +91 98429 03609
                  </a>
                  <a
                    href="tel:+914214974603"
                    style={{ 
                      textDecoration: "none", 
                      color: "#333",
                      fontSize: 13,
                      fontWeight: 600,
                      display: "block",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => e.target.style.color = "#fbc02d"}
                    onMouseLeave={(e) => e.target.style.color = "#333"}
                  >
                    +91 421 4974 603
                  </a>
                </Box>
              </Paper>
            </Grid>

            {/* EMAIL CARD */}
            <Grid item xs={12} md={6} lg={3}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 2,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "1px solid #f0f0f0",
                  height: "100%",
                  "&:hover": {
                    boxShadow: "0 16px 40px rgba(251,192,45,0.15)",
                    transform: "translateY(-8px)",
                  }
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "12px",
                    bgcolor: "rgba(251, 192, 45, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                  }}
                >
                  <EmailIcon sx={{ color: "#fbc02d", fontSize: 28 }} />
                </Box>
                <Typography fontWeight={800} fontSize={16} mb={2} sx={{ color: "#1a1a2e" }}>
                  Email
                </Typography>
                <Box>
                  <a
                    href="mailto:jagadhes@fashioncreator.in"
                    style={{ 
                      textDecoration: "none", 
                      color: "#333",
                      fontSize: 13,
                      fontWeight: 600,
                      display: "block",
                      marginBottom: "8px",
                      transition: "color 0.3s",
                      wordBreak: "break-all",
                    }}
                    onMouseEnter={(e) => e.target.style.color = "#fbc02d"}
                    onMouseLeave={(e) => e.target.style.color = "#333"}
                  >
                    jagadhes@fashioncreator.in
                  </a>
                  <a
                    href="mailto:britto@fashioncreator.in"
                    style={{ 
                      textDecoration: "none", 
                      color: "#333",
                      fontSize: 13,
                      fontWeight: 600,
                      display: "block",
                      transition: "color 0.3s",
                      wordBreak: "break-all",
                    }}
                    onMouseEnter={(e) => e.target.style.color = "#fbc02d"}
                    onMouseLeave={(e) => e.target.style.color = "#333"}
                  >
                    britto@fashioncreator.in
                  </a>
                </Box>
              </Paper>
            </Grid>

            {/* BUSINESS HOURS CARD */}
            <Grid item xs={12} md={6} lg={3}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 2,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "1px solid #f0f0f0",
                  height: "100%",
                  "&:hover": {
                    boxShadow: "0 16px 40px rgba(251,192,45,0.15)",
                    transform: "translateY(-8px)",
                  }
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "12px",
                    bgcolor: "rgba(251, 192, 45, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                  }}
                >
                  <PhoneIcon sx={{ color: "#fbc02d", fontSize: 28 }} />
                </Box>
                <Typography fontWeight={800} fontSize={16} mb={2} sx={{ color: "#1a1a2e" }}>
                  Business Hours
                </Typography>
                <Typography fontSize={13} color="#666" lineHeight={2}>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed<br />
                  <span style={{ marginTop: "8px", display: "block", fontWeight: 600, color: "#fbc02d" }}>
                    Available on WhatsApp 24/7
                  </span>
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* CONTACT FORM SECTION */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {/* CONTACT FORM */}
            <Grid item xs={12} lg={8}>
              <Paper
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: 2,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                  border: "1px solid #f0f0f0",
                  backgroundColor: "#fff",
                }}
              >
                <Typography 
                  variant="h5" 
                  fontWeight={800} 
                  mb={1}
                  sx={{ color: "#1a1a2e" }}
                >
                  Send Us a Message
                </Typography>
                <Typography
                  sx={{
                    color: "#666",
                    fontSize: 14,
                    mb: 4,
                  }}
                >
                  Fill out the form below and we'll get back to you as soon as possible.
                </Typography>

                <form ref={formRef} onSubmit={sendEmail}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        name="name" 
                        label="Full Name" 
                        placeholder="John Doe"
                        fullWidth 
                        required
                        variant="outlined"
                        size="medium"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            transition: "all 0.3s ease",
                            "&:hover fieldset": {
                              borderColor: "#fbc02d",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#fbc02d",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#fbc02d",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="email"
                        label="Email Address"
                        placeholder="john@example.com"
                        type="email"
                        fullWidth
                        required
                        variant="outlined"
                        size="medium"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            transition: "all 0.3s ease",
                            "&:hover fieldset": {
                              borderColor: "#fbc02d",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#fbc02d",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#fbc02d",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField 
                        name="phone" 
                        label="Phone Number" 
                        placeholder="+91 98429 03603"
                        type="tel"
                        fullWidth 
                        variant="outlined"
                        size="medium"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            transition: "all 0.3s ease",
                            "&:hover fieldset": {
                              borderColor: "#fbc02d",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#fbc02d",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#fbc02d",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="message"
                        label="Message"
                        placeholder="Tell us about your inquiry or requirements..."
                        multiline
                        rows={5}
                        fullWidth
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            transition: "all 0.3s ease",
                            "&:hover fieldset": {
                              borderColor: "#fbc02d",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#fbc02d",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#fbc02d",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        endIcon={<SendIcon />}
                        fullWidth
                        sx={{
                          bgcolor: "#fbc02d",
                          color: "#000",
                          fontWeight: 700,
                          py: 1.8,
                          fontSize: 15,
                          borderRadius: "8px",
                          textTransform: "none",
                          boxShadow: "0 8px 24px rgba(251,192,45,0.3)",
                          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": { 
                            bgcolor: "#f9a825",
                            boxShadow: "0 14px 36px rgba(251,192,45,0.5)",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* LOCATION MAP SECTION */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: "#fafafa",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          {/* MAP HEADER */}
          <Box textAlign="center" mb={6}>
            <Typography
              sx={{
                color: "#fbc02d",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                mb: 2,
                display: "inline-block",
                px: 3,
                py: 1,
                bgcolor: "rgba(251,192,45,0.1)",
                borderRadius: 50,
                border: "1px solid rgba(251,192,45,0.3)",
              }}
            >
              Find Us
            </Typography>

            <Typography
              variant="h3"
              fontWeight={800}
              sx={{ 
                mb: 2, 
                fontSize: { xs: 28, md: 40 },
                color: "#1a1a2e"
              }}
            >
              Our Location
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 14, md: 15 },
                color: "#666",
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Visit our headquarters in Tirupur, Tamil Nadu. Click the map to get directions or contact us for details.
            </Typography>
          </Box>

          {/* INTERACTIVE MAP */}
          <Paper
            sx={{
              overflow: "hidden",
              borderRadius: 2,
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              border: "1px solid #f0f0f0",
              height: { xs: 350, md: 500 },
              transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                boxShadow: "0 20px 60px rgba(251,192,45,0.2)",
              },
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
              style={{
                border: "none",
                display: "block",
              }}
            />
          </Paper>
        </Container>
      </Box>
      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success" variant="filled">
          Message sent successfully! 🎉
        </Alert>
      </Snackbar>

      {/* FLOATING WHATSAPP BUTTON */}
      <Box
        component="a"
        href="https://wa.me/919842903603"
        target="_blank"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 56,
          height: 56,
          bgcolor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          zIndex: 2000,
          transition: "transform 0.3s",
          "&:hover": { transform: "scale(1.1)" },
        }}
      >
        <WhatsAppIcon sx={{ color: "#fff", fontSize: 30 }} />
      </Box>
    </>
  );
}
