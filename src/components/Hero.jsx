import { Box, Typography, Button, Paper } from "@mui/material";
import heroImg from "../assets/hero_image.png";

const categories = [
  { label: "Doctors", icon: "Doctors.png" },
  { label: "Labs", icon: "Labs.png" },
  { label: "Hospitals", icon: "Hospital.png" },
  { label: "Medical Store", icon: "Medical store.png" },
  { label: "Ambulance", icon: "Ambulance.png" },
];

export default function Hero() {
  return (
    <Box sx={{ backgroundColor: "#FFFFFF", pb: 8 }}>
      <Box
        maxWidth="1200px"
        mx="auto"
        px={2}
        pt={6}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        textAlign={{ xs: "center", md: "left" }}
      >

        {/* Left Content */}
        <Box maxWidth="520px">
          <Typography fontSize="18px" color="#1B3C74">
            Skip the travel! Find Online
          </Typography>

          <Typography fontSize="48px" fontWeight={700} color="#1B3C74">
            Medical <span style={{ color: "#2D6CDF" }}>Centers</span>
          </Typography>

          <Typography mt={2} color="#77829D">
            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 4, borderRadius: "8px", textTransform: "none" }}
          >
            Find Centers
          </Button>
        </Box>

        {/* Hero Image */}


        <Box
          sx={{
            position: "relative",
            top: { xs: "0px", md: "40px" },
            zIndex: 2,
            mt: { xs: 4, md: 0 },
          }}
        >
          <img
            src={heroImg}
            alt="Doctors"
            style={{
              width: "100%",
              maxWidth: "480px",
              display: "block",
            }}
          />
        </Box>

      </Box>

      {/* Search Card */}
      <Paper
        elevation={4}
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          mt: 6,
          p: 4,
          borderRadius: "16px",
        }}
      >
        {/* Search Inputs Placeholder */}
        <Box
          display="flex"
          gap={2}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Box flex={1} height="48px" bgcolor="#F1F5FF" borderRadius="8px" />
          <Box flex={1} height="48px" bgcolor="#F1F5FF" borderRadius="8px" />
          <Button variant="contained">Search</Button>
        </Box>


        <Typography mt={4} mb={3} textAlign="center" color="#1B3C74">
          You may be looking for
        </Typography>

        {/* Category Icons */}
        <Box display="flex" justifyContent="space-between">
          {categories.map(cat => (
            <Box
              key={cat.label}
              textAlign="center"
              p={2}
              borderRadius="12px"
              width="160px"
              sx={{
                border:
                  cat.label === "Hospitals"
                    ? "2px solid #2D6CDF"
                    : "1px solid #E0E0E0",
              }}
            >
              <img
                src={require(`../assets/${cat.icon}`)}
                alt={cat.label}
                height="48"
              />
              <Typography
                mt={1}
                color={cat.label === "Hospitals" ? "#2D6CDF" : "#77829D"}
              >
                {cat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
