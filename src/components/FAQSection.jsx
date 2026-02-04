import { Box, Typography } from "@mui/material";
import faqImage from "../assets/faqs-banner.jpg";
import plusIcon from "../assets/plus.png";




const faqs = [
    "Why choose our medical for your family?",
    "Why we are different from others?",
    "Trusted & experience senior care & love",
    "How to get appointment for emergency cases?",
];

export default function FAQSection() {

    return (
        <Box py={{ xs: 6, md: 10 }} bgcolor="#FFFFFF">

            <Box maxWidth="1200px" mx="auto" px={{ xs: 2, md: 4 }}>

                {/* Heading */}
                <Typography
                    textAlign="center"
                    fontSize="14px"
                    fontWeight={600}
                    color="#2AA7FF"
                    mb={1}
                >

                    Get Your Answer

                </Typography>

                <Typography
                    textAlign="center"
                    fontSize={{ xs: "28px", md: "40px" }}
                    fontWeight={700}
                    color="#1B3C74"
                    mb={6}
                >

                    Frequently Asked Questions

                </Typography>

                {/* Content */}
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    alignItems="center"
                    gap={6}
                >
                    {/* LEFT IMAGE */}

                    <Box
                        position="relative"
                        width={{ xs: "100%", md: "50%" }}
                        display="flex"
                        justifyContent="center"
                    >

                        <Box
                            component="img"
                            src={faqImage}
                            alt="Happy Patients"
                            sx={{
                                width: "100%",
                                maxWidth: "520px",
                                borderRadius: "16px",
                            }}

                        />


                    </Box>

                    {/* RIGHT FAQ LIST */}
                    <Box width={{ xs: "100%", md: "50%" }}>
                        {faqs.map((question, index) => (
                            <Box
                                key={index}
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                py={2}
                            >

                                <Typography
                                    fontSize="16px"
                                    fontWeight={600}
                                    color="#1B3C74"
                                >
                                    {question}
                                </Typography>

                                <Box
                                    component="img"
                                    src={plusIcon}
                                    alt="expand"
                                    sx={{
                                        width: "14px",
                                        height: "14px",
                                        cursor: "pointer",
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
