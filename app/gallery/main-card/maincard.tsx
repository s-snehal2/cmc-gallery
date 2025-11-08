"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { CirclePlay } from "lucide-react";
import { carddata } from "./data";

export type Data = {
  id: number;
  title: string;
  code?: string;
  size?: string;
  area?: string;
  req?: string;
  image: string;
};

export default function MainCard() {
  const imageSections = carddata.filter((d) => !d.code);
  const cardSections = carddata.filter((d) => d.code);

  const topImages = imageSections.slice(0, imageSections.length - 4);
  const bottomImages = imageSections.slice(-4);

  return (
    <div className="w-full max-w-7xl mx-auto p-2">
      {topImages.map((d) => (
        <motion.div
          key={d.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{}}
          className="relative h-[30vh] md:h-[50vh] lg:h-screen"
        >
          <Image src={d.image} alt={d.title} fill priority className="p-1" />
        </motion.div>
      ))}

      <div className="p-2 grid grid-cols-1 gap-2">
        {cardSections.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{}}
          >
            <Card className="relative bg-[#F1E2D2] rounded-none">
              <CardHeader className="relative flex flex-col justify-center items-center p-2 h-[30px] md:h-[35px] lg:h-[45px]">
                <CardTitle className="text-center text-xs md:text-sm font-semibold ">
                  {card.title}
                </CardTitle>

                <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4">
                  <CirclePlay className="w-5 h-5 md:w-8 md:h-8 transition-transform duration-200" />
                </div>

                <div className="text-[10px] md:text-xs text-center font-normal ">
                  {card.code} | {card.size} | {card.area}
                </div>

                <div className="text-[10px] md:text-xs text-center font-normal ">
                  Req: {card.req}
                </div>
              </CardHeader>

              <CardContent className="relative w-full h-[35vh] md:h-[40vh]  lg:h-[80vh] ">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {bottomImages.map((d, index) => (
        <motion.div
          key={d.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{}}
          className="relative h-[30vh] md:h-[50vh] lg:h-screen"
        >
          <Image src={d.image} alt={d.title} fill className="p-1" />
        </motion.div>
      ))}
    </div>
  );
}
