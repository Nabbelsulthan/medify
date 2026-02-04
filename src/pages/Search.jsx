import {
  Box,
  Button,
  Paper,
  Select,
  MenuItem,
  FormControl,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import TopNoticeBar from "../components/TopNoticeBar";
import Navbar from "../components/Navbar";
import FAQSection from "../components/FAQSection";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";

import promoImg from "../assets/cta.png";
import hospitalIcon from "../assets/Hospital.png";

export default function Search() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  /* Fetch States */
  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((res) => res.json())
      .then((data) => setStates(data));
  }, []);

  /* Fetch Cities when state changes */
  useEffect(() => {
    if (!selectedState) return;

    fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, [selectedState]);

  /* Fetch Hospitals */
  const handleSearch = () => {
    if (!selectedState || !selectedCity) return;

    setLoading(true);
    setSearched(true);

    fetch(
      `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHospitals(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <>
      <TopNoticeBar />
      <Navbar />

      {/* BLUE HEADER */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #2AA7FF 0%, #0C8CE9 100%)",
          py: 6,
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
        }}
      >
        {/* SEARCH BAR */}
        <Paper
          sx={{
            maxWidth: "1100px",
            mx: "auto",
            p: 3,
            borderRadius: "16px",
            display: "flex",
            gap: 2,
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* STATE */}
          <FormControl fullWidth>
            <Select
              value={selectedState}
              displayEmpty
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedCity("");
              }}
              sx={{ height: 52 }}
            >
              <MenuItem value="" disabled>
                State
              </MenuItem>
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* CITY */}
          <FormControl fullWidth>
            <Select
              value={selectedCity}
              displayEmpty
              disabled={!selectedState}
              onChange={(e) => setSelectedCity(e.target.value)}
              sx={{ height: 52 }}
            >
              <MenuItem value="" disabled>
                City
              </MenuItem>
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* SEARCH */}
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{
              height: 52,
              px: 5,
              backgroundColor: "#2AA7FF",
              textTransform: "none",
            }}
          >
            Search
          </Button>
        </Paper>
      </Box>

      {/* RESULTS */}
      <Box sx={{ background: "#F6FAFF", py: 6 }}>
        <Box maxWidth="1200px" mx="auto" px={2}>
          {searched && (
            <>
              <Typography fontSize="20px" fontWeight={600} mb={1}>
                {hospitals.length} medical centers available in {selectedCity}
              </Typography>

              <Typography color="#6B7280" mb={4}>
                ✔ Book appointments with minimum wait-time & verified doctor
                details
              </Typography>
            </>
          )}

          <Box display="flex" gap={4} alignItems="flex-start">
            {/* LEFT LIST */}
            <Box flex={2}>
              {loading && (
                <Box textAlign="center" mt={6}>
                  <CircularProgress />
                </Box>
              )}

              {!loading && searched && hospitals.length === 0 && (
                <Typography>No medical centers found.</Typography>
              )}

              {!loading &&
                hospitals.map((item, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: 3,
                      mb: 3,
                      borderRadius: "16px",
                    }}
                  >
                    <Box display="flex" gap={3}>
                      {/* ICON */}
                      <Box
                        width={80}
                        height={80}
                        bgcolor="#E7F0FF"
                        borderRadius="50%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <img
                          src={hospitalIcon}
                          alt="hospital"
                          height="40"
                        />
                      </Box>

                      {/* DETAILS */}
                      <Box flex={1}>
                        <Typography
                          fontSize="20px"
                          fontWeight={600}
                          color="#2AA7FF"
                        >
                          {item["Hospital Name"]}
                        </Typography>

                        <Typography fontWeight={500}>
                          {item.City}, {item.State}
                        </Typography>

                        <Typography color="#6B7280" mb={1}>
                          {item["Hospital Type"]}
                        </Typography>

                        <Typography color="#16A34A" fontWeight={600}>
                          FREE{" "}
                          <span
                            style={{
                              color: "#6B7280",
                              textDecoration: "line-through",
                            }}
                          >
                            ₹500
                          </span>{" "}
                          Consultation fee at clinic
                        </Typography>
                      </Box>

                      {/* CTA */}
                      <Box textAlign="right">
                        <Typography color="#16A34A" mb={1}>
                          Available Today
                        </Typography>

                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#2AA7FF",
                            textTransform: "none",
                            borderRadius: "8px",
                          }}
                        >
                          Book FREE Center Visit
                        </Button>
                      </Box>
                    </Box>

                    <Box mt={2}>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          backgroundColor: "#16A34A",
                          minWidth: "50px",
                        }}
                      >
                        👍 0
                      </Button>
                    </Box>
                  </Paper>
                ))}
            </Box>

            {/* RIGHT PROMO */}
            <Box flex={1} display={{ xs: "none", md: "block" }}>
              <Paper sx={{ p: 3, borderRadius: "16px" }}>
                <img
                  src={promoImg}
                  alt="promo"
                  style={{ width: "100%", borderRadius: "12px" }}
                />
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>

      <FAQSection />
      <DownloadApp />
      <Footer />
    </>
  );
}
