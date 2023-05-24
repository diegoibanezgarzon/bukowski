import React from "react";
import logo from "../assets/logoBukowskia.png";
import map from "../assets/map.png";
import phone from "../assets/phone-call.png";
import email from "../assets/email.png";

const Footer = () => {
  return (
    <main className=" h-footer px-24 bg-black">
      <div className="grid grid-cols-3 grid-rows-4 gap-6 h-full content-center items-center">
        <div className="">
          <div className=" w-full flex pt-11 justify-start items-center navbar">
            <img src={logo} alt="Bukowski" className=" w-[85px] h-[85px]" />
            <p className=" ml-4 text-[70px] text-white font-title font-extrabold">
              Bukowski
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className=" col-span-2 row-span-2 pr-80">
          <p className=" text-white font-body text-xl">
            Los cócteles son expresiones de estilo y personalidad,
            cuidadosamente elaborados con una combinación de ingredientes
            cuidadosamente seleccionados para despertar los sentidos y ofrecer
            una experiencia única.
          </p>
        </div>
        <div className="justify-self-end  row-span-2">
          <h3 className="text-3xl font-bold text-white mb-5">Información</h3>
          <div className=" w-full flex mb-3 justify-start items-center navbar">
            <img src={map} alt="map" className=""></img>
            <p className=" text-white font-body ml-2">
              Barranquilla - Colombia
            </p>
          </div>
          <div className=" w-full flex mb-3 justify-start items-center navbar">
            <img src={phone} alt="map" className=""></img>
            <p className=" text-white font-body ml-2">0123-456-7890</p>
          </div>
          <div className=" w-full flex justify-start items-center navbar">
            <img src={email} alt="map" className=""></img>
            <p className=" text-white font-body ml-2">demo@gmail.com</p>
          </div>
        </div>
        <div className=" col-span-3 justify-self-center self-end mb-6">
          <p className=" text-white font-body font-light">
            © 2023 - Sebastian Leal, Diego Ibañez, Marlon Pimienta. All rights
            reserved.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
