import request from 'supertest';
import mongoose from 'mongoose';

import { app } from '../server';
import { User } from '../resources/user/user.model';

describe('API Authentication:', () => {
	beforeEach(async() => {
		const user = await User.create({email: 'a@a.com', password: 'hello'});
		console.log(user);
	});

	describe('api auth', () => {
		test('api should be locked down', async() => {
			let response = await request(app).get('/api/item');
			expect(response.statusCode).toBe(401);

			response = await request(app).get('/api/list');
			expect(response.statusCode).toBe(401);

			response = await request(app).get('/api/user');
			expect(response.statusCode).toBe(401)
		});
	});
});
