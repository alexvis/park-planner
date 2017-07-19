class User < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :state, presence: true
  validates :user_name, presence: true

  devise :database_authenticatable,
  devise :registerable,
  devise :recoverable,
  devise :rememberable,
  devise :trackable,
  devise :validatable
end
