import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("build produces the Cloudflare Pages static entry point", async () => {
  const html = await readFile(new URL("dist/index.html", root), "utf8");

  assert.match(html, /<html lang="pt-BR">/i);
  assert.match(html, /<title>Ionan Santos — Backend Developer<\/title>/i);
  assert.match(
    html,
    /<link rel="icon" type="image\/svg\+xml" href="\/favicon\.svg" \/>/i,
  );
  assert.match(html, /<meta name="description"/i);
  assert.match(html, /<script[^>]+src="\/assets\/[^\"]+\.js"/i);
  await access(new URL("dist/og.png", root));
  await access(new URL("dist/favicon.svg", root));
});

test("portfolio keeps its primary navigation and contact accessible", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");

  assert.match(page, /aria-label="Navegação principal"/);
  assert.match(page, /href="#sobre"/);
  assert.match(page, /href="#experiencia"/);
  assert.match(page, /href="#stack"/);
  assert.match(page, /href="#contato"/);
  assert.match(page, /href="mailto:ionan564@gmail\.com"/);
  assert.match(page, /rel="noreferrer"/);
});
