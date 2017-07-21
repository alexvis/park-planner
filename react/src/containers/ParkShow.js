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
    if(this.state.park) {
      ratings = [
        {name: "avg_rating",  value: this.state.park.avg_rating},
        {name: "dog_friendly_avg_rating",  value: this.state.park.dog_friendly_avg_rating}
      ]
    }

    return(
      <div>
      	<FollowButton />
      	{this.state.park &&
          <ParkInfo
        	  ratings={ratings}
        	/>
        }

      	<ParkReviews
      	/>
      </div>
    )
  }
}

export default ParkShow;
