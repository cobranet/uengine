class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
   def current_user
#     @current_user ||= User.find(session[:user_id]) if session[:user_id]
     @current_user ||= User.find(1)
#     if request.env['HTTP_USER_AGENT'].include?("Firefox")
#       @current_user = User.find(1)
#     else
#       @current_user = User.find(3)
#     end

  end
  helper_method :current_user
  after_filter :set_csrf_cookie_for_ng

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end
  protected
  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end
end
