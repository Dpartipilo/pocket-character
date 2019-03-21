import React, { Component } from 'react';

import '../style/CharacterList.css';
import NewCharacter from './NewCharater';
import CharacterTile from './CharacterTile';
import characterData from '../data/characterData';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aCharacterTiles: []
    }

  }

  componentDidMount() {
    const oData = this.getCharacterData();
    this.setState({
      aCharacterTiles: oData.aCharacterTiles
    })
  }

  getCharacterData() {
    return characterData;
  }

  render() {
    console.log(characterData)
    return (
      <div className="CharacterList">
        {this.state.aCharacterTiles.map((oCharacterTile, i) => (
          <CharacterTile key={i} {...oCharacterTile} />
        ))}
        <NewCharacter />
      </div>
    )
  }
}

export default CharacterList;