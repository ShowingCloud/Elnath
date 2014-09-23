module Spree
	OrdersController.class_eval do
		def index
			@orders = Order.find_by_user_id!(spree_current_user.id)
		end
	end
end
