import Sequelize from 'sequelize';
import Faker from 'faker';
import _ from 'lodash';

const Conn = new Sequelize(
  'dev-graphql',
  'postgres',
  '', {
    dialect: 'postgres',
    host: 'localhost',
    logging: null
  }
);

const Room = Conn.define('room', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const User = Conn.define('user', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
});

const Booking = Conn.define('booking', {
  reason: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

// Relations
User.hasMany(Booking);
Booking.belongsTo(User);

Conn.sync({
  force: true
}).then(() => {
  // Spin up some sample data for illustrative purposes only.
  Room.bulkCreate([
    { name: 'Brownlee' },
    { name: 'Ennis' },
    { name: 'Training Room' }
  ]).then(() => {
    return Room.findAll();
  }).then(() => {
    _.times(10, () => {
      return User.create({
        userName: Faker.internet.userName(),
        firstName: Faker.name.firstName(),
        lastName: Faker.name.lastName(),
        email: Faker.internet.email(),
        isAdmin: false
      }).then(user => {
        return user.createBooking({
          reason: `Room booking needed by ${user.firstName}`,
          description: 'For project stand ups'
        });
      });
    });
  });
});

const funcs = {
  getRooms (filter) {
    return Conn.models.room.findAll({
      where: filter
    });
  },
  getRoom (id) {
    return Conn.models.room.findById(id);
  },
  getUsers (filter) {
    return Conn.models.user.findAll({
      where: filter
    });
  },
  getBookings (filter) {
    return Conn.models.booker.findAll({
      where: filter
    });
  }
};

export default funcs;
