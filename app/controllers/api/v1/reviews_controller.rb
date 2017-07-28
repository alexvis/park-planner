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

    # Update Park with the new ratings
    park = Park.find(review.park_id)

    if park.avg_rating.nil?
      park.avg_rating = review.park_rating
    else
      park.avg_rating += (review.park_rating - park.avg_rating) / (park.num_ratings+1).to_f
    end
    park.num_ratings += 1

    if review.dog_friendly_rating
      if park.dog_friendly_avg_rating.nil?
        park.dog_friendly_avg_rating = review.dog_friendly_rating
      else
        park.dog_friendly_avg_rating += (review.dog_friendly_rating - park.dog_friendly_avg_rating) / (park.num_dog_ratings+1).to_f
      end
      park.num_dog_ratings += 1
    end

    if review.camping_rating
      if park.camping_avg_rating.nil?
        park.camping_avg_rating = review.camping_rating
      else
        park.camping_avg_rating += (review.camping_rating - park.camping_avg_rating) / (park.num_camping_ratings+1).to_f
      end
      park.num_camping_ratings += 1
    end

    if review.playground_rating
      if park.playground_avg_rating.nil?
        park.playground_avg_rating = review.playground_rating
      else
        park.playground_avg_rating += (review.playground_rating - park.playground_avg_rating) / (park.num_playground_ratings+1).to_f
      end
      park.num_playground_ratings += 1
    end

    if review.hiking_rating
      if park.hiking_avg_rating.nil?
        park.hiking_avg_rating = review.hiking_rating
      else
        park.hiking_avg_rating += (review.hiking_rating - park.hiking_avg_rating) / (park.num_hiking_ratings+1).to_f
      end
      park.num_hiking_ratings += 1
    end

    if review.scenery_rating
      if park.scenery_avg_rating.nil?
        park.scenery_avg_rating = review.scenery_rating
      else
        park.scenery_avg_rating += (review.scenery_rating - park.scenery_avg_rating) / (park.num_scenery_ratings+1).to_f
      end
      park.num_scenery_ratings += 1
    end

    park.save


    data = {
      review: data,
      park: park
    }
    render json: data
  end
end
