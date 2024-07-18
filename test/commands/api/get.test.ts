import { runCommand } from '@oclif/test';
import { expect } from 'chai';
import nock from 'nock';

describe('api/get', () => {
	it('runs api/get cmd', async () => {
		nock('http://localhost:8081').get('/api/v2/health').reply(200, { status: 'ok' });

		const { stdout, stderr, error } = await runCommand('api get /api/v2/health');

		expect(error).to.equal(undefined);
		expect(stderr).to.equal('');
		expect(stdout).to.equal(`{
  "status": "ok"
}
`);
	});
});
