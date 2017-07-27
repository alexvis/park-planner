require 'pry'

class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    park = Park.find(params[:park_id])
    reviews = park.reviews
    render json: reviews
  end

  def create
    data = JSON.parse(request.body.read)
    review = Review.new(data)
    review.save

    park = Park.find(data.park_id)
    followers = park.users
    ParkMailer.new_review(park, followers).deliver_later 
    render json: data
  end
end
