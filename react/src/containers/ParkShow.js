import React from 'react'
import ParkInfo from './ParkInfo'
import FollowButton from '../components/FollowButton'

class ParkShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      park: null
    }
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
    if(this.state.park) {
      ratings = [
        {name: "avg_rating",  value: this.state.park.avg_rating}
      ]
    }

    let followButton
    if(this.state.park && this.props.userId) {
      followButton = <FollowButton
	parkId={this.state.park.id}
	userId={this.props.userId}
      />
    }

    return(
      <div>
        <h1>React ParkShow</h1>

	{followButton}

      	{this.state.park &&
          <ParkInfo
	    ratings={ratings}
	  />
        }

      </div>
    )
  }
}

export default ParkShow;
