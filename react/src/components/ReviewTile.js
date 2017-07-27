import React from 'react'
import VoteButton from './VoteButton'

class ReviewTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numUpvotes: this.props.reviewContent.num_upvotes,
      numDownvotes: this.props.reviewContent.num_downvotes
    }
    this.changeUpvotes = this.changeUpvotes.bind(this)
    this.changeDownvotes = this.changeDownvotes.bind(this)

  }

  changeUpvotes(n) {
    this.setState(prevState => ({
      numUpvotes: prevState.numUpvotes + n
    }))
  }
  changeDownvotes(n) {
    this.setState(prevState => ({
      numDownvotes: prevState.numDownvotes + n
    }))
  }

  render() {
    return(
      <div>
        <p id="comment">{this.props.reviewContent.comment}</p>
        <p id="rating">{this.props.reviewContent.park_rating}</p>
        <p id="upvotes">Upvotes: {this.state.numUpvotes}</p>
        <p id="downvotes">Downvotes: {this.state.numDownvotes</p>
        <VoteButton
          reviewId={this.props.reviewContent.id}
          userId={this.props.reviewContent.user_id}
          changeUpvotes={this.changeUpvotes}
          changeDownvotes={this.changeDownvotes}
        />
      </div>
    )
  }
}

export default ReviewTile;
