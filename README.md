# Thinx cypress UI test framework

## Requirements:
1. Node version 14+

## How to setup framework
1. Clone repository - ```git clone git@github.com:JewD18/thinx-01.git```
2. Install all dependencies - ```npm i```

## How to run test
Non-headless - ```npx cypress open```
Headless - ```./node_modules/.bin.cypress run```


To do:
1. Ask devs to add unnique attributes for all actionable items(button, text fields, drop downs, etc +text that is on the page) 
2. Create data oveer api or seed through db in order to avoid test collisionn (when test work with the same data, or user use same data)

Per best practices: All tests should be isolated