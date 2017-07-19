require 'spec_helper'

feature 'sign up' , %Q{
  As an unathenticated user
  I want to sign up
  So that I can plan my parks
} do

  scenario 'specifying valid and required information' do
    visit root_path
    click_link 'Sign Up'
    fill_in 'First Name', with: 'Jon'
    fill_in 'Last Name', with: 'Smith'
    fill_in 'Email', with: 'jon@smith.com'
    fill_in 'State', with: 'MA'
    fill_in 'Password', with: 'password'
    fill_in 'Password Confirmation', with: 'password'
    click_button 'Sign Up'

    expect(page).to have_content("You're in!")
    expect(page).to have_content("Sign Out")
  end

  scenario 'required information is not supplied'

  scenario 'password confirmation does not match confirmation'
end
