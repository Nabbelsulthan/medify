import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import logo from "../assets/Icon.png";

import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";



const navLinks = [
  "Find Doctors",
  "Hospitals",
  "Medicines",
  "Surgeries",
  "Software for Provider",
  "Facilities",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: "#FFFFFF" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>

          {/* Logo */}
          {/* <Box display="flex" alignItems="center" gap={1}>
            <img src={logo} alt="Medify Logo" height="32" />
          </Box> */}


          <Link to="/" style={{ textDecoration: "none" }}>
            <Box display="flex" alignItems="center" gap={1}>
              <img src={logo} alt="Medify" />
              <Typography fontWeight={700} color="#2AA7FF">
              </Typography>
            </Box>
          </Link>


          {/* Desktop Nav */}
          <Box
            display={{ xs: "none", md: "flex" }}
            alignItems="center"
            gap={3}
          >
            {navLinks.map(link => (
              <Button
                key={link}
                sx={{ color: "#1B3C74", textTransform: "none" }}
              >
                {link}
              </Button>
            ))}

            <Button
              variant="contained"
              sx={{ borderRadius: "20px", textTransform: "none" }}
              onClick={() => navigate("/my-bookings")}
            >

              My Bookings
              
            </Button>

          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box width="250px" p={2}>
          <List>
            {navLinks.map(link => (
              <ListItem button key={link}>
                <ListItemText primary={link} />
              </ListItem>
            ))}

            <ListItem>
              <Button
                fullWidth
                variant="contained"
                sx={{ textTransform: "none" }}
              >

                My Bookings

              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
