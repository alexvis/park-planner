require_relative '../models/park'
class ReviewSeeder
  @park = Park.first.id
  @user = User.first.id

  REVIEWS = [
    {
      park_rating: 5.0,
      park_id: @park,
      user_id: @user
    }
  ].freeze

  def self.seed!
    REVIEWS.each do |p|
      review = Review.find_or_initialize_by(park_id: @park, user_id: @user)
      review.assign_attributes(p)
      review.save!
    end
  end
end
