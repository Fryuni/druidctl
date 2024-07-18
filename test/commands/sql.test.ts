import { expect } from 'chai';
import nock from 'nock';
import { failCommand, succeedCommand } from '../helper.js';

describe('sql', () => {
	it('runs sql cmd', async () => {
		nock('http://localhost:8081')
			.post('/druid/v2/sql', {
				query: 'SELECT foo FROM bar',
			})
			.reply(200, [{ foo: 'bar' }]);

		const { result } = await succeedCommand(['sql', 'SELECT foo FROM bar']);

		expect(result).to.eql([{ foo: 'bar' }]);
	});

	it('requires a query or a file', async () => {
		const { error } = await failCommand(['sql']);

		expect(error).to.eql({
			code: undefined,
			message: 'Either --file or a SQL string must be specified, but not both',
			oclif: {
				exit: 2,
			},
			skipOclifErrorHandling: undefined,
			suggestions: undefined,
		});
	});
});
