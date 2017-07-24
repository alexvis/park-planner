class Api::V1::ReviewsController < ApplicationController
  def index
    park = Park.find(params[:park_id])
    reviews = park.reviews
    render json: reviews
  end
end
