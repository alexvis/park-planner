import React from 'react'

class RatingTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <p>{this.props.name}</p>
      <p>{this.props.value}</p>
    )
  }
}

export default RatingTile;
