// Cloudflare Worker: Redirect p.a.tysonmediagroup.org to power.administration.tysonmediagroup.org
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = new URL(`https://power.administration.tysonmediagroup.org${url.pathname}${url.search}`);
    return Response.redirect(target.toString(), 301);
  }
};
