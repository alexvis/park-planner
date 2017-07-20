import React from 'react'

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <p>{this.props.park_image}</p>
    )
  }
}

export default Image;
