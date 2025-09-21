"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ServiceCard from "./ServicesCard";
import { Service } from "@/app/types/Service";

interface Props {
  servicesData: Service[];
}

export default function ServicesSwiper({ servicesData }: Props) {
  return (
    <Swiper
      aria-label="Список услуг автомойки"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView="auto"
      centeredSlides={true}
      navigation={true}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        993: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1441: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {servicesData.map((service) => (
        <SwiperSlide key={service.id}>
          <ServiceCard service={service} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
