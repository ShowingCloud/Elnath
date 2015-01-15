class Spree::ReviewsController < ApplicationController
before_action :set_spree_review, only: [:show, :edit, :update, :destroy]


def index
@spree_reviews = Spree::Review.all
end


def show
end


def new
@spree_review = Spree::Review.new
end


def edit
end

	def create
	@spree_review = Spree::Review.find(params[:id])
  @spree_review = Spree::Review.build(spree_review_params)

	respond_to do |format|
	if @spree_review.save
	format.html { redirect_to @spree_review, notice: 'Review was successfully created.' }
	format.json { render :show, status: :created, location: @spree_review }
	else
	format.html { render :new }
	format.json { render json: @spree_review.errors, status: :unprocessable_entity }
	end
	end
	end


	def update
	respond_to do |format|
if @spree_review.update(spree_review_params)
	format.html { redirect_to @spree_review, notice: 'Review was successfully updated.' }
	format.json { render :show, status: :ok, location: @spree_review }
	else
	format.html { render :edit }
	format.json { render json: @spree_review.errors, status: :unprocessable_entity }
	end
	end
	end


	def destroy
	@spree_review.destroy
	respond_to do |format|
	format.html { redirect_to spree_reviews_url, notice: 'Review was successfully destroyed.' }
	format.json { head :no_content }
	end
	end

	private

	def set_spree_review
@spree_review = Spree::Review.find(params[:id])
	end

	def spree_review_params
params.require(:spree_review).permit(:name, :title, :description, :product_id, :user_id)
	end
	end
