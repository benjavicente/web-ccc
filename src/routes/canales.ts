import * as fs from 'fs/promises';
import * as yaml from 'js-yaml';

export const get = async () => {
	const fileCOntent = await fs.readFile('./contenido/grupos.yml', { encoding: 'utf-8' });
	console.log(fileCOntent);
	return { body: { allLinks: await yaml.load(fileCOntent) } };
};
