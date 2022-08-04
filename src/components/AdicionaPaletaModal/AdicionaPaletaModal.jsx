import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import "./AdicionaPaletaModal.css";

function AdicionaPaletaModal({ closeModal }) {
  const form = {
    preco: "",
    sabor: "",
    recheio: "",
    descricao: "",
    foto: "",
  };
  const [state, setState] = useState(form);
  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const [canDisable, setCanDisable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.descricao.length &&
        state.foto.length &&
        state.sabor.length &&
        state.preco.length
    );
    setCanDisable(response);
  };

  useEffect(() => {
    canDisableSendButton();
  });

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaPaletaModal">
        <form autoComplete="off">
          <h2>Adicionar ao Cardápio</h2>
          <div>
            <label className="AdicionaPaletaModal__text" htmlFor="preco">
              Preço:
            </label>
            <input
              type="text"
              id="preco"
              placeholder="R$ 10,00"
              value={state.preco}
              onChange={(e) => handleChange(e, "preco")}
              required
            />
          </div>
          <div>
            <label className="AdicionaPaletaModal__text" htmlFor="sabor">
              Sabor:
            </label>
            <input
              type="text"
              id="sabor"
              placeholder="Chocolate"
              value={state.sabor}
              onChange={(e) => handleChange(e, "sabor")}
              required
            />
          </div>
          <div>
            <label className="AdicionaPaletaModal__text" htmlFor="recheio">
              Recheio:
            </label>
            <input
              type="text"
              id="recheio"
              placeholder="Banana"
              value={state.recheio}
              onChange={(e) => handleChange(e, "recheio")}
            />
          </div>
          <div>
            <label className="AdicionaPaletaModal__text" htmlFor="descricao">
              Descrição:
            </label>
            <input
              type="text"
              id="descricao"
              placeholder="Detalhe o produto!"
              value={state.descricao}
              onChange={(e) => handleChange(e, "descricao")}
              required
            />
          </div>
          <div>
            <label
              className="AdicionaPaletaModal__text AdicionaPaletaModal__foto-label"
              htmlFor="foto"
            >
              {!state.foto.length ? "Selecionar Imagem" : state.foto}
            </label>

            <input
              className="AdicionaPaletaModal__foto"
              type="file"
              accept="image/png,image/gif,image/jpeg"
              id="foto"
              value={state.foto}
              onChange={(e) => handleChange(e, "foto")}
              required
            />
          </div>
          <button
            type="button"
            disabled={canDisable}
            className="AdicionaPaletaModal__enviar"
          >
            Enviar
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaPaletaModal;
