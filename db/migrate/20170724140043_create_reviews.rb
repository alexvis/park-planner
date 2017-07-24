class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :comment
      t.integer :park_rating, null: false
      t.integer :dog_friendly_rating
      t.integer :playground_rating
      t.integer :camping_rating
      t.integer :hiking_rating
      t.integer :scenery_rating
      t.belongs_to :park
      t.belongs_to :user

      t.timestamps
    end
  end
end
