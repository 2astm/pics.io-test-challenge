import express, {Request, Response} from 'express';
import {HttpDestination} from './models';
import Routes from './routes';
import { DestinationService } from './services';

const app = express();
const port = process.env.PORT || 3000;

// Init DestinationService
DestinationService.Instance;

// Init routes
new Routes(app);

app.listen(port, () => {
    console.log(`Simple server running at http://localhost:${port}`);
});