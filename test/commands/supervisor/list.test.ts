import { runCommand } from '@oclif/test';
import { expect } from 'chai';

describe('supervisor/list', () => {
	it('runs supervisor/list cmd', async () => {
		const { stdout } = await runCommand('supervisor/list');
		expect(stdout).to.contain('hello world');
	});

	it('runs supervisor/list --name oclif', async () => {
		const { stdout } = await runCommand('supervisor/list --name oclif');
		expect(stdout).to.contain('hello oclif');
	});
});
