import React from 'react'
import RatingTile from '../components/RatingTile'

class ParkInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img = null,
      ratings: []
    }
  }

  render() {

    let ratings = this.state.ratings.map(rating) => {
      <ParkRatingTile
	key={rating.name}
	name={rating.name}
	value={rating.value}
	/>
    }

    return(
      {ratings}
    )
  }
}

exports default ParkInfo;
