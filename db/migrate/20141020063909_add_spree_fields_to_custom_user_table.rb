class AddSpreeFieldsToCustomUserTable < ActiveRecord::Migration
  def up
    add_column "user_tests", :spree_api_key, :string, :limit => 48
    add_column "user_tests", :ship_address_id, :integer
    add_column "user_tests", :bill_address_id, :integer
  end
end
