class ChangeRatingsFromIntToFloat < ActiveRecord::Migration[5.1]
  def up
    change_column :parks, :avg_rating, :float
    change_column :parks, :dog_friendly_avg_rating, :float
    change_column :parks, :camping_avg_rating, :float
    change_column :parks, :playground_avg_rating, :float
    change_column :parks, :hiking_avg_rating, :float
    change_column :parks, :scenery_avg_rating, :float
  end

  def down
    change_column :parks, :avg_rating, :integer
    change_column :parks, :dog_friendly_avg_rating, :integer
    change_column :parks, :camping_avg_rating, :integer
    change_column :parks, :playground_avg_rating, :integer
    change_column :parks, :hiking_avg_rating, :integer
    change_column :parks, :scenery_avg_rating, :integer
  end
end
