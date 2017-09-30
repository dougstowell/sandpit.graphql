import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} from 'graphql';

import Db from '../data-access/db';
import Room from './room';
import User from './user';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => {
    return {
      health: {
        type: GraphQLString,
        resolve() {
          return 'My GraphQL server is healthy!!!'
        }
      },
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
      },
      users: {
        type: new GraphQLList(User),
        args: {
          email: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          return Db.getUsers(args);
        }
      }
    };
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Root mutation object',
  fields () {
    return {
      addRoom: {
        type: Room,
        args: {
          name: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve (source, args) {
          return Db.createRoom(args.name);
        }
      },
      updateRoom: {
        type: GraphQLInt,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          },
          name: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve (source, args) {
          return Db.updateRoom(args.id, args.name);
        }
      },
      deleteRoom: {
        type: GraphQLInt,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve (source, args) {
          return Db.deleteRoom(args.id);
        }
      }
    };
  }
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
