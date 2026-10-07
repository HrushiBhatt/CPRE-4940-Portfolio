// Resolves a file in public/ against the site's base path, so links keep working
// when the site is served from a subfolder (like GitHub Pages). External links pass through.
export function asset(path) {
  if (!path || /^(https?:|mailto:|tel:)/.test(path)) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
