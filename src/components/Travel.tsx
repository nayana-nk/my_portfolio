import React from "react";
import "./travelstories.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import bandaje from "./public/travel/bandaje.JPG";
import kuari_pic from "./public/travel/kuaripass.jpg";
import netravathi from "./public/travel/netravathi.jpg";
import himlaya from "./public/travel/himalaya.jpg";

import himalaya1 from "./public/travel/himalaya1.jpg";
import KP from "./public/travel/KP.jpg";

const travelImages = [

  { src: kuari_pic, alt: "Kuari Pass Trek" },
  { src: netravathi, alt: "Mountain View" },
  { src: KP, alt: "Kumara parvatha" },
    { src: bandaje, alt: "Western Ghats Trek" },
  { src: himlaya, alt: "Himalaya" },
  { src: himalaya1, alt: "Himalaya" },
];

function TravelStories() {
  return (
    <section className="travel-stories">
      <h2>My Travel Stories</h2>

      <div className="travel-text">
        <p>
          I'm a passionate solo traveler who loves exploring new places and
          immersing myself in the beauty of nature.
        </p>
        <p className="treks">Trekking is my true calling.</p>
        <p>
          I've explored almost the entire stretch of the Western Ghats and even
          completed the Himalayan Kuari Pass trek.
        </p>
        <p>Being in the mountains brings me peace and recharges my spirit.</p>
      </div>

      <div className="travel-gallery">
        <h3>Here are some of my favorite travel moments:</h3>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {travelImages.map((img, idx) => (
            <SwiperSlide key={idx} className="images-container">
              <div className="px-4">
              <img src={img.src} alt={img.alt} className="gallery-image " />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TravelStories;
