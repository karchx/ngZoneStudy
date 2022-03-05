import express from 'express';

export const app = express();

export const start = async() => {
	try {
		app.listen(3000);
	} catch(e) {
		console.error(e);
	}
}
