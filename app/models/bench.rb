# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :text             not null
#  lat         :float
#  lng         :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base
  validates :description, presence: true

  def self.in_bounds(bounds)
    top = bounds["northEast"]["lat"]
    bottom = bounds["southWest"]["lat"]
    left = bounds["southWest"]["lng"]
    right = bounds["northEast"]["lng"]

    self.where({ lat: bottom..top, lng: left..right })
  end

end
