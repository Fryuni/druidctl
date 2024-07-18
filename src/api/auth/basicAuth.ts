import type { AuthenticationProvider } from './provider.js';

export class BasicAuthenticationProvider implements AuthenticationProvider {
	public constructor(
		private readonly username: string,
		private readonly password: string,
	) {}

	public getAuthenticationHeaders(): Promise<HeadersInit> {
		const encoded = Buffer.from(`${this.username}:${this.password}`).toString(
			'base64',
		);
		return Promise.resolve({ Authorization: `Basic ${encoded}` });
	}
}
