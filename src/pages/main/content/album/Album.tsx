import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import { FreeMode } from "swiper/modules";
import Tag from "../../../../components/tag/Tag";
import AlbumCard from "../../../../components/album/AlbumCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAlbums } from "../../../../api/Albums";
import { AlbumContext } from "../../../../contexts/albumContext";

const Album = () => {
  const {
    data: albumsDTO,
    refetch,
    isLoading,
  } = useQuery({
    queryFn: () => fetchAlbums(),
    queryKey: ["albumsDTO"],
  });

  useEffect(() => {
    refetch();
  }, [refetch()]);

  if (isLoading) {
    return <div>Is Loading ...</div>;
  }
  return (
    <div className="w-full space-y-4">
      <Tag title="Popular Albums" link="/" />
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
        {albumsDTO?.map((album) => {
          return (
            <SwiperSlide key={album.id}>
              <AlbumContext.Provider value={album}>
                <AlbumCard />
              </AlbumContext.Provider>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Album;
