import React from 'react'

class ImageTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <img alt='pix' src={this.props.park_image}/>
    )
  }
}

export default ImageTile;
