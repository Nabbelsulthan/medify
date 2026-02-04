import { Box, Typography, Link } from "@mui/material";
import logo from "../assets/Icon.png";
import fb from "../assets/fb.png";
import pinterest from "../assets/pi.png";
import twitter from "../assets/x.png";
import youtube from "../assets/youtube.png";

const column1 = [
  "About Us",
  "Our Pricing",
  "Our Gallery",
  "Appointment",
  "Privacy Policy",
];

const column2 = [
  "Orthology",
  "Neurology",
  "Dental Care",
  "Opthalmology",
  "Cardiology",
];

const column3 = [
  "About Us",
  "Our Pricing",
  "Our Gallery",
  "Appointment",
  "Privacy Policy",
];

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1B3C74", color: "#FFFFFF", pt: 6 }}>
      <Box maxWidth="1200px" mx="auto" px={{ xs: 2, md: 4 }}>
        {/* TOP SECTION */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          gap={6}
        >
          {/* LEFT LOGO + SOCIAL */}
          <Box>
            <Box display="flex" alignItems="center" gap={1} mb={3}>
              <img src={logo} alt="Medify" height="32" />
              <Typography fontSize="20px" fontWeight={700}>
                Medify
              </Typography>
            </Box>

            <Box display="flex" gap={2}>
              <img src={fb} alt="Facebook" height="36" />
              <img src={twitter} alt="Twitter" height="36" />
              <img src={youtube} alt="YouTube" height="36" />
              <img src={pinterest} alt="Pinterest" height="36" />
            </Box>
          </Box>

          {/* LINKS */}
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
            gap={6}
          >
            {[column1, column2, column3].map((col, idx) => (
              <Box key={idx}>
                {col.map((item) => (
                  <Box key={item} display="flex" alignItems="center" mb={1.5}>
                    <Typography mr={1} fontSize="18px">
                      ›
                    </Typography>
                    <Link
                      href="#"
                      underline="none"
                      color="#FFFFFF"
                      fontSize="14px"
                    >
                      {item}
                    </Link>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>

        {/* DIVIDER */}
        <Box
          mt={5}
          pt={3}
          borderTop="1px solid rgba(255,255,255,0.2)"
        >
          <Typography
            textAlign="center"
            fontSize="14px"
            color="rgba(255,255,255,0.7)"
          >
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
