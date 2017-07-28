![Build Status](https://codeship.com/projects/a6166be0-4d42-0135-985c-02f8b762199a/status?branch=master)
![Code Climate](https://codeclimate.com/github/alexvis/park-planner.png)
![Coverage Status](https://coveralls.io/repos/alexvis/park-planner/badge.png)

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# README
This repository contains the source code for the Park Planner.

## Technologies
* Rails
* React
* Jasmine & Enzyme Testing
* CarrierWave
* Devise Authorization

## Setup
To get started, clone and run the following in your terminal:
```
bundle
rake db:create
rails s
```

In a separate terminal tab, run:
```
yarn
yarn start
```

Navigate to: ```localhost:3000```

To run ruby tests: ```rake```

To run Enzyme tests:```yarn test```
