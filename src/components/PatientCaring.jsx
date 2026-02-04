import { Box, Typography } from "@mui/material";
import consultationImg from "../assets/Consultation.png";
import frameIcon from "../assets/Frame.png";




export default function PatientCaring() {
    return (
        <Box
            sx={{
                background:
                    "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
                py: { xs: 6, md: 10 },
            }}
        >
            <Box
                maxWidth="1200px"
                mx="auto"
                px={2}
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                gap={6}
            >
                {/*  Consultation Image */}
                <Box width={{ xs: "100%", md: "50%" }} textAlign="center">
                    <img
                        src={consultationImg}
                        alt="Free Consultation"
                        style={{
                            width: "100%",
                            maxWidth: "420px",
                            borderRadius: "16px",
                            boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
                        }}
                    />
                </Box>

                {/* RIGHT: Content */}
                <Box width={{ xs: "100%", md: "50%" }}>
                    <Typography
                        fontSize="14px"
                        fontWeight={600}
                        color="#2AA7FF"
                        mb={1}
                    >
                        HELPING PATIENTS FROM AROUND THE GLOBE!!

                    </Typography>

                    <Typography
                        fontSize={{ xs: "32px", md: "40px" }}
                        fontWeight={700}
                        color="#1B3C74"
                        mb={3}
                    >
                        Patient <span style={{ color: "#2AA7FF" }}>Caring</span>

                    </Typography>

                    <Typography
                        color="#5A6B8C"
                        lineHeight={1.8}
                        mb={4}
                    >

                        Our goal is to deliver quality of care in a courteous, respectful,
                        and compassionate manner. We hope you will allow us to care for you
                        and strive to be the first and best choice for healthcare.

                    </Typography>

                    {/* Bullet Points */}
                    <Box display="flex" flexDirection="column" gap={2}>
                        {[
                            "Stay Updated About Your Health",
                            "Check Your Results Online",
                            "Manage Your Appointments",
                        ].map((text) => (
                            <Box key={text} display="flex" alignItems="center" gap={2}>
                                <Box
                                    component="img"
                                    src={frameIcon}
                                    alt="check"
                                    sx={{
                                        width: "28px",
                                        height: "28px",
                                    }}
                                />
                                <Typography color="#1B3C74" fontWeight={500}>
                                    {text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
