# sandpit.graphql - Playground for GraphQL Learning

This is Bluesmith's reference architecture (a.k.a. `BluePrint`) for creating
production ready server side node code to host your Application Programming
Interface (API) layer. The code uses many best practices to allow you to quickly
get your API up and running with minimum fuss or research.

## Libraries Used

- GraphQL
- Express
- Express-GraphQL
- Faker
- Lodash
- Pg / Pg-Hstore
- Sequelize
- Babel

## Getting Started


The application uses postgres as its data store so install that first and either use an IDE like pgAdmin or the command line to create a database with the name `dev-graphql`. Then enter the following to start the application:

    npm install
	npm start

The application uses code first to create the database tables and populate with fake data. When running visit `http://localhost:3001/graphql` to see the GraphiQL interface and create some queries. Use GraphiQL Documentation Explorer to discover the queries available, but out of the box there are essentially three models to query: 

    {
		rooms
	}

----------

    {
		users
	}

----------

    {
		bookings
	}


The user list can also display a list of their bookings and the user who made that booking, for example:

	{
	  users {
	    id
	    userName
	    handle
	    email
	    isAdmin
	    bookings {
	      reason
	      description
	      user {
	        firstName
	        lastName
	        email
	      }
	    }
	  } 
	}

## Mutations

There are also simple mutation examples where a room can be maintained. For example:

	query getRooms {
	  rooms {
	    id
	    name
	  }
	}
	
	mutation addRoom {
	  addRoom(name: "Kitchen") {
	    id
	  }
	}
	
	mutation updateRoom {
	  updateRoom(id: 1, name: "New Room Name")
	}
	
	mutation deleteRoom {
	  deleteRoom(id: 4)
	}

## Questions

Contact [Doug](mailto:doug.stowell@gmail.com)
