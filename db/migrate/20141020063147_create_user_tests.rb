class CreateUserTests < ActiveRecord::Migration
  def change
    create_table :user_tests do |t|
      t.string :name
      t.string :password
      t.string :email

      t.timestamps
    end
  end
end
