import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import ItemSocial from "@/app/components/ItemSocial";

function Socials() {
  return (
    <div className="hidden md:flex flex-col items-center justify-center gap-y-5 h-full absolute top-0 bottom-0 left-7 lg:left-11 z-30">
      <ItemSocial name="Github" i={1} href="https://github.com/MahdiyarRez">
        <FaGithub
          role="link"
          className="text-Pink hover:text-white duration-300 transition-colors ease-in-out cursor-pointer size-7 lg:size-10"
        />
      </ItemSocial>
      <ItemSocial
        name="Linkedin"
        i={2}
        href="https://www.linkedin.com/in/mahdiyar-rezaei"
      >
        <FaLinkedin
          role="link"
          className="text-Pink hover:text-white duration-300 transition-colors ease-in-out cursor-pointer size-7 lg:size-10"
        />
      </ItemSocial>
      <ItemSocial name="Telegram" i={3} href="https://telegram.me/mahdiyarRez">
        <FaTelegram
          role="link"
          className="text-Pink hover:text-white duration-300 transition-colors ease-in-out cursor-pointer size-7 lg:size-10"
        />
      </ItemSocial>
    </div>
  );
}

export default Socials;
