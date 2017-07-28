# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ParkSeeder.seed!
#
# u1 = User.create(email: 'jessedanger@gmail.com', first_name: 'Jon', last_name: 'Smith', state: 'MA', user_name: 'Jdog', password: 'password', password_confirmation: 'password', profile_photo: '', role: 'admin')
# u2 = User.create(email: 'chamberlain.jesse@gmail.com', first_name: 'J', last_name: 'Smithy', state: 'MA', user_name: 'Smithy', password: 'password', password_confirmation: 'password', profile_photo: '', role: 'member')
# r1 = Review.create(comment: "good park", park_rating: 4, park_id: , user_id: )
# r2 = Review.create(comment: "best park", park_rating: 5, park_id: , user_id: )
# p1 = Park.create(name: "Yosamite", state: "CA", link_url: "www.park.com")
# p2 = Park.create(name: "Yellowstone", state: "CA", link_url: "www.YS.com")
#
USERS = [
  {
    email: 'jessedanger@gmail.com',
    first_name: 'Jesse',
    last_name: 'Danger',
    state: 'MA',
    user_name: 'JDanger',
    password: 'password',
    password_confirmation: 'password',
    profile_photo: '',
    role: 'admin'
  },
  {
    email: 'chamberlain.jesse@gmail.com',
    first_name: 'Jesse',
    last_name: 'Chamberlain',
    state: 'VT',
    user_name: 'JChamberlain',
    password: 'password',
    password_confirmation: 'password',
    profile_photo: '',
    role: 'member'
  },
  {
    email: 'test@gmail.com',
    first_name: 'Bill',
    last_name: 'Watterson',
    state: 'VT',
    user_name: 'CandH',
    password: 'password',
    password_confirmation: 'password',
    profile_photo: '',
    role: 'member'
  }
].freeze

PARKS = [
  {
    name: "Yosemite",
    description: "It's pretty famous",
    state: "CA",
    link_url: "https://www.nps.gov/yose/index.htm"
  },
  {
    name: "Adams",
    description: "It's Adams park",
    state: "MA",
    link_url: "https://www.nps.gov/adam/index.htm"
  }
].freeze


PARKS.each do |p|
  park = Park.find_or_initialize_by(name: p[:name])
  park.assign_attributes(p)
  park.save!
end

USERS.each do |p|
  user =User.find_or_initialize_by(email: p[:email])
  user.assign_attributes(p)
  user.save!
end

REVIEWS = [
  {
    park_rating: 5,
    park_id: Park.find_by(name: "Yosemite").id,
    user_id: User.find_by(email: 'jessedanger@gmail.com').id,
    dog_friendly_rating: 5,
    playground_rating: 5,
    camping_rating: 5,
    hiking_rating: 5,
    scenery_rating: 5
  },
  {
    park_rating: 4,
    park_id: Park.find_by(name: "Yosemite").id,
    user_id: User.find_by(email: 'chamberlain.jesse@gmail.com').id,
    dog_friendly_rating: 4,
    playground_rating: 4,
    camping_rating: 4,
    hiking_rating: 4,
    scenery_rating: 4
  },
  {
    park_rating: 3,
    park_id: Park.find_by(name: "Yosemite").id,
    user_id: User.find_by(email: 'test@gmail.com').id,
    dog_friendly_rating: 2,
    playground_rating: 4,
    camping_rating: 1,
    hiking_rating: 4,
    scenery_rating: 3
  }
].freeze

REVIEWS.each do |park|
  review = Review.find_or_initialize_by(user_id: User.find_by(id: park[:user_id]).id)
  review.assign_attributes(park)
  review.save!
end

# STATES.each do |state_info|
#   abb, full_name = state_info
#   State.find_or_create_by!(abbreviation: abb, full_name: full_name)
# end
#
# cities.each do |city|
#   City.find_or_create_by!("city": city[:city], "body": city[:body], "latitude": city[:latitude], "longitude": city[:longitude], "population": city[:population], "state_id": State.find_by(full_name: city[:state]).id)
# end
