class Spree::FeedbackEvent < ActiveRecord::Base
  belongs_to :user, class_name: Spree.user_class.to_s
	belongs_to :event, dependent: :destroy
	validates :event, presence: true
  default_scope { most_recent_first }
  scope :most_recent_first, -> { order('spree_feedback_events.created_at DESC') }
  scope :localized, ->(lc) { where('spree_feedback_events.locale = ?', lc) }
end
