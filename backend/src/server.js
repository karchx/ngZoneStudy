import express from 'express';
import morgan from 'morgan';
import config from './config';
import cors from 'cors';
import { connect } from './utils/db';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

export const start = async () => {
	try {
		await connect();
		app.listen(config.port, () => {
			console.log(`REST API on http://localhost:${config.port}/api`);
		});
	} catch(e) {
		console.error(e);
	}
}
