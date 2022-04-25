import { process } from '$lib/markdown';

export function get({ params }) {
	const { slug } = params;
	return { body: process(`contenido/guias/${slug}.md`) };
}
