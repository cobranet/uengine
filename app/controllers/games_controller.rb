class GamesController < ApplicationController
  def create
    g = Game.new
    render :json => {game: g}
  end  
end
