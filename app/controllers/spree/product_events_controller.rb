Spree::ProductsController.class_eval do
  helper Spree::EventsHelper
  [ :events_count].each { |attrib| Spree::PermittedAttributes.product_attributes << attrib }
end
