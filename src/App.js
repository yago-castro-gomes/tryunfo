import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: '',
    cardTrunfo: false,
    cardImage: '',
    savedCard: [],
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'ceckbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const maxValueAtribute = 210;
    const maxValue = 90;
    const name = cardName.length > 0;
    const descript = cardDescription.length > 0;
    const image = cardImage.length > 0;
    const rarity = cardRare.length > 0;
    const atribts = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10) <= maxValueAtribute;
    const atrib1 = parseInt(cardAttr1, 10) <= maxValue && parseInt(cardAttr1, 10) >= 0;
    const atrib2 = parseInt(cardAttr2, 10) <= maxValue && parseInt(cardAttr2, 10) >= 0;
    const atrib3 = parseInt(cardAttr3, 10) <= maxValue && parseInt(cardAttr3, 10) >= 0;
    return name && descript && image && rarity && atribts && atrib1 && atrib2 && atrib3;
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardTrunfo, cardImage, cardRare } = this.state;
    this.setState((prevState) => ({
      savedCard: [...prevState.savedCard, [
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardRare,
        cardTrunfo,
        cardImage,
      ],
      ],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      cardImage,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          onInputChange={ this.onInputChange }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          cardImage={ cardImage }
          isSaveButtonDisabled={ !this.isSaveButtonDisabled() }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          onInputChange={ this.onInputChange }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          cardImage={ cardImage }
        />
      </div>
    );
  }
}

export default App;
