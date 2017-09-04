import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql';

const Room = new GraphQLObjectType({
  name: 'Room',
  description: 'Room detail',
  fields() {
    return {
      id: {
        type: GraphQLInt
      },
      name: {
        type: GraphQLString
      }
    };
  }
});

export default Room;
