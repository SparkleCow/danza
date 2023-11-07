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


  const [informacion, setInformacion] = useState({
    imagen: "danzaImg/kinesfera.jpg",
    title: "Cinesfera",
    text: "El cuerpo, según varios autores, es el contenedor del cuerpo, un contenedor esférico de forma imaginaria. Rudolf Labán proponee la idea de la Kinesfera o cinesfera cuyos puntos de intersección de las direcciones forman las cúspides del cuerpo que posee algo de la esfera y del cubo, y al que llamó icosaedro."
  });

  function actualizarInformacion(datos) {
    setInformacion(datos)
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
          imagenCarrusel="referentes/marta.jpg"
          textCarrusel="Martha Graham: Considerada una de las pioneras de la danza contemporánea, Martha Graham desarrolló una técnica única y un enfoque expresivo en la danza que influyó en generaciones posteriores de bailarines y coreógrafos."
          />
        <Carrusel
          imagenCarrusel="referentes/merce.webp"
          textCarrusel="Merce Cunningham: Merce Cunningham fue un coreógrafo y bailarín que desafió las convenciones tradicionales de la danza, creando obras innovadoras y colaborando con artistas visuales y músicos experimentales."
        />
        <Carrusel
          imagenCarrusel="referentes/pina.jpg"
          textCarrusel="Pina Bausch: Conocida por su trabajo en el Tanztheater, una forma de danza-teatro, Pina Bausch creó piezas emocionales y evocativas que fusionaron la danza con el teatro y la narrativa."
        />
        <Carrusel
          imagenCarrusel="referentes/twyla.jpg"
          textCarrusel="Twyla Tharp: Twyla Tharp es una coreógrafa conocida por su versatilidad y creatividad en la danza contemporánea, habiendo trabajado en una amplia gama de estilos y colaborado con músicos y artistas famosos."
        />
        <Carrusel
          imagenCarrusel="referentes/ohad.jpg"
          textCarrusel="Ohad Naharin: Ohad Naharin es el creador del movimiento Gaga, una técnica de danza contemporánea que enfatiza la conciencia del cuerpo y la expresión a través del movimiento."
        />
        <Carrusel
          imagenCarrusel="referentes/crystal.jpg"
          textCarrusel="Crystal Pite: Crystal Pite es una coreógrafa canadiense conocida por su innovación y habilidades coreográficas, habiendo creado obras que exploran temas emocionales y psicológicos."
        />
        <Carrusel
          imagenCarrusel="referentes/akram.jpg"
          textCarrusel="Akram Khan: Akram Khan es un destacado bailarín y coreógrafo británico que ha fusionado la danza contemporánea con elementos de danza kathak y otras influencias culturales."
        />
        <Carrusel
          imagenCarrusel="referentes/wayne.webp"
          textCarrusel="Wayne McGregor: Wayne McGregor es un coreógrafo británico conocido por su enfoque en la exploración de la relación entre el cuerpo y la tecnología en la danza contemporánea."
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
              imagen: "danzaImg/kinesfera.jpg",
              title: "Cinesfera",
              text: "El cuerpo, según varios autores, es el contenedor del cuerpo, un contenedor esférico de forma imaginaria. Rudolf Labán proponee la idea de la Kinesfera o cinesfera cuyos puntos de intersección de las direcciones forman las cúspides del cuerpo que posee algo de la esfera y del cubo, y al que llamó icosaedro."
            }}
          />
          <ButtonPage
            imagen="danzaImg/danzaContemporanea.jpg"
            title="Danza Contemporanea"
            text="Contemporanea"
            actualizarInformacion={actualizarInformacion}
            data={{
              imagen: "danzaImg/danzaContemporanea2.jpg",
              title: "Danza contemporánea",
              text: "La danza contemporánea se plantea el dejar de lado la idea central del cuerpo como algo meramente biológico y lo ubica en un punto mas holístico donde se emplea el cuerpo de manera mas simbólica, mas representativa y comunicativa."
            }}
          />
          <ButtonPage
            imagen="danzaImg/elCuerpoComoPoetica.jpg"
            title="El cuerpo como poética"
            text="Contemporanea"
            actualizarInformacion={actualizarInformacion}
            data={{
              imagen: "danzaImg/elCuerpoComoPoetica.jpg",
              title: "El cuerpo como poética",
              text: "El cuerpo como poética es una idea que destaca la idea de que el cuerpo humano puede expresar y comunicar significados y emociones a través del movimiento, de manera similar a cómo la poesía y/o la literatura en general utiliza el lenguaje para evocar sentimientos y significados más profundos.En la danza, el cuerpo se convierte en el medio a través del cual los bailarines expresan su arte y se comunican con el público. Cada movimiento, gesto, postura y expresión facial puede transmitir una variedad de emociones y narrativas, permitiendo a los espectadores experimentar la danza de una manera emotiva y significativa."
            }}
          />
          <ButtonPage
            imagen="danzaImg/elementosDanza.jpg"
            title="Elementos de la danza"
            text="Contemporánea"
            actualizarInformacion={actualizarInformacion}
            data={{
              imagen: "danzaImg/elementosDanza.jpg",
              title: "Elementos de la danza",
              text: (
                <div>
                  Forma: La forma es la unidad básica del movimiento. Es la estructura y organización de los movimientos, patrones y elementos coreográficos en una presentación de baile.<br /><br />

                  Tiempo: Elemento que asigna un valor estático o dinámico a una forma organizada.<br /><br />

                  Ritmo: Este elemento manipula y regula el tiempo. Se ejecuta para equilibrar el movimiento, la forma y el tiempo de manera estética. Brinda rapidez o lentitud a la estructura del movimiento.<br /><br />

                  Transiciones: Es necesario vincular las frases o secuencias de movimiento a través de un cambio de movimiento o forma, para ello empleamos las transiciones. Generan conexiones específicas.<br /><br />

                  Dinámicas de movimiento: Las dinámicas de movimiento en la danza se refieren a las cualidades físicas y expresivas de los movimientos realizados por los bailarines.
                </div>
              )
            }}
          />
          <ButtonPage
            imagen="danzaImg/cualidadesMovimiento.jpg"
            title="Cualidades del movimiento"
            text="Contemporanea"
            actualizarInformacion={actualizarInformacion}
            data={{
              imagen: "danzaImg/elementos.jpg",
              title: "Cualidades del movimiento",
              text: (
                <div>
                  Fluidez: La fluidez se refiere a la suavidad y la continuidad del movimiento. Un bailarín fluido se mueve sin interrupciones bruscas, creando una sensación de continuidad y gracia en sus movimientos.<br /><br />

                  Ritmo: El ritmo se refiere a la velocidad y el patrón de los movimientos. Puede ser rápido, lento, sincopado, constante, o variar de muchas formas, lo que aporta interés y dinamismo a la danza.<br /><br />

                  Fuerza: La fuerza se refiere a la intensidad del esfuerzo en el movimiento. Los movimientos pueden ser suaves y ligeros o fuertes y enérgicos, lo que influye en la expresión y la emoción transmitida.<br /><br />

                  Tensión: La tensión se refiere a la resistencia en el cuerpo del bailarín, que puede ser visible o no. La tensión controlada en los músculos y las articulaciones puede dar lugar a movimientos controlados y expresivos.<br /><br />

                  Soltura: La soltura se relaciona con la relajación y la fluidez del cuerpo del bailarín. La capacidad de moverse de manera relajada y sin rigidez a menudo se asocia con movimientos más naturales y expresivos.<br /><br />

                  Expresividad: La expresividad se refiere a la capacidad de un bailarín para transmitir emociones y contar una historia a través de su movimiento. La interpretación y la conexión emocional son esenciales para esta cualidad del movimiento.<br /><br />

                  Dirección: La dirección se refiere a la orientación del movimiento en el espacio. Los movimientos pueden ser hacia adelante, hacia atrás, hacia los lados, en diagonal, en espiral, etc. La dirección influye en la composición y la coreografía.<br /><br />

                  Amplitud: La amplitud se refiere al alcance de los movimientos. Pueden ser pequeños y concentrados o amplios y expansivos, lo que afecta la visualización y el impacto del movimiento.<br /><br />
                </div>
                )
            }}
            
          />
          <ButtonPage
            imagen="danzaImg/dramaturgia.jpg"
            title="Dramaturgia"
            text="Contemporanea"
            actualizarInformacion={actualizarInformacion}
            data={{
              imagen: "danzaImg/dramaturgia.jpg",
              title: "Dramaturgia",
              text: "La dramaturgia es el arte y la técnica de escribir y estructurar una obra teatral o de danza para que cuente una historia de manera efectiva. Aunque comúnmente se asocia con el teatro, la dramaturgia también es relevante en la danza contemporánea, ya que esta forma de danza a menudo incorpora elementos narrativos, simbólicos y emocionales en su expresión artística."
            }}
          />
        </OptionsContainer>
      </GeneralContainer>
    </div>
  );
}
export default App;
