require "rails_helper"

feature "profile photo" do
  scenario "user uploads a profile photo" do
    user = FactoryGirl.create(:user)
    visit root_path
    click_link 'Sign In'
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Sign In'

    attach_file "user_profile_photo", "#{Rails.root}/spec/support/images/photo.png"
    click_button "Upload Picture"

    expect(page).to have_css("img[src*='photo.png']")
  end
end
