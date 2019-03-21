import React, { Component } from 'react';
import characterData from '../data/characterData';

import CharacterCard from './CharacterCard';
import '../style/CharacterCollection.css';


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
        {this.state.aCharacterCards.map((oCharacterCard, i) => (
          <CharacterCard key={i} {...oCharacterCard} />
        ))}
      </div>
    )
  }
}

export default CharacterCollection;