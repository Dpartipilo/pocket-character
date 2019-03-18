import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import NewCharacter from './NewCharater';
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
        CharacterList
      </div>
    )
  }
}

export default CharacterList;

const CharacterTile = (props) => (
  <Link to={`/clones/${props.id}`}
    props={props}
  >
    <div className="Tile">
      <div className="avatar-container">
        Avatar image
    </div>
      <div className="character-details">
        <p>{props.name}</p>
        <p>Level:{props.level}</p>
      </div>
    </div>
  </Link>
)