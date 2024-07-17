/**
 * A `fetch`-compatible function that is configured to connect with
 * a Druid instance.
 *
 * Providing a relative path as the URL will be interpreted as relative
 * to the base URL of the Druid instance.
 */
type Fetcher = (input: string | URL, init?: RequestInit) => Promise<Response>;

export interface AuthenticationProvider {
	getAuthenticationHeaders(fetcher: Fetcher): Promise<Promise<HeadersInit>>;
}
