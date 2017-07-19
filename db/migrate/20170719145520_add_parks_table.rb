class AddParksTable < ActiveRecord::Migration[5.1]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.string :description
      t.string :state, null: false
      t.string :img_url
      t.string :link_url, null: false
      t.integer :avg_rating, null: false, default: 0
      t.integer :dog_friendly_avg_rating, null: false, default: 0
      t.integer :camping_avg_rating, null: false, default: 0
      t.integer :playground_avg_rating, null: false, default: 0
      t.integer :hiking_avg_rating, null: false, default: 0
      t.integer :scenery_avg_rating, null: false, default: 0

      t.timestamps
    end
  end
end
