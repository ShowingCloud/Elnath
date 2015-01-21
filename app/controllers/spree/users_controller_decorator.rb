module Spree
	UsersController.class_eval do
		def update
		#Rails.logger.info user_params.to_json
			if @user.update_with_password(user_params)
				if params[:user][:password].present?
					# this logic needed b/c devise wants to log us out after password changes
					user = Spree::User.reset_password_by_token(params[:user])
					sign_in(@user, :event => :authentication, :bypass => !Spree::Auth::Config[:signout_after_password_change])
				end
				redirect_to spree.account_url, :notice => Spree.t(:account_updated)
			else
				render :edit
			end
		end
		
	end
end
