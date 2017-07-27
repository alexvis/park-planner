import React from 'react'
import ReviewTile from '../components/ReviewTile'
<<<<<<< HEAD
import NewReviewForm from '../components/NewReviewForm'
=======
import ReviewFormContainer from './ReviewFormContainer'
>>>>>>> master

class ParkReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewsArray: []
     }
     this.handleFormResponse = this.handleFormResponse.bind(this);
   }

   handleFormResponse(newReview) {
     this.setState(prevState => ({
       reviewsArray: [...prevState.reviewsArray, newReview]
     }))
   }

   componentDidMount() {
     let parkId = this.props.park_id;
     fetch(`/api/v1/parks/${parkId}/reviews`)
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
         this.setState({reviewsArray: responseData.reviews})
       })
       .catch(error => console.error(`Error in fetch: ${error.message}`))
     }

  render(){
    let reviews
    if(this.state.reviewsArray.length != 0)
      reviews = this.state.reviewsArray.map (review => {
      return(
        <ReviewTile
          key = {review.id}
          reviewContent = {review}
        />
      )
    })

    return(
  

        <div>
          <ReviewFormContainer
            parkId = {this.props.park_id}
            userId = {this.props.user_id}
            handleFormResponse={this.handleFormResponse}
          />
        </div>
        <div>
          {reviews}
        </div>

    )
  }
}

export default ParkReviews;
