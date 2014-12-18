class Spree::Admin::EventsController < Spree::Admin::ResourceController
  helper Spree::EventsHelper
	
	def index
	  @events = collection
	end

	def edit
	  return if @event.product
  	flash[:error] = Spree.t(:error_no_product)
	  redirect_to admin_events_path
	end

	private

	def collection
	  params[:q] ||= {}
	  @search = Spree::Event.ransack(params[:q])
	  @collection = @search.result.includes([:product, :user,]).page(params[:page]).per(params[:per_page])
	end
end
