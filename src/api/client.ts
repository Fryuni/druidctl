import type { AuthenticationProvider } from './auth/provider.js';
import type { JsonValue } from '@croct/json';

type Configuration = {
	baseUrl: string | URL;
	authenticationProvider: AuthenticationProvider;
	fetcher: typeof fetch;
};

export class DruidClient {
	#config: Configuration;

	public constructor(config: Configuration) {
		this.#config = config;
	}

	/**
	 * Issue a GET request to the Druid REST API.
	 */
	public async get(url: string): Promise<JsonValue | Blob> {
		if (URL.canParse(url)) {
			throw new Error(
				'URL must be relative, it will be applied over the ' + 'base URL of the Druid instance.',
			);
		}

		const r = await this.fetch(this.expandUrl(url), {
			method: 'GET',
		});

		return this.handleResponse(r);
	}

	/**
	 * Issue a POST request to the Druid REST API.
	 */
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

	private async handleResponse(r: Response): Promise<JsonValue | Blob> {
		const contentType = r.headers.get('Content-Type');
		if (!contentType) {
			return await r.blob();
		}

		switch (true) {
			case contentType.startsWith('application/json'):
				return await r.json();
			case contentType.startsWith('text/'):
				return await r.text();
			default:
				return await r.blob();
		}
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
				...(await this.#config.authenticationProvider.getAuthenticationHeaders()),
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
		return this.#config.fetcher(this.expandUrl(url), init);
	}

	/**
	 * Expand a URL relative to the base URL of the Druid instance.
	 *
	 * Absolute URLs are returned as-is.
	 */
	private expandUrl(url: string | URL): string {
		return new URL(url, this.#config.baseUrl).toString();
	}
}
