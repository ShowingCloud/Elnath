class AddMessageToOrders < ActiveRecord::Migration
  def change
	add_column :spree_orders, :message, :string
  end
end
