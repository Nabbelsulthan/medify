import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Swiper modules
import { Pagination, Autoplay } from "swiper/modules";

// Images
import img1 from "../assets/carousel1.png";
import img2 from "../assets/carousel2.png";
import img3 from "../assets/carousel3.png";

const carouselImages = [img1, img2, img3];

export default function OfferCarousel() {
  return (
    <Box
      maxWidth="1200px"
      mx="auto"
      mt={{ xs: 4, md: 6 }}
      px={{ xs: 2, md: 0 }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // ✅ EXPLICIT TARGET
        }}
        style={{ paddingBottom: "50px" }} // ✅ SPACE FOR DOTS
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {carouselImages.map((img, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ borderRadius: "16px", overflow: "hidden" }}>
              <img
                src={img}
                alt={`Offer ${index + 1}`}
                style={{ width: "100%", display: "block" }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Pagination container */}
      <Box className="custom-pagination" />
    </Box>
  );
}
