class AddNumRatingsToParks < ActiveRecord::Migration[5.1]
  def change
    add_column :parks, :num_ratings, :integer, default: 0
    add_column :parks, :num_dog_ratings, :integer, default: 0
    add_column :parks, :num_camping_ratings, :integer, default: 0
    add_column :parks, :num_playground_ratings, :integer, default: 0
    add_column :parks, :num_hiking_ratings, :integer, default: 0
    add_column :parks, :num_scenery_ratings, :integer, default: 0
  end
end
