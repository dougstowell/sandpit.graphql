import Express from 'express';
import Db from './data-access/db';

const APP_PORT = 3001;

const app = Express();

app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`);
});
