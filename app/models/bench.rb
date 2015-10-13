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
#  seating     :integer
#

class Bench < ActiveRecord::Base
  validates :description, presence: true

  def self.in_bounds(filters)
    top = filters["bounds"]["northEast"]["lat"]
    bottom = filters["bounds"]["southWest"]["lat"]
    left = filters["bounds"]["southWest"]["lng"]
    right = filters["bounds"]["northEast"]["lng"]
    min = filters["minSeats"]
    max = filters["maxSeats"]

    self.where({ lat: bottom..top, lng: left..right, seating: min..max })

  end



end
