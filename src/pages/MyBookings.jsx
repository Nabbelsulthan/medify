import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { useEffect, useState } from "react";

import TopNoticeBar from "../components/TopNoticeBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import promoImg from "../assets/cta.png";
import hospitalIcon from "../assets/Hospital.png";
import DownloadApp from "../components/DownloadApp";

export default function MyBookings() {
    const [bookings, setBookings] = useState(() => {
        const stored = localStorage.getItem("bookings");
        return stored ? JSON.parse(stored) : [];
    });

    const [searchText, setSearchText] = useState("");

    /*  LOAD BOOKINGS  */
    useEffect(() => {
        const storedBookings =
            JSON.parse(localStorage.getItem("bookings")) || [];
        setBookings(storedBookings);
    }, []);

    /*  FILTER BOOKINGS  */
    const filteredBookings = bookings.filter((b) =>
        (b?.hospitalName || "")
            .toLowerCase()
            .includes((searchText || "").toLowerCase())
    );


    return (
        <>
            <TopNoticeBar />
            <Navbar />

            {/*  HEADER  */}
            <Box
                sx={{
                    background: "linear-gradient(180deg, #2AA7FF 0%, #0C8CE9 100%)",
                    py: 6,
                    borderBottomLeftRadius: "40px",
                    borderBottomRightRadius: "40px",
                }}
            >
                <Box maxWidth="1200px" mx="auto" px={2}>
                    {/* REQUIRED h1 */}
                    <h1 style={{ color: "#fff", marginBottom: 24 }}>
                        My Bookings
                    </h1>

                    {/* SEARCH */}
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            gap: 2,
                            borderRadius: "12px",
                            maxWidth: "700px",
                        }}
                    >
                        <TextField
                            fullWidth
                            placeholder="Search By Hospital"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <Button variant="contained">
                            Search
                        </Button>
                    </Paper>
                </Box>
            </Box>

            {/*  BOOKINGS LIST  */}
            <Box sx={{ background: "#F6FAFF", py: 6 }}>
                <Box maxWidth="1200px" mx="auto" px={2}>
                    <Box display="flex" gap={4}>
                        {/* LEFT */}
                        <Box flex={2}>
                            {filteredBookings.length === 0 && (
                                <Typography>No bookings found.</Typography>
                            )}

                            {filteredBookings.map((booking, index) => (
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
                                            {/* REQUIRED h3 */}
                                            <h3 style={{ color: "#2AA7FF" }}>
                                                {(booking.hospitalName || "").toLowerCase()}
                                            </h3>


                                            <Typography fontWeight={500}>
                                                {booking.city}, {booking.state}
                                            </Typography>

                                            <Typography color="#6B7280">
                                                Acute Care Hospitals
                                            </Typography>

                                            <Typography color="#16A34A" fontWeight={600}>
                                                FREE{" "}
                                                <span
                                                    style={{
                                                        textDecoration: "line-through",
                                                        color: "#6B7280",
                                                    }}
                                                >
                                                    ₹500
                                                </span>{" "}
                                                Consultation fee at clinic
                                            </Typography>
                                        </Box>

                                        {/* DATE + TIME */}
                                        <Box textAlign="right">
                                            <p
                                                style={{
                                                    border: "1px solid #90B4FF",
                                                    color: "#2AA7FF",
                                                    padding: "4px 12px",
                                                    borderRadius: "6px",
                                                    marginBottom: "8px",
                                                    display: "inline-block",
                                                }}
                                            >
                                                {booking.time}
                                            </p>

                                            <p
                                                style={{
                                                    border: "1px solid #16A34A",
                                                    color: "#16A34A",
                                                    padding: "4px 12px",
                                                    borderRadius: "6px",
                                                    display: "inline-block",
                                                }}
                                            >
                                                {booking.date}
                                            </p>
                                        </Box>
                                    </Box>

                                    {/* LIKE */}
                                    <Box mt={2}>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{
                                                backgroundColor: "#16A34A",
                                                minWidth: "50px",
                                            }}
                                        >
                                            👍 3
                                        </Button>
                                    </Box>
                                </Paper>
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
            <DownloadApp />
            <Footer />
        </>
    );
}
