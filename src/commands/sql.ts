import { Args, Flags } from '@oclif/core';
import { readFile } from 'node:fs/promises';
import { DruidCommand } from '../base/druidCommand.js';

export default class Sql extends DruidCommand {
	static override args = {
		sql: Args.string({ description: 'SQL to execute' }),
	};

	static override description = 'Execute SQL';

	static override examples = ['<%= config.bin %> <%= command.id %>'];

	static override flags = {
		file: Flags.file({
			char: 'f',
			description: 'read SQL from a file',
			allowStdin: true,
		}),
	};

	public async run(): Promise<void> {
		const sql = await this.getSql();
		const res = await this.client.sql(sql);

		console.table(res);
	}

	private async getSql(): Promise<string> {
		const { args, flags } = await this.parse(Sql);

		if (!!args.sql === !!flags.file) {
			this.error('Either --file or a SQL string must be specified, but not both');
		}

		if (args.sql) {
			return args.sql;
		}

		return readFile(flags.file!, 'utf8');
	}
}
