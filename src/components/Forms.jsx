import React, { Component } from 'react';

export default class Forms extends Component {
  render() {
    return (
      <form>
        <label htmlFor="cardName">
          Nome
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            id="cardName"
          />
        </label>
        <label htmlFor="cardDescript">
          Descrição
          <input
            type="textarea"
            name="cardDescript"
            data-testid="description-input"
            id="cardDescript"
          />
        </label>
        <label htmlFor="atribute1">
          Attr01
          <input
            type="number"
            name="atribute1"
            data-testid="attr1-input"
            id="atribute1"
          />
        </label>
        <label htmlFor="atribute2">
          Attr02
          <input
            type="number"
            name="atribute2"
            data-testid="attr2-input"
            id="atribute2"
          />
        </label>
        <label htmlFor="atribute3">
          Attr03
          <input
            type="number"
            name="atribute3"
            data-testid="attr3-input"
            id="atribute3"
          />
        </label>
        <label htmlFor="imgWay">
          Imagem
          <input
            type="text"
            name="imgWay"
            data-testid="image-input"
            id="imgWay"
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            type="select"
            name="rarity"
            data-testid="rare-input"
            id="rarity"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="super">
          Super Trybe Trunfo
          <input
            type="checkbox"
            name="super"
            data-testid="trunfo-input"
            id="super"
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
          name="save"
          id="save"
        >
          Salvar
        </button>
      </form>
    );
  }
}
