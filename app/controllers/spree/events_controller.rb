class Spree::EventsController < Spree::StoreController
  def index
    @events = Event.all
  end

	def new
    @event = Spree::Event.new(product: @product)
	  authorize! :create, @event
	end

	def create
	  params[:event].sub!(/\s*[^0-9]*\z/, '') unless params[:event].blank?
    @event = Spree::Event.new(event_params)
  	@event.product = @product
  	@event.user = spree_current_user if spree_user_signed_in?
	  @event.ip_address = request.remote_ip

  	authorize! :create, @event
	  if @event.save
	    flash[:notice] = Spree.t(:event_successfully_submitted)
      redirect_to spree.product_path(@product)
  	else
	    render :new
	  end
	end

	private

	def load_product
    @product = Spree::Product.friendly.find(params[:product_id])
	end

	def permitted_event_attributes
	  [:title, :event, :name, :show_identifier]
	end

	def event_params
    params.require(:event).permit(permitted_event_attributes)
	end

	end
