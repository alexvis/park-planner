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
        <strong>{this.props.name}: {this.props.value && this.props.value.toFixed(2)}</strong>
      </div>
    )
  }
}

export default RatingTile;
