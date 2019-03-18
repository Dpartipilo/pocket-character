import React, { Component } from 'react';

class NewCharacter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.createNewCharacter} className="Tile">
        +
      </div>
    )
  }

  createNewCharacter() {
    console.log('NEW CHARACTER!');
  }
}

export default NewCharacter;