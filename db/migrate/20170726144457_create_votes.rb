class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.belongs_to :users
      t.belongs_to :reviews
      t.boolean :vote
      t.timestamps
    end
  end
end
