'use strict'

const Db = require('../db-main.js')

// Retrieve all data or list of items with a parameter
function all (params, callback) {
  if (!params) {
    params = {}
  } else {
    params = {'title': {'$regex': params, '$options': 'i'}}
  }
  Db.find(params, (err, projects) => {
    return callback(err, projects)
  })
}

// Retrieve one item
function oneItem (params, callback) {
  Db.findOne(params, (err, project) => {
    return callback(err, project)
  })
}

module.exports = {
  all: all,
  oneItem: oneItem
}
