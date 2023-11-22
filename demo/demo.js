import express from 'express';
import { readFile } from 'fs/promises';
import { join } from 'path';

const app = express();

const cwd = process.cwd();

app.use('/', express.static('./public'));
app.use('/lib', express.static('./../lib'));

app.get('/', async (req, res) => {
	res.status(200);
	res.sendFile(join(cwd, 'demo.html'));
});

app.listen(3000, 'localhost', function() {
	console.log(`View on http://localhost:${this.address().port}`);
});