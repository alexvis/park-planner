class ParkSeeder
  PARKS = [
    {
      name: "Yosemite",
      state: "CA" ,
      link_url: "https://www.nps.gov/yose/index.htm"
    },
    {
      name: "Adams",
      state: "MA" ,
      link_url: "https://www.nps.gov/adam/index.htm"
    }
  ]

    def self.seed!
      PARKS.each do |p|
	park = Park.find_or_initialize_by(name: p[:name])
	park.assign_attributes(p)
	park.save!
      end
    end
end
