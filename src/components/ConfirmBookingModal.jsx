import {
    Dialog,
    DialogContent,
    Typography,
    TextField,
    Button,
    Box,
} from "@mui/material";
import { useState } from "react";

export default function ConfirmBookingModal({
    open,
    onClose,
    bookingDetails,
    onConfirm,
}) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleConfirm = () => {
        if (!email) {
            setError("Email is required");
            return;
        }


        const isValid = email.includes("@") && email.includes(".");

        if (!isValid) {
            setError("Please enter a valid email address");
            return;
        }

        setError("");
        onConfirm(email);
        setEmail("");
    };

    const handleClose = () => {
        setEmail("");
        setError("");
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>

            <DialogContent sx={{ p: 4 }}>

                <Typography fontSize="32px" fontWeight={700} mb={1}>

                    Confirm booking

                </Typography>

                <Typography mb={3}>

                    Please enter your email to confirm booking for{" "}

                    <strong>

                        {bookingDetails.time} on {bookingDetails.date}

                    </strong>
                </Typography>

                <TextField
                    fullWidth
                    type="email"
                    placeholder="Enter your email *"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                    }}
                    error={Boolean(error)}
                    helperText={error}
                    sx={{ mb: 3 }}
                />

                <Box display="flex" gap={2}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#2AA7FF",
                            textTransform: "none",
                            px: 4,
                        }}
                        onClick={handleConfirm}
                    >
                        Confirm
                    </Button>

                    <Button
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            px: 4,
                        }}
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
