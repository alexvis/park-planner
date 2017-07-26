import React from 'react'
import ReviewTile from '../components/ReviewTile'
import NewReviewForm from '../components/NewReviewForm'

class ParkReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewsArray: []
     }
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
        <NewReviewForm />
        {reviews}
      </div>
    )
  }
}




  export default ParkReviews;
