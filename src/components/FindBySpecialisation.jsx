import { Box, Typography, Button } from "@mui/material";

// Icons
import dentistry from "../assets/Dentistry.png";
import primaryCare from "../assets/Primary care.png";
import cardiology from "../assets/Cardiology.png";
import mri from "../assets/MRI Resonance.png";
import bloodTest from "../assets/BloodTest.png";
import psychologist from "../assets/Psychologist.png";
import laboratory from "../assets/Laboratory.png";
import xray from "../assets/X-ray.png";

const specialisations = [
  { label: "Dentistry", icon: dentistry },
  { label: "Primary Care", icon: primaryCare },
  { label: "Cardiology", icon: cardiology },
  { label: "MRI Resonance", icon: mri },
  { label: "Blood Test", icon: bloodTest },
  { label: "Piscologist", icon: psychologist }, // spelling as per design
  { label: "Laboratory", icon: laboratory },
  { label: "X-Ray", icon: xray },
];

export default function FindBySpecialisation() {
  return (
    <Box
      sx={{
        background:
          "radial-gradient(ellipse at center, #f3f8ff 0%, #eaf2ff 100%)",
        py: { xs: 6, md: 10 },
      }}
    >
      <Box maxWidth="1200px" mx="auto" px={2}>
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          color="#1B3C74"
          mb={6}
        >
          Find By Specialisation
        </Typography>

        {/* Cards Grid */}
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={3}
        >
          {specialisations.map((item) => (
            <Box
              key={item.label}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                height: "160px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 32px rgba(45,108,223,0.2)",
                },
              }}
            >
              <img
                src={item.icon}
                alt={item.label}
                width="48"
                height="48"
                style={{ marginBottom: "12px" }}
              />
              <Typography
                fontSize="16px"
                color="#8A9AB0"
                fontWeight={500}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* View All Button */}
        <Box display="flex" justifyContent="center" mt={6}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              px: 4,
              py: 1.5,
              fontSize: "16px",
            }}
          >
            View All
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
