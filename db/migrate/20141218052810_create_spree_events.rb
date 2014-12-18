class CreateSpreeEvents < ActiveRecord::Migration
  def change
    create_table :spree_events do |t|
      t.integer :product_id
      t.string :name
      t.string :location
      t.text :title
      t.text :description
      t.datetime :created_at
      t.integer :user_id

      t.timestamps
    end
  end
end
