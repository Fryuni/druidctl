import { Flags } from '@oclif/core';
import { DruidClient } from '../api/client.js';
import assert from 'node:assert';
import { BasicAuthenticationProvider } from '../api/auth/basicAuth.js';
import { NoopAuthenticationProvider } from '../api/auth/noop.js';
import { BaseCommand } from './baseCommand.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import type { JsonStructure } from '@croct/json';

export abstract class DruidCommand extends BaseCommand {
	static override baseFlags = {
		user: Flags.string({
			char: 'u',
			env: 'DRUID_USER',
			description: 'User to authenticate as using basic auth',
			helpGroup: 'GLOBAL',
		}),
		url: Flags.string({
			required: true,
			env: 'DRUID_BASE_URL',
			description: 'Base URL of the Druid instance',
			helpGroup: 'GLOBAL',
		}),
	};

	public abstract run(): Promise<JsonStructure>;

	#client?: DruidClient;

	public get client(): DruidClient {
		assert(this.#client !== undefined, 'Client was not initialized');

		return this.#client;
	}

	public async init(): Promise<void> {
		await super.init();
		const { flags } = await this.parse(this.constructor as typeof DruidCommand);

		this.#client = new DruidClient({
			baseUrl: flags.url,
			authenticationProvider: flags.user
				? new BasicAuthenticationProvider(
						flags.user,
						process.env.DRUID_PASSWORD ?? '',
					)
				: new NoopAuthenticationProvider(),
			fetcher: fetch,
		});
	}
}
