class AddAttributesToUsers < ActiveRecord::Migration
  def change
	add_column :spree_users, :nickname, :string
	add_column :spree_users, :gender, :string
	add_column :spree_users, :birthday, :string
	add_column :spree_users, :cellphone, :string
	add_column :spree_users, :city, :string
	add_column :spree_users, :passwd_hint_question, :string
	add_column :spree_users, :passwd_hint_answer, :string
  end
end
