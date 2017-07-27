class ParkMailer < ApplicationMailer
  def new_review(park, followers)
    @park = park
    @followers = followers.map { |f| f.email } 
    mail(to: @followers, subject: "New Review for #{park.name}")
  end
end
