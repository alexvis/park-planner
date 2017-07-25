import React from 'react'

class FollowButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      following: null
    }
    this.handleFollowClick = handleFollowClick.bind(this)
  }

  ComponentDidMount() {
    // Set this.state.following to either:
    //   null if the user is not logged in
    //   true if the user is following
    //   false if the user is not following
    fetch(`/api/v1/parks/${this.props.parkId}/follows`)
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
	park_id: this.props.park_id
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
	(this.state.following ? "Follow" : "Stop Following")
      </button>
    }
    return(
      <div>

      </div>
    )
  }
}

export default FollowButton;
