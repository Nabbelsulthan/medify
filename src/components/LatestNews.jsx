import { Box, Typography } from "@mui/material";
import detoxImg from "../assets/detox.png";

const newsData = [
  {
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
    image: detoxImg,
  },
  {
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
    image: detoxImg,
  },
  {
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
    image: detoxImg,
  },
];

export default function LatestNews() {
  return (
    <Box
      sx={{
     
        py: { xs: 6, md: 10 },
      }}
    >
      <Box maxWidth="1200px" mx="auto" px={{ xs: 2, md: 4 }}>
        {/* Heading */}
        <Typography
          textAlign="center"
          fontSize="14px"
          fontWeight={600}
          color="#2AA7FF"
          mb={1}
        >
          Blog & News
        </Typography>

        <Typography
          textAlign="center"
          fontSize={{ xs: "28px", md: "40px" }}
          fontWeight={700}
          color="#1B3C74"
          mb={6}
        >
          Read Our Latest News
        </Typography>

        {/* Cards */}
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            md: "repeat(3, 1fr)",
          }}
          gap={4}
        >
          {newsData.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                width="100%"
                height="200px"
                sx={{ objectFit: "cover" }}
              />

              {/* Content */}
              <Box p={3}>
                <Typography
                  fontSize="14px"
                  color="#77829D"
                  mb={1}
                >
                  {item.category} &nbsp;|&nbsp; {item.date}
                </Typography>

                <Typography
                  fontSize="18px"
                  fontWeight={600}
                  color="#1B3C74"
                  mb={2}
                >
                  {item.title}
                </Typography>

                {/* Author */}
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    sx={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: "#2AA7FF",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    R
                  </Box>
                  <Typography
                    fontSize="14px"
                    color="#1B3C74"
                    fontWeight={500}
                  >
                    {item.author}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
