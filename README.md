guruce
======

Example project for GuruCE presentation using Rails, Redis, NodeJS.

The main idea is to integrate two different applications using Redis PubSub feature. This project has a user register window and a users "online" window. When you create a new user it will appear in users online window.

Running the apps
================

Before starting applications, make sure you have redis installed and running.

**Rails App**

In the directory **$project/rails_app** run:

```ruby
rails s
```

In another terminal (same directory) run

```ruby
bundle exec sidekiq
```

In the directory **$project/node_app** run:

**Node App**

```nodejs
npm install
node app
```

URLs for testing
================

[http://localhost:3000/users/new](http://localhost:3000/users/new)

[http://localhost:3000/users_app](http://localhost:3000/users_app)
