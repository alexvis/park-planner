class User <ApplicationRecord
  validates :first_name, precense: true
  validates :last_name, precense: true
  validates :email, precense: true
  validates :state, precense: true

  
end
