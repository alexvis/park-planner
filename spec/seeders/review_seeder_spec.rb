require "rails_helper"

RSpec.describe ReviewSeeder do
  it "doesn't create duplicate records on multiple runs" do
    ParkSeeder.seed!
    UserSeeder.seed!
    ReviewSeeder.seed!
    initial_count = Review.count
    ReviewSeeder.seed!
    expect(Review.count).to eq(initial_count)
  end
end
