class AddVotesToReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :num_upvotes, :integer, default: 0
    add_column :reviews, :num_downvotes, :integer, default: 0
  end
end
