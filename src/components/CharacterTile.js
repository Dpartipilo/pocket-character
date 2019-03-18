import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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

export default CharacterTile;