import { Args } from '@oclif/core';
import { DruidCommand } from '../../base/druidCommand.js';

export default class ApiGet extends DruidCommand {
	static override args = {
		route: Args.string({
			description: 'API route to request',
			required: true,
		}),
	};

	static override description = 'Send a raw GET request to the Druid REST API';

	static override examples = ['<%= config.bin %> <%= command.id %> /health'];

	public async run(): Promise<void> {
		const { args } = await this.parse(ApiGet);

		const res = await this.client.get(args.route);

		if (res instanceof Blob) {
			this.log(await res.text());
			return;
		}

		if (typeof res === 'string') {
			this.log(res);
			return;
		}

		this.log(JSON.stringify(res, null, 2));
	}
}
