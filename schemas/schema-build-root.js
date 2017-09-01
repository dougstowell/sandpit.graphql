import Db from '../data-access/db';

var root = {
  rooms: function ({
    args
  }) {
    return Db.getRooms(args);
  },
  room: function ({
    id
  }) {
    return Db.getRoom(id);
  }
};

export default root;
