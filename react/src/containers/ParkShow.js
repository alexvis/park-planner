import React from 'react'
import ParkInfo from './ParkInfo'
import FollowButton from '../components/FollowButton'
import ParkReviews from './ParkReviews'
import ParkFormContainer from './ParkFormContainer'

class ParkShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      park: null,
    }
    this.addNewPark = this.addNewPark.bind(this)
    this.handleFormResponse = this.handleFormResponse.bind(this);
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


  addNewPark(formPayload) {
    fetch('/api/v1/parks', {
      method: 'POST',
    body: JSON.stringify(formPayload)
    }).then(response => {
    	if (response.ok) {
    	  return response;
    	} else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
    	}
    }).then(response => response.json()
    ).then(body => {
      console.log(body);
      this.props.handleFormResponse(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let ratings
    let parkName
    if(this.state.park) {
      ratings = [
        {name: "avg_rating",  value: this.state.park.avg_rating}
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

        <ParkFormContainer addNewPark={this.addNewPark} />

        <div>
          <ParkReviews
          park_id = {this.props.parkId}
          user_id = {this.props.userId}
          />
        </div>

      </div>
    )
  }
}

export default ParkShow;
