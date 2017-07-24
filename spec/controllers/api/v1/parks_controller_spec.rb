require "rails_helper"

RSpec.describe Api::V1::ParksController, type: :controller do
  let!(:first_park) { Park.create(
    name: "Yosamite",
    description: "Test Park",
    state: "CA",
    img_url: "http://www.yosamite.com/image",
    link_url: "http://www.yosamite.com/image",
    avg_rating: 5,
    dog_friendly_avg_rating: 5,
    camping_avg_rating: 5,
    playground_avg_rating: 5,
    hiking_avg_rating: 5,
    scenery_avg_rating: 5
    ) }

  describe "GET#index" do
    it "should return details about a park" do

      get :show, params: {id: first_park.id}
      returned_json = JSON.parse(response.body)
      park = returned_json["park"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 1
      expect(park["name"]).to eq "Yosamite"
      expect(park["description"]).to eq "Test Park"
      expect(park["state"]).to eq "CA"
      expect(park["img_url"]).to eq  "http://www.yosamite.com/image"
      expect(park["link_url"]).to eq "http://www.yosamite.com/image"
      expect(park["avg_rating"]).to eq  5
      expect(park["dog_friendly_avg_rating"]).to eq  5
      expect(park["camping_avg_rating"]).to eq  5
      expect(park["playground_avg_rating"]).to eq  5
      expect(park["hiking_avg_rating"]).to eq  5
      expect(park["scenery_avg_rating"]).to eq  5

    end
  end
end
