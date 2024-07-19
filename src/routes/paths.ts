function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const CONTEXT_PATH = "";

export const DOMAIN_PATHS = {
  root: CONTEXT_PATH,
  sectionA: path(CONTEXT_PATH, "/"),
  sectionB: path(CONTEXT_PATH, "/sectionB"),
};
