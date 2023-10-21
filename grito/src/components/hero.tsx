"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import urlFor from "@/libs/sanityImgUrl";
import { Post } from "@/libs/interface";
import { client } from "@/libs/sanity";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";

export default function Hero() {
  const [hero, setHero] = useState<Post[]>([]);

  useEffect(() => {
    const query = '*[_type == "talent"]';

    client.fetch(query).then((data: Post[]) => {
      setHero(data);
    });
  }, []);

  return (
    <div id="hire">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation]}
        className="swiper_container"
      >
        {hero.map((talent) => (
          <SwiperSlide key={talent._id}>
            <div className="w-[796px] justify-center items-center mx-auto h-[529px] bg-zinc-950 rounded-[20px] flex py-10">
              <div className="flex gap-20">
                <div className="flex flex-col gap-10 justify-self-auto">
                  <div className="w-[85px] h-[61px]">
                    <Image
                      src={urlFor(talent.countryImgUrl)
                        .width(85)
                        .fit("scale")
                        .height(61)
                        .url()}
                      alt={talent.name}
                      width={85}
                      height={61}
                      className="w-full h-full rounded"
                    />
                  </div>
                  <div className="flex gap-10 items-center">
                    <div className="flex flex-col">
                      <p className="text-[#CBB26A] pb-5">Name:</p>
                      <p className="text-[#CBB26A] py-5">Country: </p>
                      <p className="text-[#CBB26A] py-5">Skill Set: </p>
                      <p className="text-[#CBB26A] py-5">Level: </p>
                      <p className="text-[#CBB26A] py-5">Gender: </p>
                      <p className="text-[#CBB26A] py-5">View Profile:</p>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#eaeaf7] pb-5">{talent.name}</span>
                      <span className="text-[#eaeaf7] py-5">
                        {talent.country}
                      </span>
                      <span className="text-[#eaeaf7] py-5">
                        {talent.level}
                      </span>
                      <span className="text-[#eaeaf7] py-5">
                        {talent.skillSet}
                      </span>
                      <span className="text-[#eaeaf7] py-5">
                        {talent.gender}
                      </span>
                      <Link href={talent.profile} className="py-5">
                        <span className="text-[#5452db] ">{talent.name}</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-10">
                  <div>
                    <Image
                      src={urlFor(talent.imgUrl)
                        .width(227)
                        .fit("max")
                        .height(320)
                        .url()}
                      alt={talent.name}
                      width={227}
                      height={320}
                      className="w-full rounded-[20px] h-full"
                    />
                  </div>
                  <p className="text-[#CBB26A] pt-8">{talent.skillName}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center gap-10 pt-10">
        <button
          type="button"
          className="text-white w-[50px] h-[50px] bg-zinc-950 transition duration-150 ease-in-out rounded-full border  font-medium text-sm p-2.5 text-center inline-flex items-center mr-2"
        >
          <svg
            className="w-[48px] h-[48px] text-[#CBB26A] dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
        <button
          type="button"
          className="text-white w-[50px] h-[50px] bg-[#CBB26A] border shadow-md shadow-[#CBB26A] border-[#CBB26A] font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
        >
          <svg
            className="w-[48px] h-[48px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      </div>

      <div className="flex justify-center items-center shadow-lg py-10">
        <button className="w-[182px] h-11 transition duration-150 ease-in-out px-3 py-3 rounded-2xl shadow-md shadow-[#CBB26A]  bg-[#CBB26A] justify-center items-center gap-2 inline-flex">
          <p className="text-black text-lg font-[500px]">Custom Request</p>
        </button>
      </div>
    </div>
  );
}
