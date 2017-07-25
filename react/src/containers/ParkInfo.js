import React from 'react'
import RatingTile from '../components/RatingTile'

class ParkInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

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
	<FollowButton parkId={this.prop
      	{ratings}
      </div>
    )
  }
}

export default ParkInfo;
