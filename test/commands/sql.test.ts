import { runCommand } from '@oclif/test';
import { expect } from 'chai';

describe('sql', () => {
	it('runs sql cmd', async () => {
		const { stdout } = await runCommand('sql');
		expect(stdout).to.contain('hello world');
	});

	it('runs sql --name oclif', async () => {
		const { stdout } = await runCommand('sql --name oclif');
		expect(stdout).to.contain('hello oclif');
	});
});
