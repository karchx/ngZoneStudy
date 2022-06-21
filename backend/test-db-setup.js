import mongoose from 'mongoose';
import cuid from 'cuid';
import _ from 'lodash';
import { User } from './src/resources/user/user.model';

const models = { User };

const url = 
	process.env.MONGODB_URL ||
	process.env.DB_URL			||
      'mongodb://localhost:27017/zoneStudy-testing';

global.newId = () => {
	return mongoose.Types.ObjectId();
}

const remove = collection => {
	new Promise((resolve, reject) => {
		collection.deleteMany(err => {
			if (err) return reject(err)
			resolve()
		});
	});
}

beforeEach(async () => {
	const db = cuid();
	function clearDB() {
		return Promise.all(_.map(mongoose.connection.collections, c => remove(c)));
	}

	if(mongoose.connection.readyState === 0) {
		try {
			await mongoose.connect(
				url + db,
				{
					useNewUrlParser: true,
					autoIndex: true
				}
			);
			await clearDB();
			await Promise.all(Object.keys(models).map(name => models[name].init()));
		} catch(e) {
			console.error('Connection error: ', e);
			throw e;
		}
	} else {
		await clearDB();
	}
});

afterEach(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.disconnect();
});

afterAll((done) => {
	done();
});
