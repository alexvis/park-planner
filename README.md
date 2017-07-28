![Build Status](https://codeship.com/projects/a6166be0-4d42-0135-985c-02f8b762199a/status?branch=master)
![Code Climate](https://codeclimate.com/github/alexvis/park-planner.png)
![Coverage Status](https://coveralls.io/repos/alexvis/park-planner/badge.png)

# README
This repository contains the source code for the Park Planner.

## Technologies
* Ruby 2.3.3
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
rake db:migrate
rails s
```

In a separate terminal tab, run:
```
npm start
```

Navigate to: ```localhost:3000```

To run ruby tests: ```rake```

To run Enzyme tests, navigate to react folder: ```karma test```
