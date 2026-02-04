import {
    Box,
    Button,
    Paper,
    Typography,
    Divider,
    IconButton,
} from "@mui/material";
import { useState } from "react";
import hospitalIcon from "../assets/Hospital.png";

export default function HospitalCard({
    item,
    index,
    openCalendarIndex,
    setOpenCalendarIndex,
    onSlotClick,
}) {
    const [startIndex, setStartIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const dates = Array.from({ length: 10 }).map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i);
        return d;
    });

    const visibleDates = dates.slice(startIndex, startIndex + 3);

    const slots = {
        Morning: ["11:30 AM"],
        Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
        Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
    };

    const formatDate = (date) =>
        date.toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
        });

    return (
        <Paper sx={{ p: 3, mb: 3, borderRadius: "16px" }}>
            <Box display="flex" gap={3}>
                <Box
                    width={80}
                    height={80}
                    bgcolor="#E7F0FF"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <img src={hospitalIcon} height="40" alt="hospital" />
                </Box>

                <Box flex={1}>
                    <h3 style={{ color: "#2AA7FF" }}>
                        {item["Hospital Name"]}
                    </h3>
                    <Typography>{item.City}, {item.State}</Typography>
                    <Typography>{item["Hospital Type"]}</Typography>
                    <Typography color="#16A34A">
                        FREE <span style={{ textDecoration: "line-through" }}>₹500</span>
                    </Typography>
                </Box>

                <Box textAlign="right">
                    <p>Today</p>
                    <Button
                        variant="contained"
                        onClick={() =>
                            setOpenCalendarIndex(
                                openCalendarIndex === index ? null : index
                            )
                        }
                    >
                        {openCalendarIndex === index
                            ? "Hide Booking Calendar"
                            : "Book FREE Center Visit"}
                    </Button>
                </Box>
            </Box>

            {/* BOOKING CALENDAR — UNCHANGED */}
            {openCalendarIndex === index && (
                <Box mt={4}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <IconButton
                            onClick={() => startIndex > 0 && setStartIndex(startIndex - 1)}
                            sx={{ border: "1px solid #E5E7EB", width: 40, height: 40 }}
                        >
                            ‹
                        </IconButton>

                        {visibleDates.map((date, i) => (
                            <Box
                                key={i}
                                textAlign="center"
                                flex={1}
                                sx={{ cursor: "pointer" }}
                                onClick={() => setSelectedIndex(i)}
                            >
                                <Typography fontWeight={selectedIndex === i ? 700 : 500}>
                                    {formatDate(date)}
                                </Typography>
                                <Typography color="#16A34A">
                                    10 Slots Available
                                </Typography>
                                {selectedIndex === i && (
                                    <Box mt={1} height="3px" bgcolor="#2AA7FF" />
                                )}
                            </Box>
                        ))}

                        <IconButton
                            onClick={() =>
                                startIndex + 3 < dates.length &&
                                setStartIndex(startIndex + 1)
                            }
                            sx={{ border: "1px solid #E5E7EB", width: 40, height: 40 }}
                        >
                            ›
                        </IconButton>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    {Object.entries(slots).map(([period, times]) => (
                        <Box key={period} mb={3}>
                            <p>{period}</p>

                            <Box display="flex" gap={2} flexWrap="wrap">
                                {times.map((time) => (
                                    <Button
                                        key={time}
                                        variant="outlined"
                                        sx={{
                                            borderRadius: "8px",
                                            px: 2.5,
                                            color: "#2AA7FF",
                                            borderColor: "#90B4FF",
                                        }}
                                        onClick={() =>
                                            onSlotClick({
                                                hospital: item,
                                                date: formatDate(visibleDates[selectedIndex]),
                                                time,
                                            })
                                        }
                                    >
                                        {time}
                                    </Button>
                                ))}
                            </Box>

                            <Divider sx={{ my: 3 }} />
                        </Box>
                    ))}
                </Box>
            )}
        </Paper>
    );
}
