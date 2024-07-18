import type { CLIError } from '@oclif/core/errors';
import { runCommand } from '@oclif/test';
import { expect } from 'chai';
import { inspect } from 'util';

export async function succeedCommand(command: string[]): Promise<{
	stderr: string;
	result: unknown;
}> {
	const { stderr, error, result } = await runCommand(
		command.map((c) => JSON.stringify(c.trim())),
	);

	if (error !== undefined)
		throw new Error(
			inspect(error, {
				depth: 10,
			}),
		);

	return {
		stderr: stderr,
		result: result,
	};
}

export async function failCommand(command: string[]): Promise<{
	stderr: string;
	error: Error & Partial<CLIError>;
}> {
	const { stderr, error } = await runCommand(
		command.map((c) => JSON.stringify(c.trim())),
	);

	expect(error, 'Error should be defined for a failing command').not.to.be.undefined;

	return {
		stderr: stderr,
		error: { ...error! },
	};
}
