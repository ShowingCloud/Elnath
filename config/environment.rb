# Load the Rails application.
require File.expand_path('../application', __FILE__)

require_relative 'initializers/arel_patch'

# Initialize the Rails application.
Elnath::Application.initialize!
