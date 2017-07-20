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
	<p>{this.props.name}</p>
	<p>{this.props.value}</p>
      </div>
    )
  }
}

export default RatingTile;
