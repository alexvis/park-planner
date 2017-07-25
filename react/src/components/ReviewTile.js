import React from 'react'

const ReviewTile = props => {

  return(
    <div>
      <p id="comment">{props.reviewContent.comment}</p>
      <p id="rating">{props.reviewContent.park_rating}</p>
    </div>
  )
}

export default ReviewTile;
