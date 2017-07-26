class Api::V1::ReviewsController < ApplicationController
  def index
    park = Park.find(params[:park_id])
    reviews = park.reviews
    render json: reviews
  end

  def create
      data = JSON.parse(response.body.read)
      review = Review.new(data)

     if review.save
       render json: data
     else
      #  render action: 'new'
     end
  end
end
