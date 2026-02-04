

import {
    Box,
    Button,
    Paper,
    Select,
    MenuItem,
    FormControl,
    CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

import TopNoticeBar from "../components/TopNoticeBar";
import Navbar from "../components/Navbar";
import FAQSection from "../components/FAQSection";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";

import promoImg from "../assets/cta.png";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import ConfirmBookingModal from "../components/ConfirmBookingModal";
import HospitalResultCard from "../components/HospitalCard";

export default function Search() {
    const location = useLocation();

    /*  STATE  */
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const [openCalendarIndex, setOpenCalendarIndex] = useState(null);

    const [bookingModalOpen, setBookingModalOpen] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);

    const [selectedBooking, setSelectedBooking] = useState({
        hospital: null,
        date: "",
        time: "",
    });

    const navigate = useNavigate();


    /*  CONFIRM BOOKING  */
    // const handleConfirmBooking = (email) => {
    //     const existingBookings =
    //         JSON.parse(localStorage.getItem("bookings")) || [];

    //     const newBooking = {
    //         hospitalName: selectedBooking.hospital["Hospital Name"],
    //         city: selectedBooking.hospital.City,
    //         state: selectedBooking.hospital.State,
    //         date: selectedBooking.date,
    //         time: selectedBooking.time,
    //         email,
    //     };

    //     localStorage.setItem(
    //         "bookings",
    //         JSON.stringify([...existingBookings, newBooking])
    //     );

    //     // localStorage.setItem("bookings", JSON.stringify([newBooking]));

    //     setBookingModalOpen(false);
    //     setToastOpen(true);
    // };


    const handleConfirmBooking = (email) => {
    const existingBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
        hospitalName: selectedBooking.hospital["Hospital Name"],
        city: selectedBooking.hospital.City,
        state: selectedBooking.hospital.State,
        date: selectedBooking.date,
        time: selectedBooking.time,
        email,
    };

    localStorage.setItem(
        "bookings",
        JSON.stringify([...existingBookings, newBooking])
    );

    setBookingModalOpen(false);
    setToastOpen(true);

  
    navigate("/my-bookings");
};





    /*  FETCH STATES  */
    useEffect(() => {
        fetch("https://meddata-backend.onrender.com/states")
            .then((res) => res.json())
            .then((data) => setStates(data));
    }, []);

    /*  FETCH CITIES  */
    useEffect(() => {
        if (!selectedState) return;

        fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
            .then((res) => res.json())
            .then((data) => setCities(data));
    }, [selectedState]);

    /*  FETCH HOSPITALS  */
    const fetchHospitals = async (state, city) => {
        setLoading(true);
        setSearched(true);

        try {
            const res = await fetch(
                `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
            );
            const data = await res.json();
            setHospitals(data || []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    /*  AUTO SEARCH FROM HERO  */
    useEffect(() => {
        if (location.state?.state && location.state?.city) {
            setSelectedState(location.state.state);
            setSelectedCity(location.state.city);
            fetchHospitals(location.state.state, location.state.city);
        }
    }, [location.state]);

    /*  SEARCH BUTTON  */
    const handleSearch = () => {
        if (!selectedState || !selectedCity) return;
        fetchHospitals(selectedState, selectedCity);
    };

    return (
        <>
            <TopNoticeBar />
            <Navbar />

            {/*  SEARCH HEADER  */}
            <Box
                sx={{
                    background: "linear-gradient(180deg, #2AA7FF 0%, #0C8CE9 100%)",
                    py: 6,
                    borderBottomLeftRadius: "40px",
                    borderBottomRightRadius: "40px",
                }}
            >
                <Paper
                    sx={{
                        maxWidth: "1100px",
                        mx: "auto",
                        p: 3,
                        borderRadius: "16px",
                        display: "flex",
                        gap: 2,
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    {/* STATE */}
                    <div id="state" style={{ width: "100%" }}>
                        <FormControl fullWidth>
                            <Select
                                value={selectedState}
                                displayEmpty
                                onChange={(e) => {
                                    setSelectedState(e.target.value);
                                    setSelectedCity("");
                                }}
                            >
                                <MenuItem value="" disabled>State</MenuItem>
                                {states.map((s) => (
                                    <MenuItem key={s} value={s}>{s}</MenuItem>
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
                                disabled={!selectedState}
                                onChange={(e) => setSelectedCity(e.target.value)}
                            >
                                <MenuItem value="" disabled>City</MenuItem>
                                {cities.map((c) => (
                                    <MenuItem key={c} value={c}>{c}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    {/* SEARCH */}
                    <Button
                        id="searchBtn"
                        type="submit"
                        variant="contained"
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </Paper>
            </Box>

            {/*  RESULTS  */}
            <Box sx={{ background: "#F6FAFF", py: 6 }}>
                <Box maxWidth="1200px" mx="auto" px={2}>
                    {searched && (
                        <h1>
                            {hospitals.length} medical centers available in{" "}
                            {selectedCity.toLowerCase()}
                        </h1>
                    )}

                    <Box display="flex" gap={4}>
                        {/* LEFT */}
                        <Box flex={2}>
                            {loading && <CircularProgress />}

                            {!loading &&
                                hospitals.map((item, index) => (
                                    <HospitalResultCard
                                        key={index}
                                        item={item}
                                        index={index}
                                        openCalendarIndex={openCalendarIndex}
                                        setOpenCalendarIndex={setOpenCalendarIndex}
                                        onSlotClick={(booking) => {
                                            setSelectedBooking(booking);
                                            setBookingModalOpen(true);
                                        }}
                                    />
                                ))}
                        </Box>

                        {/* RIGHT PROMO */}
                        <Box flex={1} display={{ xs: "none", md: "block" }}>
                            <Paper sx={{ p: 3 }}>
                                <img
                                    src={promoImg}
                                    alt="promo"
                                    style={{ width: "100%" }}
                                />
                            </Paper>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* CONFIRM BOOKING MODAL */}
            <ConfirmBookingModal
                open={bookingModalOpen}
                onClose={() => setBookingModalOpen(false)}
                bookingDetails={selectedBooking}
                onConfirm={handleConfirmBooking}
            />

            {/* SUCCESS TOAST */}
            <Snackbar
                open={toastOpen}
                autoHideDuration={3000}
                onClose={() => setToastOpen(false)}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    onClose={() => setToastOpen(false)}
                >
                    Booking successful!
                </Alert>
            </Snackbar>

            <FAQSection />
            <DownloadApp />
            <Footer />
        </>
    );
}
