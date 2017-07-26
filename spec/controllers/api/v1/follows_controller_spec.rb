require 'rails_helper'

RSpec.describe Api::V1::FollowsController, type: :controller do
  let!(:first_park) {Park.create(name: "My Name", state: "MI", link_url: "asdf.com")}
  let!(:first_user) {FactoryGirl.create(:user)}

  describe "POST#create" do
    it "creates a new Follow" do
      post_json = {
        follow: {
          park_id: first_park.id,
          user_id: first_user.id
        }
      }.to_json

      expect{ post(:create, body: post_json) }.to change{ Follow.count }.by 1
    end

    it "returns the json with the result" do
      post_json = {
        follow: {
          park_id: first_park.id,
          user_id: first_user.id
        }
      }.to_json

      post(:create, body: post_json)
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["following"]).to eq true
    end

    it "deletes an existing Follow" do
      post_json = {
        follow: {
          park_id: first_park.id,
          user_id: first_user.id
        }
      }.to_json

      expect{ post(:create, body: post_json) }.to change{ Follow.count }.by 1
      expect{ post(:create, body: post_json) }.to change{ Follow.count }.by -1

      returned_json = JSON.parse(response.body)
      expect(returned_json["following"]).to eq false
    end
  end

  describe "GET#show" do
    it "should return false initially " do

      get :index, params: {park_id: first_park.id, user_id: first_user.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["following"]).to eq false
    end

    it "should return true after an entry has been input" do
      post_json = {
        follow: {
          park_id: first_park.id,
          user_id: first_user.id
        }
      }.to_json

      expect{ post(:create, body: post_json)}.to change{ Follow.count }.by 1

      get :index, params: {park_id: first_park.id, user_id: first_user.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["following"]).to eq true 
    end
  end
end
