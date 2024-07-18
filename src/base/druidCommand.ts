import { Command, Flags } from '@oclif/core';
import { DruidClient } from '../api/client.js';
import type { Input, ParserOutput } from '@oclif/core/interfaces';
import assert from 'node:assert';
import { BasicAuthenticationProvider } from '../api/auth/basicAuth.js';
import { NoopAuthenticationProvider } from '../api/auth/noop.js';
import { BaseCommand } from './baseCommand.js';
import { AsyncLocalStorage } from 'node:async_hooks';

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

	protected parse = this._parse.bind(this) as Command['parse'];

	private readonly parsedFlags = new Map<Input<any, any, any>, ParserOutput>();

	private async _parse(options?: Input<any, any, any>, argv?: string[]): Promise<ParserOutput> {
		if (options === undefined) return super.parse(options, argv);

		const cached = this.parsedFlags.get(options);
		if (cached) return cached;

		const res = await super.parse(options, argv);
		this.parsedFlags.set(options, res);
		return res;
	}

	public static readonly envClient = new AsyncLocalStorage<DruidClient>();

	#client?: DruidClient;

	public get client(): DruidClient {
		assert(this.#client !== undefined, 'Client was not initialized');

		return this.#client;
	}

	public async initialize(): Promise<void> {
		const envClient = DruidCommand.envClient.getStore();

		if (envClient) {
			this.#client = envClient;
			return;
		}

		const { flags } = await this.parse(this.constructor as typeof DruidCommand);

		this.#client = new DruidClient({
			baseUrl: flags.url,
			authenticationProvider: flags.user
				? new BasicAuthenticationProvider(flags.user, process.env.DRUID_PASSWORD ?? '')
				: new NoopAuthenticationProvider(),
			fetcher: fetch,
		});
	}
}
