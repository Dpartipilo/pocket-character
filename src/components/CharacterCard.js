import React from 'react';

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

export default CharacterCard;