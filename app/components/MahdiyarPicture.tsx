import React from "react";
import Image from "next/image";
import TooltipCustom from "@/app/components/TooltipCustom";

function MahdiyarPicture() {
  return (
    <div
      className="flex-[3] overflow-hidden cursor-default border border-solid border-neutral-700 rounded-md"
      data-tooltip-id="myPic"
      data-tooltip-place="bottom"
      data-tooltip-content="Me"
    >
      <Image
        src={"/mahdiyarPic.jpeg"}
        alt="Mahdiyar picture"
        id="2"
        className={
          "max-w-[190px] hover:scale-125 transition-transform duration-300 md:max-w-[194px] object-cover object-bottom h-min overflow-hidden"
        }
        width={200}
        height={300}
      />
      <TooltipCustom id="myPic" />
    </div>
  );
}

export default MahdiyarPicture;