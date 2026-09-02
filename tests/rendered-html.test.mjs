import assert from "node:assert/strict";
import test from "node:test";

test("renders the Albanian measurement laboratory landing page", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<html lang="sq">/i);
  assert.match(html, /<title>Fizika 6 \| Laboratori i Matjeve<\/title>/i);
  assert.match(html, /TRUPAT DHE SISTEMET/i);
  assert.match(html, /Si mund ta përshkruash botën/i);
  assert.match(html, /HYR NË LABORATOR/i);
  assert.match(html, /role="progressbar"/i);
  assert.doesNotMatch(html, /lorem ipsum|coming soon|\bTODO\b/i);
});
