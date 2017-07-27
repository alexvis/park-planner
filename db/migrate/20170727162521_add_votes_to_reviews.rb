class AddVotesToReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :num_upvotes, :integer
    add_column :reviews, :num_downvotes, :integer
  end
end
