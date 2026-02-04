import {
  Box,
  Typography,
  Button,
  Paper,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useEffect, useState } from "react";
import heroImg from "../assets/hero_image.png";
import { useNavigate } from "react-router-dom";


const categories = [
  { label: "Doctors", icon: "Doctors.png" },
  { label: "Labs", icon: "Labs.png" },
  { label: "Hospitals", icon: "Hospital.png" },
  { label: "Medical Store", icon: "Medical store.png" },
  { label: "Ambulance", icon: "Ambulance.png" },
];

export default function Hero() {
  const navigate = useNavigate();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [loadingCities, setLoadingCities] = useState(false);

  /* ------------------ FETCH STATES ------------------ */
  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.error(err));
  }, []);

  /* ------------------ FETCH CITIES ------------------ */
  useEffect(() => {
    if (!selectedState) return;

    setLoadingCities(true);
    setSelectedCity("");
    setCities([]);

    fetch(
      `https://meddata-backend.onrender.com/cities/${selectedState}`
    )
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => console.error(err))
      .finally(() => setLoadingCities(false));
  }, [selectedState]);

  /*  SEARCH HANDLER  */
  const handleSearch = async () => {
    if (!selectedState || !selectedCity) return;

    try {
      const res = await fetch(
        `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
      );
      const data = await res.json();

      console.log("Hospital Results:", data);


      navigate("/search", {
        state: {
          state: selectedState,
          city: selectedCity,
        },
      });


    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", pb: 8 }}>
      {/* HERO */}
      <Box
        maxWidth="1200px"
        mx="auto"
        px={2}
        pt={6}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
      >
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

        <Box
          sx={{
            position: "relative",
            top: { xs: 0, md: 40 },
            mt: { xs: 4, md: 0 },
          }}
        >
          <img src={heroImg} alt="Doctors" width="480" />
        </Box>
      </Box>

      {/* SEARCH CARD */}
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
        <Box display="flex" gap={2} flexDirection={{ xs: "column", md: "row" }}>
          {/* STATE */}
          <div id="state" style={{ width: "100%" }}>
            <FormControl fullWidth>
              <Select
                value={selectedState}
                displayEmpty
                onChange={(e) => setSelectedState(e.target.value)}
                sx={{ height: 48, backgroundColor: "#F1F5FF" }}
              >
                <MenuItem value="" disabled>
                  Select State
                </MenuItem>
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>


          {/* CITY */}
          <div id="city" style={{ width: "100%" }}>
            <FormControl fullWidth>
              <Select
                value={selectedCity}
                displayEmpty
                // disabled={!selectedState || loadingCities}
                onChange={(e) => setSelectedCity(e.target.value)}
                sx={{ height: 48, backgroundColor: "#F1F5FF" }}
              >
                <MenuItem value="" disabled>
                  Select City
                </MenuItem>
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>


          {/* SEARCH BUTTON */}
          <Button
            id="searchBtn"
            type="submit"
            variant="contained"
            // disabled={!selectedState || !selectedCity}
            onClick={handleSearch}
            sx={{ px: 4 }}
          >
            Search

          </Button>
        </Box>

        {/* CATEGORIES */}
        <Typography mt={4} mb={3} textAlign="center" color="#1B3C74">

          You may be looking for

        </Typography>

        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          {categories.map((cat) => (
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
