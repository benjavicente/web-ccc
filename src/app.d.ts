/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

interface ImportMetaEnv {
	PUBLIC_GOOGLE_API_KEY: string;
}

type Metadata = {
	title: string;
	date: string;
};
