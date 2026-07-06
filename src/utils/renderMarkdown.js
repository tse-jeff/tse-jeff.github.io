import { marked } from 'marked';

// The About sections' bulleted content is stored as Markdown in the CMS.
// Trusted single-writer content (only the site owner, through Access, can
// ever set these values), so rendering the parsed HTML directly is safe.
export function renderMarkdown(source) {
  return marked.parse(source);
}
