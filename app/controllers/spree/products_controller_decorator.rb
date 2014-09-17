Spree::ProductsController.class_eval do
	before_action :write_recently_visited, only: :show

	def write_recently_visited
		load_product
		session[:recently_visited] = Array(session[:recently_visited]).insert(0, @product.id).uniq.take(5)
	end

end
