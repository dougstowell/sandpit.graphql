import {
    buildSchema
  } from 'graphql';

const schema = buildSchema(`
  type Room {
    id: Int!
    name: String!
  }

  type Booking {
    id: Int!
    reason: String!
    description: String
  }

  type User {
    id: Int!
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    bookings: [Booking]
  }

  type Query {
    rooms(name: String): [Room]
    room(id: Int): Room
  }
`);

  export default schema;
