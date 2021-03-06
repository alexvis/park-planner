# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170727201443) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "follows", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "park_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["park_id"], name: "index_follows_on_park_id"
    t.index ["user_id"], name: "index_follows_on_user_id"
  end

  create_table "parks", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.string "state", null: false
    t.string "img_url"
    t.string "link_url", null: false
    t.float "avg_rating"
    t.float "dog_friendly_avg_rating"
    t.float "camping_avg_rating"
    t.float "playground_avg_rating"
    t.float "hiking_avg_rating"
    t.float "scenery_avg_rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "num_ratings", default: 0
    t.integer "num_dog_ratings", default: 0
    t.integer "num_camping_ratings", default: 0
    t.integer "num_playground_ratings", default: 0
    t.integer "num_hiking_ratings", default: 0
    t.integer "num_scenery_ratings", default: 0
  end

  create_table "reviews", force: :cascade do |t|
    t.string "comment"
    t.integer "park_rating", null: false
    t.integer "dog_friendly_rating"
    t.integer "playground_rating"
    t.integer "camping_rating"
    t.integer "hiking_rating"
    t.integer "scenery_rating"
    t.bigint "park_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "num_upvotes", default: 0
    t.integer "num_downvotes", default: 0
    t.index ["park_id"], name: "index_reviews_on_park_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "state", null: false
    t.string "user_name", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_photo"
    t.string "role", default: "member", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "votes", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "review_id"
    t.boolean "vote"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_votes_on_review_id"
    t.index ["user_id"], name: "index_votes_on_user_id"
  end

end
