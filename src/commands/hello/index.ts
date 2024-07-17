import { Args, Command, Flags } from '@oclif/core';
import type { ArgInput, FlagInput } from '@oclif/core/interfaces';

export default class Hello extends Command {
	static args: ArgInput = {
		person: Args.string({ description: 'Person to say hello to', required: true }),
	};

	static description: string = 'Say hello';

	static examples: string[] = [
		`<%= config.bin %> <%= command.id %> friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
	];

	static flags: FlagInput = {
		from: Flags.string({ char: 'f', description: 'Who is saying hello', required: true }),
	};

	async run(): Promise<void> {
		const { args, flags } = await this.parse(Hello);

		this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`);
	}
}
