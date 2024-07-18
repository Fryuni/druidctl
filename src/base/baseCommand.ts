import { Once } from '@inox-tools/utils/once';
import { Command } from '@oclif/core';

export abstract class BaseCommand extends Command {
	abstract initialize(): Promise<void>;

	#initializer = new Once();

	protected async _run<T>(): Promise<T> {
		await this.#initializer.doAsync(() => this.initialize());

		return super._run();
	}
}
