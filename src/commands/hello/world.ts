import { Command } from '@oclif/core';
import type { ArgInput, FlagInput } from '@oclif/core/interfaces';

export default class World extends Command {
	static args: ArgInput = {};

	static description: string = 'Say hello world';

	static examples: string[] = [
		`<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
	];

	static flags: FlagInput = {};

	async run(): Promise<void> {
		this.log('hello world! (./src/commands/hello/world.ts)');
	}
}
