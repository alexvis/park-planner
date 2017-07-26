import React from 'react'
import ParkInfo from './ParkInfo'
import ParkReviews from './ParkReviews'
import ParkFormContainer from './ParkFormContainer'

class ParkShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      park: null,
      parks: []
    }
    this.addNewArticle = this.addNewArticle.bind(this)
  }

  componentDidMount() {
      let parkId = this.props.id;
      fetch(`/api/v1/parks/${parkId}`)
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
          this.setState({park: responseData.park})
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }


    addNewPark(formPayload) {
    fetch('/api/v1/parks', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ parks: [...this.state.parks, responseData] })
    })
  }


  render() {
    let ratings
    let parkName
    if(this.state.park) {
      ratings = [
        {name: "avg_rating",  value: this.state.park.avg_rating}
      ]
      parkName = this.state.park.name;
    }

    return(
      <div>
        <h1>React ParkShow</h1>
        <p>{parkName}</p>
        {this.state.park &&
          <ParkInfo
        	  ratings={ratings}
        	/>
        }

        <ParkFormContainer addNewPark={this.addNewPark} />

        <div>
          <ParkReviews
          park_id = {this.props.id}
          />
        </div>
      </div>
    )
  }
}

export default ParkShow;
