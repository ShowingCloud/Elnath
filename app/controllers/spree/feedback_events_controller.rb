class Spree::FeedbackEventsController < Spree::StoreController
  helper Spree::BaseHelper

	before_action :load_event, only: :create

	 def create
	   if @event.present?
	     @feedback_event = @event.feedback_events.new(feedback_event_params)
     	 @feedback_event.user = spree_current_user
	     authorize! :create, @feedback_event
	     @feedback_event.save
	   end
    	respond_to do |format|
	      format.html { redirect_to :back }
	      format.js { render action: :create }
	    end
	 end

	 protected
	 
	 def load_event
	   @event ||= Spree::Event.find_by_id!(params[:event_id])
   end

	 def permitted_feedback_event_attributes
	   [:comment]
	 end

	 def feedback_event_params
	params.require(:feedback_event).permit(permitted_feedback_event_attributes)
	 end

end
