class User < ActiveRecord::Base
	has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"

	after_create :publish_redis

	def publish_redis
		$redis.publish("new_user", self.to_json)
	end

end
