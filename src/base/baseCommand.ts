import type { JsonPrimitive } from '@croct/json';
import { Command } from '@oclif/core';
import type { Input, ParserOutput } from '@oclif/core/interfaces';

export abstract class BaseCommand extends Command {
	static override enableJsonFlag = true;

	protected parse = this._parse.bind(this) as Command['parse'];

	private readonly parsedFlags = new Map<Input<any, any, any>, ParserOutput>();

	private async _parse(
		options?: Input<any, any, any>,
		argv?: string[],
	): Promise<ParserOutput> {
		if (options === undefined) return super.parse(options, argv);

		const cached = this.parsedFlags.get(options);
		if (cached) return cached;

		const res = await super.parse(options, argv);
		this.parsedFlags.set(options, res);
		return res;
	}

	protected table(data: Array<Record<string, JsonPrimitive>>): void {
		if (!this.jsonEnabled()) {
			console.table(data);
		}
	}
}
