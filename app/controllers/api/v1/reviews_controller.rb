require 'pry'

class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    park = Park.find(params[:park_id])
    reviews = park.reviews
    reviews = reviews.sort_by { |r| (r.num_downvotes - r.num_upvotes) }
    render json: reviews
  end

  def create
    data = JSON.parse(request.body.read)
    review = Review.new(data)
    review.save
    render json: data
  end
end
