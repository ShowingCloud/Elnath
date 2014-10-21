# Configure Spree Preferences
#
# Note: Initializing preferences available within the Admin will overwrite any changes that were made through the user interface when you restart.
#       If you would like users to be able to update a setting with the Admin it should NOT be set here.
#
# In order to initialize a setting do:
# config.setting_name = 'new value'
Spree.config do |config|
  # Example:
  # Uncomment to override the default site name.
  config.site_name = "BIG ROOSTER -- BRITISH HERITAGE CASUAL"

  config.default_country_id = 119
  config.products_per_page = 24
  config.currency = "CNY"
end

Spree.user_class = "UserTest"

          Rails.application.config.to_prepare do
            require_dependency 'spree/authentication_helpers'
          end
