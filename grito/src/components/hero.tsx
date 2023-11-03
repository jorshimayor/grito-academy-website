"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import urlFor from "@/libs/sanityImgUrl";
import { Post } from "@/libs/interface";
import { client } from "@/libs/sanity";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/styles.css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";

import {
  Button,
  Label,
  Modal,
  Textarea,
  TextInput,
  Radio,
  Select,
} from "flowbite-react";

export default function Hero() {
  const [hero, setHero] = useState<Post[]>([]);
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  useEffect(() => {
    const query = '*[_type == "talent"]';

    client.fetch(query).then((data: Post[]) => {
      setHero(data);
    });
  }, []);

  return (
    <div id="hire md:mt-5">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        {hero.map((talent) => (
          <SwiperSlide key={talent._id}>
            <div className="md:w-[700px] md:justify-center md:items-center md:mx-auto md:h-[500px] bg-zinc-950 rounded-[20px] md:flex py-10">
              <div className="md:flex md:gap-20">
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
                      <p className="text-[#CBB26A] pb-5">Name: </p>
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
                        <span className="text-[#5452db]">{talent.name}</span>
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

      <div className="slider-controler flex justify-center items-center gap-10 pt-10">
        <div className="swiper-button-prev slider-arrow prev-button hover:scale-105">
          <button
            type="button"
            className="text-white w-[50px] h-[50px] bg-black1 rounded-full border font-medium text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg
              className="w-[48px] h-[48px] text-gold"
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
        </div>
        <div className="swiper-button-next slider-arrow next-button hover:scale-105">
          <button
            type="button"
            className="text-white w-[50px] h-[50px] bg-gold border shadow-md shadow-gold border-gold font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg
              className="w-[48px] h-[48px] text-black1"
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
      </div>

      <div className="justify-center items-center flex my-10 hover:scale-105">
        <Button
          className="shadow-md text-black rounded-[20px] shadow-gold bg-gold"
          onClick={() => props.setOpenModal("form-elements")}
        >
          Custom Request
        </Button>
      </div>
      <Modal
        show={props.openModal === "form-elements"}
        size="xl"
        popup
        onClose={() => props.setOpenModal(undefined)}
        className="mx-auto w-[650px] h-[640px] bg-black1 rounded-[20px] border border-gold"
      >
        <Modal.Header className="text-white hover:text-gold bg-black1" />
        <Modal.Body className="bg-black1  w-[630px] h-[600px] mx-auto rounded-[5px] text-gold center">
          <div className="flex items-center justify-center gap-5">
            <div className="flex flex-col space-y-10">
              <p className="text-[#CBB26A] pb-0">Name of Talent:</p>
              <p className="text-[#CBB26A] py-4">Country: </p>
              <p className="text-[#CBB26A] pt-3">Skill Set: </p>
              <p className="text-[#CBB26A] pt-1">Level: </p>
              <p className="text-[#CBB26A] pb-2">Gender: </p>
              <p className="text-[#CBB26A] pt-1">Any other information: </p>
            </div>
            <div className="space-y-10 ">
              <div className="pt-2">
                <TextInput
                  id="name"
                  sizing="md"
                  placeholder="Full Name"
                  type="text"
                />
              </div>
              <div className="w-[168px] h-[40px]" id="select">
                <Select id="countries">
                  <option value="Algeria">Algeria</option>
                  <option value="Angola">Angola</option>
                  <option value="Benin">Benin</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cabo Verde">Cabo Verde</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Central African Republic (CAR)">
                    Central African Republic (CAR){" "}
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">
                    Democratic Republic of the Congo
                  </option>
                  <option value="Republic of the Cote d’Ivoire">
                    Republic of the Cote d’Ivoire
                  </option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Eswatini">Eswatini</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Mali">Mali</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Sudan ">South Sudan </option>
                  <option value="Sudan">Sudan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Togo">Togo</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </Select>
              </div>
              <div className="max-w-md" id="textarea">
                <Textarea id="comment" placeholder="Skills desired" rows={2} />
              </div>
              <fieldset className="flex max-w-md gap-4" id="radio">
                <div className="flex items-center gap-2">
                  <Radio
                    defaultChecked
                    id="beginner"
                    name="skills"
                    value="beginner"
                  />
                  <Label htmlFor="Beginner" className="text-white pt-1">
                    Beginner
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="intermediate" name="skills" value="intermediate" />
                  <Label htmlFor="intermediate" className="text-white pt-1">
                    Intermediate
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="professional" name="skills" value="professional" />
                  <Label htmlFor="professional" className="text-white pt-1">
                    Professional
                  </Label>
                </div>
              </fieldset>
              <fieldset className="flex max-w-md gap-4" id="radio">
                <div className="flex items-center gap-2">
                  <Radio defaultChecked id="male" name="gender" value="male" />
                  <Label htmlFor="male" className="text-white pt-1">
                    Male
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="female" name="gender" value="female" />
                  <Label htmlFor="female" className="text-white pt-1">
                    Female
                  </Label>
                </div>
              </fieldset>
              <div className="max-w-md" id="textarea">
                <Textarea
                  className=""
                  id="comment"
                  placeholder="Additional information..."
                  rows={2}
                />
              </div>
            </div>
          </div>
          <div className="justify-center items-center flex my-5 hover:scale-105">
            <Button type="submit" className="rounded-[20px] border border-gold">
              Submit
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
