json.array!(@localities) do |locality|
  json.extract! locality, :id, :name, :level, :parent, :sort, :areacode, :zipcode, :telcode, :freight_paid, :freight_cod
  json.url locality_url(locality, format: :json)
end
