class CreateBenches < ActiveRecord::Migration
  def change
    create_table :benches do |t|
      t.text :description, null: false
      t.float :lat
      t.float :lng

      t.timestamps null: false
    end

  end
end
