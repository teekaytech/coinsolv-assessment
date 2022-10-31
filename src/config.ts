export const title = 'Countries of the world';
const ghUrl = 'https://github.com/nexys-system/boilerplate_vite';
export const wikiBaseUrl = 'https://en.wikipedia.org/wiki/';

export const version: string = import.meta.env.VITE_VERSION || 'unset_version';
export const sha: string = import.meta.env.VITE_GIT_SHA || 'unset_sha';
export const basename = import.meta.env.BASE_URL;

export const github = {
  sha: `${ghUrl}/commit/${sha}`,
  version: `${ghUrl}/releases/tag/${version}`,
  url: ghUrl,
};
