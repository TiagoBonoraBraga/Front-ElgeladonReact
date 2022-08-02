import "./PaletaListaItem.css";

function PaletaListaItem({paleta, quantidadeSelecionada, index, onRemove, onAdd}) {
 
   
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => onRemove(index)}>
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="PaletaListaItem__badge"> {quantidadeSelecionada} </span>
    );
  return (
    <div className="PaletaListaItem" >
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="PaletaListaItem__sabor">{paleta.sabor}</div>
        <div className="PaletaListaItem__preco">R$ { paleta.preco.toFixed(2) }</div>
        <div className="PaletaListaItem__descricao">{paleta.descricao}</div>
        <div className="PaletaListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`} //mudar o tamanho do botao com click
            onClick={() => onAdd(index)} //add o index da paleta e ativa a função paraadd item passando o index da banda selecionada.
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img className="PaletaListaItem__foto" src={paleta.foto} alt={`Paleta de ${paleta.sabor}`} />
    </div>
  );
}
export default PaletaListaItem;