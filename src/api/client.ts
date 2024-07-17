import type { AuthenticationProvider } from './auth/provider.js';
import type { JsonValue } from '@croct/json';

type Configuration = {
	baseUrl: string | URL;
	authenticationProvider: AuthenticationProvider;
	fetcher: typeof fetch;
};

export class DruidClient {
	public constructor(private readonly config: Configuration) {}

	public async get(url: string): Promise<JsonValue> {
		if (URL.canParse(url)) {
			throw new Error(
				'URL must be relative, it will be applied over the ' + 'base URL of the Druid instance.',
			);
		}

		const r = await this.fetch(this.expandUrl(url), {
			method: 'GET',
		});

		return await r.json();
	}

	public async post(url: string, body: JsonValue): Promise<JsonValue> {
		if (URL.canParse(url)) {
			throw new Error(
				'URL must be relative, it will be applied over the ' + 'base URL of the Druid instance.',
			);
		}

		const r = await this.fetch(this.expandUrl(url), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		return await r.json();
	}

	/**
	 * Fetch implementation accepting URLs relative to the base
	 * URL of the Druid instance.
	 *
	 * This request is not automatically authenticated.
	 */
	private async fetch(url: string | URL, init?: RequestInit): Promise<Response> {
		return this.baseFetch(url, {
			cache: 'no-cache',
			...init,
			headers: {
				Accept: 'application/json',
				...init?.headers,
				...(await this.config.authenticationProvider.getAuthenticationHeaders(this.baseFetch)),
			},
		});
	}

	/**
	 * Fetch implementation accepting URLs relative to the base
	 * URL of the Druid instance.
	 *
	 * This request is not automatically authenticated.
	 */
	private baseFetch(url: string | URL, init?: RequestInit): Promise<Response> {
		return this.config.fetcher(this.expandUrl(url), init);
	}

	/**
	 * Expand a URL relative to the base URL of the Druid instance.
	 *
	 * Absolute URLs are returned as-is.
	 */
	private expandUrl(url: string | URL): string {
		return new URL(url, this.config.baseUrl).toString();
	}
}
