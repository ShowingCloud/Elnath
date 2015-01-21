module Spree
	UsersController.class_eval do
		#before_action : update_check
		#def update_check
		#end
		
		def update
			ret = nil
			if user_params.has_key?('password')
				ret=@user.update_with_password(user_params)
			else
				ret=@user.update_attributes(user_params)
			end
			
			if ret
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
