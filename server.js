const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()

require('dotenv').config()

const schema = require('./schema')

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000)
console.log('Server listening on port 4000.')
