class CreateSpreeFeedbackEvents < ActiveRecord::Migration
  def change
    create_table :spree_feedback_events do |t|
      t.integer :user_id
      t.integer :review_id
      t.text :comment

      t.timestamps
    end
  end
end
