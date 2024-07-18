import type { AuthenticationProvider } from './provider.js';

export class NoopAuthenticationProvider implements AuthenticationProvider {
	getAuthenticationHeaders(): Promise<HeadersInit> {
		return Promise.resolve({});
	}
}
