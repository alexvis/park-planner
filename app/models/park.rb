class Park < ApplicationRecord
  validates :name, presence: true
  validates :state, presence: true
  validates :link_url, presence: true
  validates :avg_rating,
    numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 },
    allow_nil: true
  validates :dog_friendly_avg_rating,
    numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 },
    allow_nil: true
  validates :camping_avg_rating,
    numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 },
    allow_nil: true
  validates :playground_avg_rating,
    numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 },
    allow_nil: true
  validates :hiking_avg_rating,
    numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 },
    allow_nil: true
  validates :scenery_avg_rating,
    numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 },
    allow_nil: true

  def self.search_name(park)
    if park
      where('name LIKE ?', "%#{park}%")
    else
      @parks = []
    end
  end

  def self.search_state(park)
    if park
      where('state LIKE ?', "%#{park}%")
    else
      @state = []
    end
  end

  def self.search_dog(park)
    if park
      where('dog_friendly_avg_rating LIKE ?', "%#{park}%")
    else
      @dog = ''
    end
  end

  has_many :reviews
  has_many :follows
  has_many :users, through: :follows
end
