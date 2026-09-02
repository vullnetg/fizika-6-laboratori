import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test, { after } from "node:test";
import { fileURLToPath } from "node:url";

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const root = fileURLToPath(new URL("..", import.meta.url));
const vite = await createServer({
  appType: "custom",
  configFile: false,
  root,
  resolve: { alias: { "@": root } },
  server: { middlewareMode: true },
});

after(async () => {
  await vite.close();
});

test("keeps the laboratory responsive and motion-accessible", async () => {
  const css = await readFile(path.join(root, "app/globals.css"), "utf8");

  assert.match(css, /@media\s*\(max-width:\s*680px\)/);
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.match(css, /:focus-visible/);
});

test("forwards progress semantics to the primitive", async () => {
  const { Progress } = await vite.ssrLoadModule("/components/ui/progress.tsx");
  const html = renderToStaticMarkup(React.createElement(Progress, { value: 37 }));

  assert.match(html, /aria-valuenow="37"/);
  assert.match(html, /aria-valuetext="37%"/);
  assert.match(html, /data-state="loading"/);
});

test("implements all eleven chapter lessons", async () => {
  const { lessons } = await vite.ssrLoadModule("/data/lessons.ts");

  assert.equal(lessons.length, 11);
  assert.deepEqual(
    lessons.map((lesson) => lesson.number),
    ["2.1", "2.2", "2.2.1", "2.2.2", "2.3", "2.4", "2.5", "2.5.1", "2.6", "2.7", "2.7.1"],
  );
});

test("calculates the core measurements correctly", async () => {
  const physics = await vite.ssrLoadModule("/lib/physics.ts");

  assert.equal(physics.lengthFromRuler(2, 11), 9);
  assert.equal(physics.displacedVolume(50, 68), 18);
  assert.equal(physics.density(270, 100), 2.7);
  assert.equal(physics.average([4.92, 5.17, 4.98]), 5.023333333333333);
  assert.equal(physics.closestMaterial(2.7).name, "Alumin");
});

test("implements the observation to explanation learning sequence", async () => {
  const learning = await readFile(
    path.join(root, "components/physics/Learning.tsx"),
    "utf8",
  );
  const lessonUi = await readFile(
    path.join(root, "components/physics/Lessons.tsx"),
    "utf8",
  );

  assert.match(learning, /ÇFARË NDODHI\?/);
  assert.match(learning, /PSE NDODHI\?/);
  assert.match(learning, /SI E QUAN FIZIKA\?/);
  assert.match(learning, /A MUND TA SHPJEGOSH\?/);
  assert.match(learning, /PARA SE TË VAZHDOSH/);
  assert.match(lessonUi, /recordObservation/);
  assert.match(lessonUi, /revealConcept/);
  assert.match(lessonUi, /recordExplanation/);
  assert.ok(
    (lessonUi.match(/<ExplainCheck/g) ?? []).length >= 10,
    "every experimental concept should require an explanation check",
  );
});
