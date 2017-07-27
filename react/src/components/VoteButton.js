import React from 'react'

class VoteButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      voting: null
    }
    this.handleVoteClick = this.handleVoteClick.bind(this)
    this.handleUpvoteClick = this.handleUpvoteClick.bind(this)
    this.handleDownvoteClick = this.handleDownvoteClick.bind(this)

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
      console.log("VoteButton return response")
      console.log(body);
      this.setState( {voting: body.voting} )
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleUpvoteClick(event) {
    console.log("Upvote Clicked")
    this.handleVoteClick(true)
    if(this.state.voting === true)
      this.props.changeUpvotes(-1)
    else 
      this.props.changeUpvotes(1)
    if(this.state.voting === false)
      this.props.changeDownvotes(-1)
  }

  handleDownvoteClick(event) {
    console.log("Downvote Clicked")
    this.handleVoteClick(false)
    if(this.state.voting === false)
      this.props.changeDownvotes(-1)
    else 
      this.props.changeDownvotes(1)
    if(this.state.voting === true)
      this.props.changeUpvotes(-1)
  }

  handleVoteClick(tf) {
    // Asks the database to set the entry to
    // null if the value is already the same as the button
    // true or false if the button clicked
    //  was not the current setting
    let data = {
      vote: {
        review_id: this.props.reviewId,
        user_id: this.props.userId,
        vote: (this.state.voting === tf ? null : tf)
      }
    };
    let jsonStringData = JSON.stringify(data);

    fetch('/api/v1/votes', {
      method: 'post',
      body: jsonStringData
    })
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


  render() {
    let upvoteButton =
      <button id="upvote" onClick={this.handleUpvoteClick}>
        {this.state.voting === true ? "Unup" : "Up"}
      </button>;
    let downvoteButton =
      <button id="downvote" onClick={this.handleDownvoteClick}>
        {this.state.voting === false ? "Undown" : "Down"}
      </button>;

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
