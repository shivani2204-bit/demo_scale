import sanitizeHtml from 'sanitize-html';

export function sanitizeInput(input) {
  return sanitizeHtml(input);
}
