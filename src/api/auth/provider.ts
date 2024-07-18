export interface AuthenticationProvider {
	getAuthenticationHeaders(): Promise<HeadersInit>;
}
