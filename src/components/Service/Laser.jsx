import React from "react";
import serv from './Services.module.css'

export const Laser = () => {
  const mensaje =
    "Buen día, quiero conocer mas sobre su servicio de Corte Laser";
  const url = `https://api.whatsapp.com/send?phone=573209972620&text=${encodeURIComponent(
    mensaje
  )}`;
  return (
    <div className={serv.btn2}>
      <a href={url} target="_blank">
        Corte Laser
      </a>
    </div>
  );
};
