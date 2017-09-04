import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList
} from 'graphql';
import Booking from './booking';

const User = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User',
  fields: () => {
    return {
      id: {
        type: GraphQLInt
      },
      userName: {
        type: GraphQLString
      },
      firstName: {
        type: GraphQLString
      },
      lastName: {
        type: GraphQLString
      },
      handle: {
        type: GraphQLString,
        resolve(user) {
          return `${user.userName} (${user.firstName} ${user.lastName})`;
        }
      },
      email: {
        type: GraphQLString
      },
      isAdmin: {
        type: GraphQLBoolean
      },
      bookings: {
        type: new GraphQLList(Booking),
        resolve(user) {
          return user.getBookings();
        }
      }
    };
  }
});

export default User;