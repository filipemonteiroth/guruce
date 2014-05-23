class RedisWorker
	include Sidekiq::Worker

	def perform
		$redis.subscribe(:get_users) do |on|
			on.message do |channel, message|
				puts "Message received: #{channel} - #{message}"
				if (channel == "get_users")
					users = User.all
					message = JSON.parse(message)
					message = {:socket => message["socket"], users: users}
					redis_pub = Redis.new
					redis_pub.publish("users_loaded", message.to_json)
				end
			end
		end
	end

end