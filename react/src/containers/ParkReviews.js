import React from 'react'
import ReviewTile from '../components/ReviewTile'

class ParkReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewsArray: []
     }
   }

   componentDidMount() {
     console.log("Fetching reviews")
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
         console.log(responseData.reviews)
         this.setState({reviewsArray: responseData.reviews})
         console.log("Finished Review setState")
       })
       .catch(error => console.error(`Error in fetch: ${error.message}`))
     }

  render(){
    let reviews
    reviews = this.state.reviewsArray.map(review => {
      return(
        <ReviewTile
          key = {review.id}
          reviewContent = {review}
        />
      )
    })
    return(
      <div>
        {reviews}
      </div>
    )
  }
}




  export default ParkReviews;
