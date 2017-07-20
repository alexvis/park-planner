import React from 'react'
import ReviewTile from '../components/ReviewTile'
import NewReviewForm from '../components/NewReviewForm'

class ParkReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  render() {

    let reviews = this.state.ratings.map(review => {
      <ReviewTile
	key={review.id}
	body={review.body}
	/>
    })

    return(
      <div>
	<NewReviewForm />
	{reviews}
      </div>
    )
  }
}

export default ParkReviews;
