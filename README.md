# p.a.tysonmediagroup.org

Dedicated routing node that redirects all incoming traffic from `p.a.tysonmediagroup.org` to `power.administration.tysonmediagroup.org`.

## Architectural Components
- `worker.js`: Cloudflare Worker returning HTTP 301 Permanent Redirect to `power.administration.tysonmediagroup.org`.
- `_redirects`: Cloudflare Pages wildcard redirect rule.
- `index.html`: Client-side fallback with instant meta refresh, JavaScript redirect, and styled navigation card.
