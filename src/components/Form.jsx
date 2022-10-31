import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="cardName">
          Nome
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <input
            type="textarea"
            name="cardDescription"
            data-testid="description-input"
            id="cardDescript"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr1">
          Attr01
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            id="atribute1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr2">
          Attr02
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            id="atribute2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr3">
          Attr03
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            id="atribute3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardImage">
          Imagem
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            id="imgWay"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            type="select"
            name="cardRare"
            data-testid="rare-input"
            id="rarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        {
          hasTrunfo
            ? (<p> Você já tem um Super Trunfo em seu baralho</p>
            ) : (
              <label htmlFor="super">
                Super Trybe Trunfo
                <input
                  type="checkbox"
                  name="cardTrunfo"
                  data-testid="trunfo-input"
                  id="super"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>
            )
        }
        <button
          type="submit"
          data-testid="save-button"
          name="save"
          id="save"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
