class CreateSpreeReviews < ActiveRecord::Migration
  def change
    create_table :spree_reviews do |t|
      t.string :name
      t.text :title
      t.text :description
      t.integer :product_id
      t.integer :user_id

      t.timestamps
    end
  end
end
