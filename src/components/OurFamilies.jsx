
import { Box, Typography } from "@mui/material";
import familiesBanner from "../assets/our-families-banner.png";

export default function OurFamilies() {
  return (
    <Box
      sx={{
        backgroundColor: "#E7F0FF",
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        maxWidth="1200px"
        mx="auto"
        px={{ xs: 2, md: 4 }}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        gap={6}
      >
        {/* LEFT CONTENT */}
        <Box width={{ xs: "100%", md: "45%" }}>
          <Typography
            fontSize="14px"
            fontWeight={600}
            color="#2AA7FF"
            mb={1}
          >
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </Typography>

          <Typography
            fontSize={{ xs: "32px", md: "40px" }}
            fontWeight={700}
            color="#1B3C74"
            mb={3}
          >
            Our Families
          </Typography>

          <Typography
            color="#5A6B8C"
            lineHeight={1.9}
            maxWidth="480px"
          >
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist,
            we can provide referrals or advice about the type of practitioner
            you require. We treat all enquiries sensitively and in the
            strictest confidence.
          </Typography>
        </Box>

        {/* RIGHT IMAGE (STATS AS IMAGE) */}
        <Box
          width={{ xs: "100%", md: "55%" }}
          display="flex"
          justifyContent="center"
        >
          <Box
            component="img"
            src={familiesBanner}
            alt="Our Families Statistics"
            sx={{
              width: "100%",
              maxWidth: "520px",
              borderRadius: "16px",
              boxShadow: "0 24px 48px rgba(0,0,0,0.08)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
