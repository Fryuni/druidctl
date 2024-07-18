import { runCommand } from '@oclif/test';
import { expect } from 'chai';
import nock from 'nock';

describe('sql', () => {
	it('runs sql cmd', async () => {
		nock('http://localhost:8081')
			.post('/druid/v2/sql', {
				query: 'SELECT foo FROM bar',
			})
			.reply(200, [{ foo: 'bar' }]);

		const { stdout, stderr, error } = await runCommand([
			'sql',
			'"SELECT foo FROM bar"',
		]);

		console.log({ stdout, stderr, error: error?.message });

		expect(stdout).to.contain('hello world');
	});
});
