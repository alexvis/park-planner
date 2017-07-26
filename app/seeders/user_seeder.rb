class UserSeeder
  USERS = [
    {
      email: 'jessedanger@gmail.com',
      first_name: 'Jon',
      last_name: 'Smith',
      state: 'MA',
      user_name: 'Jdog',
      password: 'password',
      password_confirmation: 'password',
      profile_photo: ''
    }
  ].freeze

  def self.seed!
    USERS.each do |p|
      user =User.find_or_initialize_by(email: p[:email])
      user.assign_attributes(p)
      user.save!
    end
  end
end
