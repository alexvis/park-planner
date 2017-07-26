require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_valid(:first_name).when('Jon', 'Sam')}
  it { should_not have_valid(:first_name).when(nil, '')}

  it { should have_valid(:last_name).when('Smith', 'Jackson')}
  it { should_not have_valid(:last_name).when(nil, '')}

  it { should have_valid(:email).when('user@example.com', 'other@email.com')}
  it { should_not have_valid(:email).when(nil, '', 'urser', 'users@')}

  it { should have_valid(:user_name).when('Smith', 'Jackson')}
  it { should_not have_valid(:user_name).when(nil, '')}

  it { should have_valid(:state).when('MA', 'VT')}
  it { should_not have_valid(:state).when(nil, '')}

  it { should have_valid(:role).when('member', 'admin')}
  it { should_not have_valid(:role).when(nil, '')}
  
  it "is not an admin if the role is not admin" do
    user = FactoryGirl.create(:user, role: "member")
    expect(user.admin?).to eq(false)
  end

  it "is an admin if the role is admin" do
    user = FactoryGirl.create(:user, role: "admin")
    expect(user.admin?).to eq(true)
  end

  it 'has a matching password confirmation for the password' do
    user = User.new
    user.password = 'password'
    user.password_confirmation = 'whatever'

    expect(user).to_not be_valid
    expect(user.errors[:password_confirmation]).to_not be_blank
  end


end
