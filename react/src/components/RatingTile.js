import React from 'react'

class RatingTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div>
	<p id="name">{this.props.name}</p>
  <p id="value">{this.props.value}</p>
      </div>
    )
  }
}

export default RatingTile;
