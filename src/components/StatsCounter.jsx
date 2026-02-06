import { Box, Grid, Typography } from "@mui/material";
import {
  EmojiEvents,
  Groups,
  Factory,
  SentimentSatisfiedAlt,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

const statsData = [
  {
    label: "Years of Experience",
    value: 15,
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
    value: 120,
    suffix: "+",
    icon: SentimentSatisfiedAlt,
  },
];

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
    <Typography variant="h4" fontWeight={700} color="#fbc02d">
      {count.toLocaleString()}
      {suffix}
    </Typography>
  );
};

export default function StatsCounter() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url('/stats-bg.png')", // put image in public/
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(79, 75, 75, 0.75)",
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          py: 8,
          px: { xs: 2, md: 6 },
        }}
      >
        {/* DIVIDER LINE */}
        <Box
          sx={{
            width: 80,
            height: 4,
            bgcolor: "#fbc02d",
            mx: "auto",
            mb: 5,
            borderRadius: 2,
          }}
        />

        <Grid container spacing={5} textAlign="center" justifyContent="center">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Grid item xs={6} md={3} key={index}>
                {/* ICON WITH HOVER GLOW */}
                <Box
                  sx={{
                    color: "#fbc02d",
                    mb: 1.5,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                      textShadow: "0 0 20px rgba(251,192,45,0.8)",
                    },
                  }}
                >
                  <Icon sx={{ fontSize: 50 }} />
                </Box>

                {/* COUNTER */}
                <Counter value={stat.value} suffix={stat.suffix} />

                {/* LABEL */}
                <Typography
                  sx={{
                    color: "#fff",
                    mt: 1,
                    fontWeight: 500,
                    letterSpacing: 0.5,
                  }}
                >
                  {stat.label}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
