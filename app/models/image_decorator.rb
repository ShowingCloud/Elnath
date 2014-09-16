Spree::Image.class_eval do
attachment_definitions[:attachment][:styles] = {
  :mini => '350x500>', # thumbs under image
  :small => '350x500>', # images on category view
  :product => '350x500>', # full product image
  :large => '350x500>' # light box image
                         }
 end
