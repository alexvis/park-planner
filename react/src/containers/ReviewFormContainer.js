import React from 'react'
import TextField from '../components/TextField'
import StarDropdown from '../components/StarDropdown'

class ReviewFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      parkRating: null,
      dogRating: null,
      playgroundRating: null,
      campingRating: null,
      hikingRating: null,
      sceneryRating: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleParkRating = this.handleParkRating.bind(this);
    this.handleDogRating = this.handleDogRating.bind(this);
    this.handlePlaygroundRating = this.handlePlaygroundRating.bind(this);
    this.handleCampingRating = this.handleCampingRating.bind(this);
    this.handleHikingRating = this.handleHikingRating.bind(this);
    this.handleSceneryRating = this.handleSceneryRating.bind(this);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewReview = this.addNewReview.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.validateDropdownSelection = this.validateDropdownSelection.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value });
  }

  handleParkRating(event) {
    let value = event.target.value;
    if (value === '-') {
      this.setState({ parkRating: null });
    } else {
      this.setState({ parkRating: value });
    }
  }

  handleDogRating(event) {
    let value = event.target.value;
    if (value === '-') {
      this.setState({ dogRating: null });
    } else {
      this.setState({ dogRating: value });
    }
  }

  handlePlaygroundRating(event) {
    let value = event.target.value;
    if (value === '-') {
      this.setState({ playgroundRating: null });
    } else {
      this.setState({ playgroundRating: value });
    }
  }

  handleCampingRating(event) {
    let value = event.target.value;
    if (value === '-') {
      this.setState({ campingRating: null });
    } else {
      this.setState({ campingRating: value });
    }
  }

  handleHikingRating(event) {
    let value = event.target.value;
    if (value === '-') {
      this.setState({ hikingRating: null });
    } else {
      this.setState({ hikingRating: value });
    }
  }

  handleSceneryRating(event) {
    let value = event.target.value;
    if (value === '-') {
      this.setState({ sceneryRating: null });
    } else {
      this.setState({ sceneryRating: value });
    }
  }


  handleFormSubmit(event) {
    event.preventDefault();
    if (this.validateDropdownSelection(this.state.parkRating)) {
      console.log("error")
    } else {
      let formPayload = {
        park_id: this.props.parkId,
        user_id: this.props.userId,
        comment: this.state.comment,
        park_rating: this.state.parkRating,
        dog_friendly_rating: this.state.dogRating,
        playground_rating: this.state.playgroundRating,
        camping_rating: this.state.campingRating,
        hiking_rating: this.state.hikingRating,
        scenery_rating: this.state.sceneryRating
      }
      this.addNewReview(formPayload);
      this.clearForm();
    }
  }

  addNewReview(formPayload) {
    fetch('/api/v1/reviews', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    }).then(response => {
    	if (response.ok) {
    	  return response;
    	} else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
    	}
    }).then(response => response.json()
    ).then(body => {
      console.log(body);
      this.props.handleFormResponse(body.review);
      this.props.setPark(body.park);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  clearForm() {
    this.setState({
      comment: '',
      parkRating: '-',
      dogRating: '-',
      playgroundRating: '-',
      campingRating: '-',
      hikingRating: '-',
      sceneryRating: '-',
    })
  }

  validateDropdownSelection(selection) {
    if (selection === '-' || selection === null) {
      return true;
    }
  }


  render() {
    return(
      <div>
        <p>Write your own review</p>
        <form onSubmit={this.handleFormSubmit}>
          <TextField
            content={this.state.comment}
            label={'Write your review here:'}
            name={'comment'}
            handleChange={this.handleChange}
          />
          <StarDropdown
            label={'Overall Park Rating *Required'}
            rating={this.state.parkRating}
            handleSelect={this.handleParkRating}
          />
          <StarDropdown
            label={'How good is this park for dogs?'}
            rating={this.state.dogRating}
            handleSelect={this.handleDogRating}
          />
          <StarDropdown
            label={'How are the playgrounds at this park?'}
            rating={this.state.playgroundRating}
            handleSelect={this.handlePlaygroundRating}
          />
          <StarDropdown
            label={'How good is this park for camping?'}
            rating={this.state.campingRating}
            handleSelect={this.handleCampingRating}
          />
          <StarDropdown
            label={'How good is the hiking at this park?'}
            rating={this.state.hikingRating}
            handleSelect={this.handleHikingRating}
          />
          <StarDropdown
            label={'How good is the scenery at this park?'}
            rating={this.state.sceneryRating}
            handleSelect={this.handleSceneryRating}
          />
          <div className="button-group">
            <input id="submitButton" className="button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default ReviewFormContainer;
