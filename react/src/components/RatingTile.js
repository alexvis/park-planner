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
	<p>{this.props.name}: {this.props.value && this.props.value.toFixed(2)}</p>
      </div>
    )
  }
}

export default RatingTile;
