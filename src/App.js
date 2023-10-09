import './App.css';
import ButtonPage from "./component/ButtonPage";
import Header from "./component/Header";
import GeneralContainer from './component/GeneralContainer';
import OptionsContainer from './component/OptionsContainer';
import InfoContainer from './component/InfoContainer';
import Carrusel from './component/Carrusel';
import ContainerCarrusel from './component/ContainerCarrusel';
import Informacion from './component/Informacion';
import React, { useState } from "react";


function App() {

  const[informacion, setInformacion] = useState({
    imagen: "danzaImg/IsadoraDuncan.jpg",
    title: "Cinesfera",
    text: "Este es un párrafo bastante largo que contiene una gran cantidad de texto. Puedes seguir agregando más contenido a este párrafo si es necesario. Solo asegúrate de encerrarlo entre comillas dobles (\" \") o comillas simples (' ') para que JavaScript lo interprete correctamente."
  });

  function actualizarInformacion(datos){
    setInformacion(datos)
    console.log("Holaaaaaaaaaaaaaa")
  };

  return (
    <div className="app">
      <Header
          imagenPrimeraPaleta="header/iconos/paleta.png"
          imagenGuia="header/iconos/guia.png"
          imagenAbout="header/iconos/web.png"
          imagenTitulo="header/titulo.png"
          imagenContact="header/iconos/contacto.png"
          imagenAboutMe="header/iconos/persona.png"
          imagenSegundaPaleta="header/iconos/paleta.png"
      />
      <ContainerCarrusel>
        <Carrusel
          imagenCarrusel="danzaImg/cinesfera.webp"
          textCarrusel="Hola, esto es carrusel"
        />
        <Carrusel
          imagenCarrusel="danzaImg/danzaContemporanea.jpg"
          textCarrusel="Hola, esto es carrusel"
        />
        <Carrusel
          imagenCarrusel="danzaImg/IsadoraDuncan.jpg"
          textCarrusel="Hola, esto es carrusel"
        />
        <Carrusel
          imagenCarrusel="danzaImg/cinesfera.webp"
          textCarrusel="Hola, esto es carrusel"
        />
        <Carrusel
          imagenCarrusel="danzaImg/danzaContemporanea.jpg"
          textCarrusel="Hola, esto es carrusel"
        />
        <Carrusel
          imagenCarrusel="danzaImg/IsadoraDuncan.jpg"
          textCarrusel="Hola, esto es carrusel"
        />
      </ContainerCarrusel>

      <GeneralContainer>
        <InfoContainer>
          <Informacion
            imagen={informacion.imagen}
            title={informacion.title}
            text={informacion.text}
          />
        </InfoContainer>
        <OptionsContainer>
          <ButtonPage
            imagen="danzaImg/cinesfera.webp"
            title="Cinesfera"
            text="Contemporanea"
            actualizarInformacion={actualizarInformacion}
            data={{
              imagen: "danzaImg/cinesfera.webp",
              title: "Danza contemporánea",
              text: "Contemporánea aaaaaaaaaaaa"
            }}
          />
          <ButtonPage
            imagen="danzaImg/danzaContemporanea.jpg"
            title="Danza contemporanea"
            text="Contemporanea"
            actualizarInformacion={actualizarInformacion}
            data={{
              imagen: "danzaImg/danzaContemporanea.jpg",
              title: "Danza contemporánea",
              text: "Contemporánea aaaaaaaaaaaa peña"
            }}
          />
          <ButtonPage
            imagen="danzaImg/IsadoraDuncan.jpg"
            title="Exponentes"
            text="Contemporanea"
            actualizarInformacion={actualizarInformacion}
            data={{
              imagen: "danzaImg/IsadoraDuncan.jpg",
              title: "Danza contemporánea",
              text: "Contemporánea aaaaaaaaaaaa smsjsjjsdawdw"
            }}
          /> 
          <ButtonPage
            imagen="danzaImg/cinesfera.webp"
            title="Cinesfera"
            text="Contemporanea"
            actualizarInformacion={actualizarInformacion}
            data={{
              imagen: "danzaImg/cinesfera.webp",
              title: "Danza contemporánea",
              text: "Contemporánea aaaaaaaaaaaa danzaImg/cinesfera.webp danzaImg/cinesfera.webp"
            }}
          />
          <ButtonPage
            imagen="danzaImg/danzaContemporanea.jpg"
            title="Danza contemporanea"
            text="Contemporanea"
            actualizarInformacion={actualizarInformacion}
            data={{
              imagen: "danzaImg/danzaContemporanea.jpg",
              title: "Danza contemporánea",
              text: "Contemporánea aaaaaaaaaaaa"
            }}
          />
        </OptionsContainer>
      </GeneralContainer>
    </div>
  );
}
export default App;
