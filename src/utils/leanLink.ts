export function isLeanLink(path: string) {
  return path === "/lean" || path.startsWith("/lean/");
}

export function normalizeLeanLink(path: string) {
  return isLeanLink(path) ? window.apiEndpoint + path.substring(1) : path;
}
