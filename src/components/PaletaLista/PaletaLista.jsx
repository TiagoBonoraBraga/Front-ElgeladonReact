import React, { useState, useEffect} from "react"; //importando o usestate

import "./PaletaLista.css";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";
import {PaletaService} from "services/PaletaService"
function PaletaLista() {
  const [paeltas, setPaletas] = useState([])
  const [paletaSelecionada, setPaletaSelecionada] = useState({}); 
  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
    }; //um objeto q recebe - [bandaindex] é a banda selecionada e o resto é q quantidade d x q foi selecionada, pega o valor atual da paleta q é 0 e vai incrementar o numero 1 a cada clicada e somando +1
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta }); //passa a paletaselecionada  e acrescenta o click, apos é só criar a config do botao abaixo e depois criar o span para modificar o valor dos clicks
  };

  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletas(response);
  }

  useEffect(()=>{
    getLista();
  },[]);

  // possue dois parametros a 1° a condição e 2° a index da banda selecionada
  //se o canRender for true ele renderiza o span senao não

  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
       <PaletaListaItem 
          key={`PaletaListaItem-${index}`}
          paleta={paleta}
          quantidadeSelecionada={paletaSelecionada[index]}
          index ={index}
          onRemove={index => removerItem(index)}
          onAdd={index => adicionarItem(index)} />
      ))}
    </div>
  );
}

export default PaletaLista;
