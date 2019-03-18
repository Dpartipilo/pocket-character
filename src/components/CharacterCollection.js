import React, { Component } from 'react';
import characterData from '../data/characterData';

class CharacterCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aCharacterCards: []
    }

  }

  componentDidMount() {
    const oData = this.getCharacterDataById();
    this.setState({
      aCharacterCards: oData.characterCards
    })
  }

  getCharacterDataById() {
    const characterTileId = this.props.match.params.characterId;
    const aCharacterTiles = characterData.aCharacterTiles;
    const aCharacterCards = aCharacterTiles.filter((oTile) => {
      if (oTile.id === characterTileId) {
        return oTile;
      }
    })
    return aCharacterCards[0];
  }

  render() {
    return (
      <div className="CharacterCollection">
        Hello characters
        {this.state.aCharacterCards.map((oCharacterCard, i) => (
          <CharacterCard key={i} {...oCharacterCard} />
        ))}
      </div>
    )
  }
}

const CharacterCard = (props) => (
  <div className="Tile">
    <div className="avatar-container">
      Avatar image
  </div>
    <div className="character-details">
      <p>{props.name}</p>
      <p>Level:{props.level}</p>
    </div>
  </div>
)


export default CharacterCollection;