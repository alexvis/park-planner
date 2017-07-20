import React from 'react'

class ReviewTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <p>{this.props.body}</p>
    )
  }
}

export default ReviewTile;
