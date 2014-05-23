json.array!(@users) do |user|
  json.extract! user, :id, :nickname, :age
  json.url user_url(user, format: :json)
end
