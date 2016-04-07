class GamesController < ApplicationController
  def create
    g = Game.new
    g.user_id = current_user.id
    g.save!
    render :json => {game: g}
  end
  def show
    g = Game.find(params[:id])
    render :json => {game: g}
  end
end
