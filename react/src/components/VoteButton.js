import React from 'react'

class VoteButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      voting: null
    }
    this.handleVoteClick = this.handleVoteClick.bind(this)
    this.handleUpvoteClick = this.handleUpvoteClick.bind(this)

  }

  componentDidMount() {
    // Set this.state.voting to either:
    //   true if the user is voting
    //   false if the user is not voting
    fetch(`/api/v1/reviews/${this.props.reviewId}/users/${this.props.userId}/votes`)
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
      this.setState( {voting: body.voting} )
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleUpvoteClick(event) {
    console.log("Upvote Clicked")
    this.setState(prevState => ({
      voting: (prevState.voting === true ? null : true)
    }))
  }

  handleVoteClick(event) {
    let data = {
      vote: {
	       rating_id: this.props.ratingId,
         user_id: this.props.userId
      }
    };
    let jsonStringData = JSON.stringify(data);

    fetch('/api/v1/votes', {
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
	     this.setState( {voting: body.voting} )
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let upvoteButton = <button onClick={this.handleUpvoteClick}>{this.state.voting === true ? "Unup" : "Up"}</button>;
    let downvoteButton = <button>{this.state.voting === false ? "Undown" : "Down"}</button>;

    return(
      <div>
          <p>Vote Button</p>
	       {upvoteButton}
         {downvoteButton}
      </div>
    )
  }
}

export default VoteButton;
