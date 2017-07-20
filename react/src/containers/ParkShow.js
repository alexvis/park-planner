import React from 'react'
import ParkInfo from './ParkInfo'
import ParkReviews from './ParkReviews'
import FollowButton from '../components/FollowButton'

class ParkShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      park: null
    }
  }

  componentDidMount() {
    //fetch call for 'park' state
  }

  render() {
    let ratings
    if (this.state.park) {
      ratings = [
        {name: "avg_rating",  value: park.avg_rating},
        {name: "dog_friendly_avg_rating",  value: park.dog_friendly_avg_rating}
      ]
    }

    return(
      <div>
        <h1> hello from parkShow container</h1>
	{/* <FollowButton />
	<ParkInfo
	  ratings={ratings}
	/>

	<ParkReviews
	/> */}
      </div>
    )
  }
}

export default ParkShow;
