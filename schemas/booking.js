import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import User from './user';

const Booking = new GraphQLObjectType({
  name: 'Booking',
  description: 'Room booking',
  fields() {
    return {
      reason: {
        type: GraphQLString
      },
      description: {
        type: GraphQLString
      },
      user: {
        type: User,
        resolve(booking) {
          return booking.getUser();
        }
      }
    };
  }
});

export default Booking;