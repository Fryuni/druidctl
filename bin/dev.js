#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning

if (!process.env.DEBUG) {
	process.env.DEBUG = 'oclif:druidctl:*';
}

const { execute } = await import('@oclif/core');

await execute({ development: true, dir: import.meta.url });
