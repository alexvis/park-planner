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

  componentDidMount(){
    // Fetch call to Reviews table to fetch array of reviews for this park
  }

  render() {

    let reviews = this.state.reviews.map(review => {
      return(
        <ReviewTile
        	key={review.id}
        	body={review.body}
        />
      )
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
