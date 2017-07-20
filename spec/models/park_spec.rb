require 'rails_helper'

RSpec.describe Park, type: :model do
  it { should have_valid(:name).when("Yosemite National Park") }
  it { should_not have_valid(:name).when(nil, "") }


  it { should have_valid(:state).when("CA") }
  it { should_not have_valid(:state).when(nil, "") }


  it { should have_valid(:link_url).when("https://www.nps.gov/yose/index.htm") }
  it { should_not have_valid(:link_url).when(nil, "") }


  it { should have_valid(:avg_rating).when(3) }
  it { should have_valid(:avg_rating).when(1.2) }
  it { should have_valid(:avg_rating).when(4.562) }
  it { should have_valid(:avg_rating).when(nil) }
  it { should_not have_valid(:avg_rating).when(-1) }
  it { should_not have_valid(:avg_rating).when(6) }


  it { should have_valid(:dog_friendly_avg_rating).when(3) }
  it { should have_valid(:dog_friendly_avg_rating).when(1.2) }
  it { should have_valid(:dog_friendly_avg_rating).when(4.562) }
  it { should have_valid(:dog_friendly_avg_rating).when(nil) }
  it { should_not have_valid(:dog_friendly_avg_rating).when(-1) }
  it { should_not have_valid(:dog_friendly_avg_rating).when(6) }


  it { should have_valid(:camping_avg_rating).when(3) }
  it { should have_valid(:camping_avg_rating).when(1.2) }
  it { should have_valid(:camping_avg_rating).when(4.562) }
  it { should have_valid(:camping_avg_rating).when(nil) }
  it { should_not have_valid(:camping_avg_rating).when(-1) }
  it { should_not have_valid(:camping_avg_rating).when(6) }


  it { should have_valid(:playground_avg_rating).when(3) }
  it { should have_valid(:playground_avg_rating).when(1.2) }
  it { should have_valid(:playground_avg_rating).when(4.562) }
  it { should have_valid(:playground_avg_rating).when(nil) }
  it { should_not have_valid(:playground_avg_rating).when(-1) }
  it { should_not have_valid(:playground_avg_rating).when(6) }


  it { should have_valid(:hiking_avg_rating).when(3) }
  it { should have_valid(:hiking_avg_rating).when(1.2) }
  it { should have_valid(:hiking_avg_rating).when(4.562) }
  it { should have_valid(:hiking_avg_rating).when(nil) }
  it { should_not have_valid(:hiking_avg_rating).when(-1) }
  it { should_not have_valid(:hiking_avg_rating).when(6) }

  it { should have_valid(:scenery_avg_rating).when(3) }
  it { should have_valid(:scenery_avg_rating).when(1.2) }
  it { should have_valid(:scenery_avg_rating).when(4.562) }
  it { should have_valid(:scenery_avg_rating).when(nil) }
  it { should_not have_valid(:scenery_avg_rating).when(-1) }
  it { should_not have_valid(:scenery_avg_rating).when(6) }


end
