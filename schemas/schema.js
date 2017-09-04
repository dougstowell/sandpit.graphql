import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} from 'graphql';

import Db from '../data-access/db';
import Room from './room';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => {
    return {
      rooms: {
        type: new GraphQLList(Room),
        args: {
          name: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          return Db.getRooms(args);
        }
      },
      room: {
        type: Room,
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve(root, args) {
          return Db.getRoom(args.id);
        }
      }
    };
  }
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
