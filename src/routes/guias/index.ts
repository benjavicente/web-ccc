import { process } from '$lib/markdown';
import * as fs from 'fs';

export const get = async () => {
	const posts = fs
		.readdirSync('contenido/guias')
		.filter((fileName) => /.+\.md$/.test(fileName))
		.map((fileName) => {
			const { metadata } = process(`contenido/guias/${fileName}`);
			return { metadata, slug: fileName.slice(0, -3) };
		});
	console.log(posts);
	return { body: { posts } };
};
