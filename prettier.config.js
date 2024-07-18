/** @type {import("prettier").Config} */
export default {
	printWidth: 85,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: ['.*', '*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
	],
};
