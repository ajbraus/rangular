== Rangular

=== What's in the box?

1. Rails 4.2.1
2. Angular 1.4.0
3. Bower (w bower-rails)
4. ngResource
5. ngResource 
6. Byebug
7. Postgres

=== Getting Started

1. ```$ git clone https://github.com/ajbraus/rangular.git my-app```
2. ```$ cd my-app```
3. ```$ bundle install```
4. ```$ rake db:create db:migrate```
4. ```$ rails s```
5. Navitage to localhost:3000 in browser
6. Read every file in the project

=== Customize it

1. Change angular app name (app.js, controllers.js, services.js, index.html)

=== Add a package with bower-rails

1. add a package to the dependences in bower.json
2. ```$ rake bower:install PACKAGENAME```
3. add ```//= require PACKAGENAME``` to application.js
