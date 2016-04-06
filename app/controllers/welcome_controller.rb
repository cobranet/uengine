class WelcomeController < ApplicationController
  def index
  end
  def user
    render :json => {user: current_user}
  end  
end
