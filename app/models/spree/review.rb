class Spree::Review < ActiveRecord::Base
	validates_presence_of :name
end
