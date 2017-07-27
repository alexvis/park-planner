require 'rails_helper'

RSpec.describe Api::V1::VotesController, type: :controller do
  let!(:first_park) {Park.create(name: "My Name", state: "MI", link_url: "asdf.com")}
  let!(:first_user) {FactoryGirl.create(:user)}
  let!(:first_review) {Review.create(park_id: first_park.id, user_id: first_user.id, park_rating: 3)}

  describe "POST#create" do
    it "creates a new Vote" do
      post_json = {
        vote: {
          review_id: first_review.id, 
          user_id: first_user.id,
          vote: true
        }
      }.to_json

      expect{ post(:create, body: post_json) }.to change{ Vote.count }.by 1
    end

    it "returns the json with the result" do
      post_json = {
        vote: {
          review_id: first_review.id, 
          user_id: first_user.id,
          vote: true
        }
      }.to_json

      post(:create, body: post_json)
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["voting"]).to eq true

      post_json = {
        vote: {
          review_id: first_review.id, 
          user_id: first_user.id,
          vote: false
        }
      }.to_json

      post(:create, body: post_json)
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["voting"]).to eq false

      post_json = {
        vote: {
          review_id: first_review.id, 
          user_id: first_user.id,
          vote: nil
        }
      }.to_json

      post(:create, body: post_json)
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["voting"]).to eq nil 
    end
  end

  describe "GET#index" do
    it "should return nil initially " do

      get :index, params: {review_id: first_review.id, user_id: first_user.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["voting"]).to eq nil
    end

    it "should return true after an entry has been input" do
      post_json = {
        vote: {
          review_id: first_review.id, 
          user_id: first_user.id,
          vote: true
        }
      }.to_json

      expect{ post(:create, body: post_json)}.to change{ Vote.count }.by 1

      get :index, params: {review_id: first_review.id, user_id: first_user.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["voting"]).to eq true 
    end
  end
end
