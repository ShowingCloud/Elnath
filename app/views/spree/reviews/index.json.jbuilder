json.array!(@spree_reviews) do |spree_review|
  json.extract! spree_review, :id, :name, :title, :description, :product_id, :user_id
  json.url spree_review_url(spree_review, format: :json)
end
