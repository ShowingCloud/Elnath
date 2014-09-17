module Spree
	ProductsController.class_eval do
		before_action :write_recently_visited, only: :show

		def favorites
			@favorites = Product.active(current_currency).where(:id => session[:favorite])
		end

		def add_favorite
			session[:favorite] = Array(session[:favorite]).push(params[:product_id].to_i).uniq
			redirect_to "/favorites"
		end

		def remove_favorite
			session[:favorite] = Array(session[:favorite]).delete(params[:product_id].to_i)
			redirect_to "/favorites"
		end


		private

		def	write_recently_visited
			load_product
			session[:recently_visited] = Array(session[:recently_visited]).insert(0, @product.id).uniq.take(5)
		end

	end
end