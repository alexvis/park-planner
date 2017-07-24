require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do
  #Reviews
  let!(:first_review) { Review.create(
    comment: "I love this Park",
    park_rating: 5,
    dog_friendly_rating: 2,
    playground_rating: 4,
    camping_rating: 5,
    hiking_rating: nil,
    scenery_rating: nil,
    park_id: first_park.id
  ) }
  let!(:second_review) { Review.create(
    comment: "I hate this Park",
    park_rating: 1,
    dog_friendly_rating: 3,
    playground_rating: nil,
    camping_rating: nil,
    hiking_rating: 5,
    scenery_rating: 2,
    park_id: second_park.id
  ) }

  #Parks
  let!(:first_park) { Park.create(
    name: "Yosamite",
    description: "Test Park",
    state: "CA",
    img_url: "http://www.yosamite.com/image",
    link_url: "http://www.yosamite.com",
    avg_rating: 5,
    dog_friendly_avg_rating: 5,
    camping_avg_rating: 5,
    playground_avg_rating: 5,
    hiking_avg_rating: 5,
    scenery_avg_rating: 5
  ) }
  let!(:second_park) { Park.create(
    name: "Yellowstone",
    description: "Another Test Park",
    state: "WY",
    img_url: "http://www.yellowstone.com/image",
    link_url: "http://www.yellowstone.com",
    avg_rating: 1,
    dog_friendly_avg_rating: 1,
    camping_avg_rating: 1,
    playground_avg_rating: 1,
    hiking_avg_rating: 1,
    scenery_avg_rating: 1
  ) }


  describe "GET#index" do
    it "should return details about a review" do

      get :index, params: {park_id: first_review.park_id}
      returned_json = JSON.parse(response.body)
      review = returned_json["review"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 1

      expect(first_review["comment"]).to eq "I love this Park"
      expect(second_review["comment"]).to eq "I hate this Park"

      expect(first_review["park_rating"]).to eq  5
      expect(second_review["park_rating"]).to eq  1

      expect(first_review["dog_friendly_rating"]).to eq  2
      expect(second_review["dog_friendly_rating"]).to eq  3

      expect(first_review["playground_rating"]).to eq  4
      expect(second_review["playground_rating"]).to eq  nil

      expect(first_review["camping_rating"]).to eq  5
      expect(second_review["camping_rating"]).to eq  nil

      expect(first_review["hiking_rating"]).to eq nil
      expect(second_review["hiking_rating"]).to eq 5

      expect(first_review["scenery_rating"]).to eq nil
      expect(second_review["scenery_rating"]).to eq 2
    end
  end
end
