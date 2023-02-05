import React from "react";
import serv from './Services.module.css'

export const Print = () => {
  const mensaje =
    "Buen día, quiero conocer mas sobre su servicio de impresión 3D";
  const url = `https://api.whatsapp.com/send?phone=573209972620&text=${encodeURIComponent(
    mensaje
  )}`;
  return (
    <div className={serv.btn1}>
      <a href={url} target="_blank">
        Impresión 3D
      </a>
    </div>
  );
};
