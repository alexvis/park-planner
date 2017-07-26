import React, { Component } from 'react'

class ParkFormContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: '',
      name: '',
      description: '',
      state: '',
      img_url: '',
      link_url: '',
      avg_rating: '',
      dog_friendly_avg_rating: '',
      camping_avg_rating: '',
      playground_avg_rating: '',
      hiking_avg_rating: '',
      scenery_avg_rating: '',
      created_at: '',
      updated_at: ''>
    }
    this.props.addNewParks(formPayload);
  }



  render(){
    return(
      <form className="new-park-form callout" onSubmit={this.handleFormSubmit}>
        <TitleField
          content={this.state.articleTitle}
          label="Article Title"
          name="article-title"
          onChange={this.handleArticleTitle}
        />
        <BodyField
          content={this.state.articleBody}
          label="Article Body"
          name="article-body"
          onChange={this.handleArticleBody}
        />

        <div className="button-group">
          <button className="button" onClick={this.clearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>

    )
  }
}
