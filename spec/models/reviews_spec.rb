require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should have_valid(:comment).when("I love this Park") }
  it { should have_valid(:comment).when(nil, "") }


  it { should have_valid(:park_rating).when(3) }
  it { should have_valid(:park_rating).when(1) }
  it { should have_valid(:park_rating).when(4) }
  it { should have_valid(:park_rating).when(nil) }
  it { should_not have_valid(:park_rating).when(-1) }
  it { should_not have_valid(:park_rating).when(6) }


  it { should have_valid(:dog_friendly_rating).when(3) }
  it { should have_valid(:dog_friendly_rating).when(1) }
  it { should have_valid(:dog_friendly_rating).when(4) }
  it { should have_valid(:dog_friendly_rating).when(nil) }
  it { should_not have_valid(:dog_friendly_rating).when(-1) }
  it { should_not have_valid(:dog_friendly_rating).when(6) }


  it { should have_valid(:camping_rating).when(3) }
  it { should have_valid(:camping_rating).when(1) }
  it { should have_valid(:camping_rating).when(4) }
  it { should have_valid(:camping_rating).when(nil) }
  it { should_not have_valid(:camping_rating).when(-1) }
  it { should_not have_valid(:camping_rating).when(6) }


  it { should have_valid(:playground_rating).when(3) }
  it { should have_valid(:playground_rating).when(1) }
  it { should have_valid(:playground_rating).when(4) }
  it { should have_valid(:playground_rating).when(nil) }
  it { should_not have_valid(:playground_rating).when(-1) }
  it { should_not have_valid(:playground_rating).when(6) }


  it { should have_valid(:hiking_rating).when(3) }
  it { should have_valid(:hiking_rating).when(1) }
  it { should have_valid(:hiking_rating).when(4) }
  it { should have_valid(:hiking_rating).when(nil) }
  it { should_not have_valid(:hiking_rating).when(-1) }
  it { should_not have_valid(:hiking_rating).when(6) }

  it { should have_valid(:scenery_rating).when(3) }
  it { should have_valid(:scenery_rating).when(1) }
  it { should have_valid(:scenery_rating).when(4) }
  it { should have_valid(:scenery_rating).when(nil) }
  it { should_not have_valid(:scenery_rating).when(-1) }
  it { should_not have_valid(:scenery_rating).when(6) }


end
