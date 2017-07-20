import React from 'react'
import RatingTile from '../components/RatingTile'

class ParkInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img: null,
      ratings: [],
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
    debugger
    let ratings = this.state.ratings.map(rating) => {
        <ParkRatingTile
	         key={rating.name}
  	       name={rating.name}
  	       value={rating.value}
        />
        <Image
          park_image={park_images.}
        />
    }

    return(
      {ratings}
    )
  }
}

export default ParkInfo;
