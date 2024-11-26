"use client";
import React from "react";
import FadeUpDiv from "@/app/components/motions/FadeUpDiv";
import { ModalCustome } from "@/app/components/ModalCustome";

function Description() {
  return (
    <FadeUpDiv
      className={
        "absolute flex justify-center items-center left-0 right-0 bottom-28 sm:bottom-32"
      }
    >
      <div className="relative flex group justify-center items-center cursor-pointer">
        <Stroke1 />
        <ModalCustome />
        <Stroke2 />
      </div>
    </FadeUpDiv>
  );
}

function Stroke1() {
  return (
    <svg
      className="absolute top-0 left-0 group-hover:top-2 group-hover:left-2 transition-all ease-out duration-300 "
      width="45"
      // height="57"
      viewBox="0 0 64 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1V55.4688H10.7351V10.7073H62.3854V1H1Z"
        stroke="#CEB7FF"
        style={{ filter: "drop-shadow(0px 0px 6px rgba(256,256,256,0.7)" }}
        strokeWidth="2"
      />
    </svg>
  );
}

function Stroke2() {
  return (
    <svg
      className="absolute bottom-0 right-0 transform rotate-180 group-hover:bottom-2 group-hover:right-2 transition-all ease-out duration-300 "
      width="45"
      // height="57"
      viewBox="0 0 64 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1V55.4688H10.7351V10.7073H62.3854V1H1Z"
        stroke="#CEB7FF"
        style={{ filter: "drop-shadow(0px 0px 6px rgba(256,256,256,0.7)" }}
        strokeWidth="2"
      />
    </svg>
  );
}

export default Description;

// "use client";
// import React, { useEffect } from "react";
// import FadeUpDiv from "@/app/components/motions/FadeUpDiv";
// import ClickToOpen from "@/app/components/ClickToOpen";
// import TextDescription from "@/app/components/TextDescription";
// import clsx from "clsx";
//
// function Description() {
//   const [descriptionIsOpen, setDescriptionIsOpen] = React.useState(false);
//
//   useEffect(() => {
//     window.addEventListener("keyup", (e) => {
//       const isEnterPressed = e.code === "Enter";
//       if (isEnterPressed) {
//         setDescriptionIsOpen(true);
//       }
//     });
//   }, [setDescriptionIsOpen]);
//
//   return (
//     <FadeUpDiv
//       className={clsx(
//         "absolute flex justify-center items-center left-0 right-0 ",
//         {
//           "bottom-14 sm:bottom-24 md:bottom-14": descriptionIsOpen,
//           "bottom-28 sm:bottom-32": !descriptionIsOpen,
//         },
//       )}
//     >
//       <div className="relative flex group justify-center items-center ">
//         <Stroke1 />
//         {!descriptionIsOpen ? (
//           <ClickToOpen
//             setDescriptionIsOpen={setDescriptionIsOpen}
//             descriptionIsOpen={descriptionIsOpen}
//           />
//         ) : (
//           <TextDescription
//             setDescriptionIsOpen={setDescriptionIsOpen}
//             descriptionIsOpen={descriptionIsOpen}
//           />
//         )}
//         <Stroke2 />
//       </div>
//     </FadeUpDiv>
//   );
// }
//
// function Stroke1() {
//   return (
//     <svg
//       className="absolute top-0 left-0 group-hover:top-2 group-hover:left-2 transition-all ease-out duration-300 "
//       width="45"
//       // height="57"
//       viewBox="0 0 64 57"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M1 1V55.4688H10.7351V10.7073H62.3854V1H1Z"
//         stroke="#CEB7FF"
//         style={{ filter: "drop-shadow(0px 0px 6px rgba(256,256,256,0.7)" }}
//         strokeWidth="2"
//       />
//     </svg>
//   );
// }
//
// function Stroke2() {
//   return (
//     <svg
//       className="absolute bottom-0 right-0 transform rotate-180 group-hover:bottom-2 group-hover:right-2 transition-all ease-out duration-300 "
//       width="45"
//       // height="57"
//       viewBox="0 0 64 57"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M1 1V55.4688H10.7351V10.7073H62.3854V1H1Z"
//         stroke="#CEB7FF"
//         style={{ filter: "drop-shadow(0px 0px 6px rgba(256,256,256,0.7)" }}
//         strokeWidth="2"
//       />
//     </svg>
//   );
// }
//
// export default Description;
