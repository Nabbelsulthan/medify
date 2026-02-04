import { Box, Typography, Button, TextField } from "@mui/material";
import { useRef } from "react";
import mobileImg from "../assets/mobile.jpg";
import googlePlay from "../assets/google_play.png.png";
import appStore from "../assets/apple_store.png.png";

export default function DownloadApp() {
  const phoneRef = useRef(null);

  const handleClear = () => {
    if (phoneRef.current) {
      phoneRef.current.value = "";
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#EEF4FF",
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
        {/* LEFT IMAGE */}
        <Box
          width={{ xs: "100%", md: "50%" }}
          display="flex"
          justifyContent="center"
        >
          <Box
            component="img"
            src={mobileImg}
            alt="Medify App"
            sx={{
              width: "100%",
              maxWidth: "420px",
            }}
          />
        </Box>

        {/* RIGHT CONTENT */}
        <Box width={{ xs: "100%", md: "50%" }}>
          <Typography
            fontSize={{ xs: "28px", md: "40px" }}
            fontWeight={700}
            color="#1B3C74"
            mb={2}
          >
            Download the <br />
            <span style={{ color: "#2AA7FF" }}>Medify App</span>
          </Typography>

          <Typography color="#5A6B8C" mb={3}>
            Get the link to download the app
          </Typography>

          {/* INPUT + BUTTON */}
          <Box
            display="flex"
            gap={2}
            alignItems="center"
            mb={4}
            flexWrap="wrap"
          >
            <TextField
              inputRef={phoneRef}
              placeholder="Enter phone number"
              size="small"
              InputProps={{
                startAdornment: (
                  <Typography mr={1} color="#1B3C74">
                    +91
                  </Typography>
                ),
              }}
              sx={{
                width: { xs: "100%", sm: "260px" },
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
              }}
            />

            <Button
              variant="contained"
              onClick={handleClear}
              sx={{
                backgroundColor: "#2AA7FF",
                textTransform: "none",
                px: 4,
                borderRadius: "8px",
              }}
            >
              Send SMS
            </Button>
          </Box>

          {/* STORE BUTTONS */}
          <Box display="flex" gap={2} flexWrap="wrap">
            <img src={googlePlay} alt="Google Play" height="48" />
            <img src={appStore} alt="App Store" height="48" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
