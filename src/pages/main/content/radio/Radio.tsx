import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { getNewReleasesInMorocco } from "../../../../services/albums/AlbumService";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import { FreeMode } from "swiper/modules";
import Tag from "../../../../components/tag/Tag";
import AlbumCard from "../../../../components/album/AlbumCard";
import RadioCard from "../../../../components/radio/RadioCard";

const Radio: React.FC = () => {
  const [albums, setAlbums] = useState<any[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const albums = await getNewReleasesInMorocco();
      if (albums) setAlbums(albums);
    };

    fetchAlbums();
  }, []);

  return (
    <div className="w-full space-y-4">
      <Tag title="Popular Radios" link="/" />
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
          },
          "@0.75": {
            slidesPerView: 3,
          },
          "@1.00": {
            slidesPerView: 4,
          },
          "@1.50": {
            slidesPerView: 5,
          },
        }}
        modules={[FreeMode]} // Include Pagination module
        className="mySwiper"
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id}>
            <RadioCard
              RadioArtist={album.artists[0].name}
              RadioImg={album.images[0].url}
              RadioName={album.name}
            ></RadioCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Radio;
