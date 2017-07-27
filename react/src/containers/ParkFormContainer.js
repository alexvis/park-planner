import React, { Component } from 'react'
import TextField from '../components/TextField'
import StarDropdown from '../components/StarDropdown'

class ParkFormContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      nameError: '',
      stateError: '',
      linkError: '',
      id: '',
      name: '',
      description: '',
      state: '',
      imgUrl: '',
      linkUrl: '',
      avgRating: '',
      dogFriendlyAvgRating: '',
      campingAvgRating: '',
      playgroundAvgRating: '',
      hikingAvgRating: '',
      sceneryAvgRating: '',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.handleParkName = this.handleParkName.bind(this);
    this.handleParkDescription = this.handleParkDescription.bind(this);
    this.handleParkState = this.handleParkState.bind(this);
    this.handleParkImg = this.handleParkImg.bind(this);
    this.handleParkLink = this.handleParkLink.bind(this);
    this.handleParkAveRanking = this.handleParkAveRanking.bind(this);
    this.handleDogFriendlyAvgRating = this.handleDogFriendlyAvgRating.bind(this);
    this.handlePlaygroundAvgRating = this.handlePlaygroundAvgRating.bind(this);
    this.handleHikingAvgRating = this.handleHikingAvgRating.bind(this);
    this.handleSceneryAvgRating = this.handleSceneryAvgRating.bind(this);
    this.handleCampingAvgRating = this.handleCampingAvgRating.bind(this);
    this.validateNameSelection = this.validateNameSelection.bind(this);
    this.validateStateSelection = this.validateStateSelection.bind(this);
    this.validateLinkSelection = this.validateLinkSelection.bind(this);
  }



  validateNameSelection(selection) {
      if (selection === '') {
        this.setState({nameError: "Park Name can't be empty!"})
        return(false)
    }else{
      this.setState({nameError: ''})
      return (true)
    }
  }

  validateStateSelection(selection) {
      if (selection === '') {
        this.setState({stateError: "State can't be empty!"})
        return(false)
    }else{
      this.setState({stateError: ''})
      return (true)
    }
  }

  validateLinkSelection(selection) {
      if (selection === '') {
        this.setState({linkError: "Park webside can't be empty!"})
    }else{
      this.setState({linkError: ''})
    }
    return this.state.linkError
  }

    handleMealSelection(event) {
    this.validateMealSelection(event.target.value)
  }

handleParkName(event){
  this.setState({name: event.target.value})
  console.log(this.state.name)
}

 handleParkDescription(event){
  this.setState({description: event.target.value})
  console.log(this.state.description)
}

handleParkState(event){
  this.setState({state: event.target.value})
  console.log(this.state.state)
}
handleParkImg(event){
  this.setState({imgaUrl: event.target.value})
  console.log(this.state.imgUrl)
}
handleParkLink(event){
  this.setState({linkUrl: event.target.value})
  console.log(this.state.linkUrl)
}
handleParkAveRanking(event){
  this.setState({avgRating: event.target.value})
  console.log(this.state.avgRating)
}
handleDogFriendlyAvgRating(event){
  this.setState({dogFriendlyAvgRating: event.target.value})
  console.log(this.state.dogFriendlyAvgRating)
}

handlePlaygroundAvgRating(event){
  this.setState({playgroundAvgRating: event.target.value})
  console.log(this.state.playgroundAvgRating)
}

handleHikingAvgRating(event){
  this.setState({hikingAvgRating: event.target.value})
  console.log(this.state.hikingAvgRating)
}
handleSceneryAvgRating(event){
  this.setState({sceneryAvgRating: event.target.value})
  console.log(this.state.sceneryAvgRating)
}

handleCampingAvgRating(event){
  this.setState({campingAvgRating: event.target.value})
  console.log(this.state.campingAvgRating)
}



  handleFormSubmit(event) {
    event.preventDefault();
    if(
      this.validateNameSelection(this.state.name) & this.validateStateSelection(this.state.state) &
      this.validateLinkSelection(this.state.linkUrl)
    )



    {
    let formPayload = {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      state: this.state.state,
      img_url: this.state.imgUrl,
      link_url: this.state.linkUrl,
      avg_rating: this.state.avgRating,
      dog_friendly_avg_rating: this.state.dogFriendlyAvgRating,
      camping_avg_rating: this.state.campingAvgRating,
      playground_avg_rating: this.state.playgroundAvgRating,
      hiking_avg_rating: this.state.hikingAvgRating,
      scenery_avg_rating: this.state.sceneryAvgRating,
    };
    this.props.addNewPark(formPayload);
  }
  };



  render(){
    return(
      <form className="new-park-form callout" onSubmit={this.handleFormSubmit}>
          {this.state.nameError}
        <TextField
          content={this.state.name}
          label="Name"
          name="name"
          handleChange={this.handleParkName}
        />

        <TextField
          content={this.state.description}
          label="Description"
          name="description"
          handleChange={this.handleParkDescription}
        />
         {this.state.stateError}
        <TextField
          content={this.state.state}
          label="State"
          name="state"
          handleChange={this.handleParkState}
        />

        <TextField
          content={this.state.img_url}
          label="Pincture"
          name="img_url"
          handleChange={this.handleParkImge}
        />
        {this.state.linkError}
        <TextField
          content={this.state.linkUrl}
          label="Park Link"
          name="linkUrl"
          handleChange={this.handleParkLink}
        />

        <StarDropdown
            label={'How good is this Park?'}
            rating={this.state.avgRating}
            handleSelect={this.handleParkAveRanking}
          />

          <StarDropdown
              label={'How friendly is this Park for Dogs?'}
              rating={this.state.dogFriendlyAvgRating}
              handleSelect={this.handleDogFriendlyAvgRating}
            />

        <StarDropdown
            label={'How good is this park for camping?'}
            rating={this.state.campingAvgRating}
            handleSelect={this.handleCampingAvgRating}
          />

          <StarDropdown
              label={'How good is this park playgroun?'}
              rating={this.state.playgroundAvgRating}
              handleSelect={this.handlePlaygroundAvgRating}
            />

          <StarDropdown
              label={'How good is this park for hiking?'}
              rating={this.state.hikingAvgRating}
              handleSelect={this.handleHikingAvgRating}
            />

            <StarDropdown
                label={'How nice is this park looks?'}
                rating={this.state.sceneryAvgRatin}
                handleSelect={this.handleSceneryAvgRating}
              />




        <div className="button-group">
          <button className="button" onClick={this.clearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>

    )
  }
}

export default ParkFormContainer;
