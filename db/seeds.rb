# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


benches = Bench.create([
  {description: "Bench in front of a/A", lat: 37.781141, lng: -122.411530},
  {description: "A great view of Dolores Park", lat: 37.760595, lng: -122.426933},
  {description: "Because who wouldn't want to sit down and relax in the Tenderloin?", lat: 37.784036, lng: -122.415421},
  {description: "Get a view from Coit Tower", lat: 37.802103, lng: -122.405858 }
  ])
