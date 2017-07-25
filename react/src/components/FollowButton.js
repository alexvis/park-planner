import React from 'react'

class FollowButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      following: null
    }
    this.handleFollowClick = this.handleFollowClick.bind(this)
  }

  componentDidMount() {
    // Set this.state.following to either:
    //   true if the user is following
    //   false if the user is not following
    fetch(`/api/v1/parks/${this.props.parkId}/users/${this.props.userId}/follows`)
    .then(response => {
      if (response.ok) {
	return response;
      } else {
	let errorMessage = `${response.status} (${response.statusText})`,
	    error = new Error(errorMessage);
	throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      console.log(body);
      this.setState( {following: body.following} )
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleFollowClick(event) {
    let data = {
      follow: {
	park_id: this.props.parkId,
	user_id: this.props.userId
      }
    };
    let jsonStringData = JSON.stringify(data);

    fetch('/api/v1/follows', {
      method: 'post',
      body: jsonStringData
    }).then(response => {
	if (response.ok) {
	  return response;
	} else {
	  let errorMessage = `${response.status} (${response.statusText})`,
	      error = new Error(errorMessage);
	  throw(error);
	}
      })
      .then(response => response.json())
      .then(body => {
	console.log(body);
	this.setState( {following: body.following} )
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let followButton;
    if (this.state.following !== null) {
      followButton = <button onClick={this.handleFollowClick}>
	{(this.state.following ? "Stop Following" : "Follow")}
      </button>
    }
    return(
      <div>
	{followButton}
      </div>
    )
  }
}

export default FollowButton;
