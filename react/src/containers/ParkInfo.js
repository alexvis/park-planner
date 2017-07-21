import React from 'react'
import RatingTile from '../components/RatingTile'
import ImageTile from '../components/ImageTile'

class ParkInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img: null,
      park_images: []
    }
  }

  // componentDidMount() {
  //   fetch(`/api/v1/...`)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({park_images: responseData})
  //     })
  // }

  render() {

    let ratings = this.props.ratings.map(rating => {
      return(
        <RatingTile
      	  key={rating.name}
      	  name={rating.name}
      	  value={rating.value}
        />
      )
    })

    return(
      <div>
      	<ImageTile
      	  park_image={this.state.park_images}
      	/>
      	{ratings}
      </div>
    )
  }
}

export default ParkInfo;
