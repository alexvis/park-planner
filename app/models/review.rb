class Review < ApplicationRecord
  validates :park_rating,
    presence: true,
    numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
  validates :dog_friendly_rating,
    numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 },
    allow_nil: true
  validates :camping_rating,
    numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 },
    allow_nil: true
  validates :playground_rating,
    numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 },
    allow_nil: true
  validates :hiking_rating,
    numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 },
    allow_nil: true
  validates :scenery_rating,
    numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 },
    allow_nil: true

  belongs_to :park
  belongs_to :user
end
