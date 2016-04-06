class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :user_id
      t.text :game_json
      t.integer :status
      t.integer :score
      t.timestamps null: false
    end
  end
end
