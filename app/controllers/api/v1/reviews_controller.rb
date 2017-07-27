class Api::V1::ReviewsController < ApplicationController
  def index
    park = Park.find(params[:park_id])
    reviews = park.reviews
    review.sort_by! { |r| (r.num_upvotes - r.num_downvotes) }
    render json: reviews
  end
end
