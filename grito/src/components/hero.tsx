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

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Hero() {
  const [hero, setHero] = useState<Post[]>([]);

  useEffect(() => {
    const query = '*[_type == "talent"]';

    client.fetch(query).then((data: Post[]) => {
      setHero(data);
    });
  }, []);

  return (
    <>
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
            <div className="w-[796px] container mx-auto h-[529px] bg-zinc-950 rounded-[20px] backdrop-blur-[30px] flex place-content-between py-10 ">
              <div className="mx-auto flex justify-between gap-20">
                <div className="flex flex-col gap-10 place-items-start">
                  <div className="w-[30px] h-[30px]">
                    <div>
                      <Image
                        src={urlFor(talent.countryImgUrl)
                          .width(85)
                          .fit("max")
                          .height(61)
                          .url()}
                        alt={talent.name}
                        width={85}
                        height={61}
                        className="w-full h-full rounded"
                      />
                    </div>
                  </div>
                  <p className="text-[#CBB26A]">
                    Name: <span className="text-[#eaeaf7]">{talent.name}</span>
                  </p>
                  <p className="text-[#CBB26A]">
                    Country:{" "}
                    <span className="text-[#eaeaf7]">{talent.country}</span>
                  </p>
                  <p className="text-[#CBB26A]">
                    Skill Set:{" "}
                    <span className="text-[#eaeaf7]">{talent.skillSet}</span>
                  </p>
                  <p className="text-[#CBB26A]">
                    Level:{" "}
                    <span className="text-[#eaeaf7]">{talent.level}</span>
                  </p>
                  <p className="text-[#CBB26A]">
                    Gender:{" "}
                    <span className="text-[#eaeaf7]">{talent.gender}</span>
                  </p>
                  <p className="text-[#CBB26A]">
                    View Profile:{" "}
                    <Link href={talent.profile}>
                      <span className="text-[#5452db] ">{talent.name}</span>
                    </Link>
                  </p>
                </div>

                <div className="flex flex-col gap-16">
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
                      className="w-full rounded h-full"
                    />
                  </div>
                  <p className="text-[#CBB26A]">{talent.skillName}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <FaArrowAltCircleLeft className="swiper-button-prev" />

      <FaArrowAltCircleRight className="swiper-button-next" />
      <div className="flex justify-center items-center py-10 gap-5"></div>

      <div className="flex justify-center items-center shadow-lg py-10">
        <button className="w-[182px] h-11 px-3 py-3 border-[#080808] shadow-lg rounded-2xl border bg-[#CBB26A] justify-center items-center gap-2 inline-flex">
          <p className="text-black text-lg font-[500px]">Custom Request</p>
        </button>
      </div>
    </>
  );
}
