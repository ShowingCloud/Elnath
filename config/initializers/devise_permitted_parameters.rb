module DevisePermittedParameters
  extend ActiveSupport::Concern

  included do
    before_filter :configure_permitted_parameters
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:account_update) << :nickname
		devise_parameter_sanitizer.for(:account_update) << :gender
		devise_parameter_sanitizer.for(:account_update) << :birthday
		devise_parameter_sanitizer.for(:account_update) << :cellphone
		devise_parameter_sanitizer.for(:account_update) << :city
		devise_parameter_sanitizer.for(:account_update) << :passwd_hint_question
		devise_parameter_sanitizer.for(:account_update) << :passwd_hint_answer
		devise_parameter_sanitizer.for(:account_update) << :email
	end

end

DeviseController.send :include, DevisePermittedParameters


#Spree::UserRegistrationsController.class_eval do
	
	#def update
  #  
  #end
	
  #private
  #  def spree_user_update_params
	#		devise_parameter_sanitizer.for(:account_update) << :nickname, :gender, :birthday, :cellphone, :city, :passwd_hint_question, :passwd_hint_answer, :email, :password, :password_confirmation)

      #params.require(:spree_user).permit(:nickname, :gender, :birthday, :cellphone, :city, :passwd_hint_question, :passwd_hint_answer, :email, :password, :password_confirmation)
	#		Rails.logger.info 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
	#end
#end