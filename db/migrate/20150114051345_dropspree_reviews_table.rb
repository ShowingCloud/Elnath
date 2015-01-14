class DropspreeReviewsTable < ActiveRecord::Migration
  def up
	  drop_table :spree_reviews
	end
end
