import React from 'react'
import ParkInfo from './ParkInfo'
import FollowButton from '../components/FollowButton'
import ParkReviews from './ParkReviews'

class ParkShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      park: null,
    }
    this.handleFormResponse = this.handleFormResponse.bind(this);
    this.setPark = this.setPark.bind(this);
  }

  setPark(p) {
    this.setState( {park: p} )
  }

  handleFormResponse(newPark) {
    this.setState(prevState => ({
      park: [...prevState.park, newPark]
    }))
  }

  componentDidMount() {
    let parkId = this.props.parkId;
    fetch(`/api/v1/parks/${parkId}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({park: responseData.park})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }


  render() {
    let ratings
    let parkName
    if(this.state.park) {
      ratings = [
        {name: "Average Rating",  value: this.state.park.avg_rating},
        {name: "Dog Friendly Rating",  value: this.state.park.dog_friendly_avg_rating},
        {name: "Camping Rating",  value: this.state.park.camping_avg_rating},
        {name: "Playground Rating",  value: this.state.park.playground_avg_rating},
        {name: "Hiking Rating",  value: this.state.park.hiking_avg_rating},
        {name: "Scenery Rating",  value: this.state.park.scenery_avg_rating}
      ]
      parkName = this.state.park.name;
    }

    let followButton
    if(this.state.park && this.props.userId) {
      followButton =
      <FollowButton
	     parkId={this.state.park.id}
       userId={this.props.userId}
      />
    }

    return(
      <div>
        <h1>React ParkShow</h1>
        <p>{parkName}</p>
	{followButton}
        {this.state.park &&
          <ParkInfo ratings={ratings} />
        }


        <div>
          <ParkReviews
          park_id = {this.props.parkId}
          user_id = {this.props.userId}
          setPark={this.setPark}
          />
        </div>

      </div>
    )
  }
}

export default ParkShow;
