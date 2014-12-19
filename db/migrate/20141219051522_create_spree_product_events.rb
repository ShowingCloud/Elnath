class CreateSpreeProductEvents < ActiveRecord::Migration
  def change
    create_table :spree_product_events do |t|

      t.timestamps
    end
  end
end
