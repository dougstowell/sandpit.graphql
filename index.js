import Express from 'express';
import GraphHTTP from 'express-graphql';
import GraphSchema from './schemas/schema';

const APP_PORT = 3001;

const app = Express();

app.use('/graphql', GraphHTTP({
    schema: GraphSchema,
    pretty: true,
    graphiql: true
}));


app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`);
});
