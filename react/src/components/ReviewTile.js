import React from 'react'
import VoteButton from './VoteButton'

const ReviewTile = props => {
  return(
    <div>
      <p id="comment">{props.reviewContent.comment}</p>
      <p id="rating">{props.reviewContent.park_rating}</p>
      <p id="upvotes">{props.reviewContent.num_upvotes}</p>
      <p id="downvotes">{props.reviewContent.num_downvotes}</p>
      <VoteButton
        reviewId={props.reviewContent.id}
	      userId={props.reviewContent.user_id}
      />
    </div>
  )
}

export default ReviewTile;
