Spree::Image.class_eval do
attachment_definitions[:attachment][:styles] = {
  :mini => '48x48>', # thumbs under image
  :small => '105x112>', # images on category view
  :product => '350x500>', # full product image
  :large => '700x1000>' # light box image
}
 end
