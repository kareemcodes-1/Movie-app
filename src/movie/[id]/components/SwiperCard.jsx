import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const SwiperCard = ({images}) => {

    const [swiperRef, setSwiperRef] = useState(null);

  return (
    <Swiper
        modules={[Virtual, Navigation]}
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={30}
        navigation={false}
        virtual
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
              {image.file_path !== null ? <img src={`https://media.themoviedb.org/t/p/w227_and_h127_bestv2${image.file_path}`} alt={''} className='w-full h-full object-cover rounded-[.5rem]'/> :  <div className="skeleton h-[7.8rem] w-full"></div>}
          </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default SwiperCard