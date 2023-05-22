import React, {useState, useEffect} from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import {temaClaro, temaOscuro} from "./Components/UI/temas";
import { BtnTema } from "./Components/UI/index"
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(getTemaInicial);

  useEffect(() => {
    localStorage.setItem("tema", JSON.stringify(tema));
  }, [tema])

  function getTemaInicial(){
    const temaUsado = localStorage.getItem("tema");
    return temaUsado ? JSON.parse(temaUsado) : temaClaro
  }

  const toggleTema = () =>{
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle/>
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;

//importamos el hook useState para trabajar con los click para que cambien el tema