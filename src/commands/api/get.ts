import { Args } from '@oclif/core';
import { DruidCommand } from '../../base/druidCommand.js';
import type { JsonStructure } from '@croct/json';

export default class ApiGet extends DruidCommand {
	static override args = {
		route: Args.string({
			description: 'API route to request',
			required: true,
		}),
	};

	static override description = 'Send a raw GET request to the Druid REST API';

	static override examples = ['<%= config.bin %> <%= command.id %> /health'];

	public async run(): Promise<JsonStructure> {
		const { args } = await this.parse(ApiGet);

		const res = await this.client.get(args.route);

		if (res instanceof Blob) {
			const body = await res.text();
			this.log(body);
			return { body };
		}

		if (typeof res === 'string') {
			this.log(res);
			return { body: res };
		}

		this.log(JSON.stringify(res, null, 2));

		return { body: res };
	}
}
