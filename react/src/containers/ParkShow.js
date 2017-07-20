import React from 'react'
import ParkInfo from './ParkInfo'
import ParkReviews from './ParkReviews'
import FollowButton from './FollowButton'

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
    let ratings = [
      {name: "avg_rating",  value: park.avg_rating},
      {name: "dog_friendly_avg_rating",  value: park.dog_friendly_avg_rating}
    ]

    return(
      <div>
      <h1>Hello from parkShow.js</h1>
    </div>
    )
  }
}

export default ParkShow;
