class Spree::ReviewsController < ApplicationController
	def index
		@reviews = Spree::Review.all
	end
  
	def new
		@review = Spree::Review.new
	end
	
  def create
	  @review = Spree::Review.new(review_params)
	  @review.save

		  redirect_to :action => :index
	end
  
  def edit
	  @review = Spree::Review.find(params[:id])
	end

	def destroy
	  @review =  Spree::Review.find(params[:id])
	  @review.destroy
		redirect_to :action =>:index
	end

	def show
	  @review = Spree::Review.find(params[:id])
	end
  
  def update
	  @review = Spree::Review.find(params[:id])
	  @review.update(review_params)

	  redirect_to :action => :show, :id => @review
	end

	private
		def review_params
			  params.require(:review).permit(:name, :description)
  	end
end
