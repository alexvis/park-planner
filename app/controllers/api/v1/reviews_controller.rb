require 'pry'

class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    park = Park.find(params[:park_id])
    reviews = park.reviews
    review.sort_by! { |r| (r.num_upvotes - r.num_downvotes) }
    render json: reviews
  end

  def create
    data = JSON.parse(request.body.read)
    review = Review.new(data)
    review.save
    render json: data
  end
end
