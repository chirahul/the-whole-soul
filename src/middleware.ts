import { NextResponse } from "next/server";

// --- TEMPORARY HOLDING PAGE ---------------------------------------------
// This middleware intercepts every request and serves a self-contained
// "temporarily unavailable" page with a 503 status. It does not touch any
// existing route or data. To bring the full site back, delete this file
// and redeploy (see also the `pre-takedown-backup` git tag).
// ------------------------------------------------------------------------

const HOLDING_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>The Whole Soul — Temporarily Unavailable</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #FAF7F2;
    color: #2D3A2E;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 24px;
  }
  .card { max-width: 540px; }
  .badge {
    display: inline-block;
    font-size: 13px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #D4710A;
    border: 1px solid #D4710A;
    border-radius: 999px;
    padding: 6px 16px;
    margin-bottom: 28px;
    font-weight: 600;
  }
  h1 { font-size: 34px; line-height: 1.2; margin-bottom: 16px; font-weight: 700; }
  p { font-size: 17px; line-height: 1.6; color: #4a564b; }
  .rule { width: 48px; height: 3px; background: #C9A84C; border-radius: 2px; margin: 28px auto; }
  .foot { margin-top: 32px; font-size: 14px; color: #8a948b; }
</style>
</head>
<body>
  <div class="card">
    <span class="badge">The Whole Soul</span>
    <h1>We&rsquo;ll be back soon.</h1>
    <p>Our site is temporarily unavailable while we make some updates. Thanks for your patience &mdash; please check back shortly.</p>
    <div class="rule"></div>
    <p class="foot">For orders or questions, reach us on WhatsApp at +91&nbsp;77098&nbsp;25243.</p>
  </div>
</body>
</html>`;

export function middleware() {
  return new NextResponse(HOLDING_PAGE, {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store, max-age=0",
      "retry-after": "86400",
    },
  });
}

// Match everything except Next.js internal assets so the page always renders.
export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
