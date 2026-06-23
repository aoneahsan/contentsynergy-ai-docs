---
id: browser-extension
title: Browser Extension
description: The ContentSynergy AI browser extension is a writing assistant built with WXT and Chrome MV3 that brings AI text generation into pages where you compose.
sidebar_label: Browser Extension
keywords:
  - browser extension
  - writing assistant
  - wxt
  - manifest v3
  - chrome identity
  - ai text generation
---

# Browser Extension

The browser extension is a writing assistant from ContentSynergy AI that brings AI text generation and refinement directly into the pages where you write. Instead of switching to a separate app to draft or polish text, you work in place, wherever you compose in the browser, with the assistant available alongside your content.

It is built with [WXT](https://wxt.dev/), a modern framework for browser extensions, and targets Chrome's Manifest V3 (MV3). The extension uses the same account as the rest of the product, so it fits into the same workflow as the [web app](/platforms/web), [Android app](/platforms/android), and [desktop app](/platforms/desktop). For the full overview, see the [introduction](/intro) and [tools overview](/tools/overview).

## What the extension does

The extension's purpose is focused: AI text generation and refinement where you compose. When you are writing in a page, you can generate new text or refine what you have already drafted without leaving the page. This makes the assistant useful in the many places writing happens across the web, keeping the AI close to the work rather than in a separate tab.

Sign in with the same account you use elsewhere, and the extension becomes part of your unified ContentSynergy AI setup. Because the surfaces share one account and data store, what you do stays connected to your account.

## Built on WXT and Manifest V3

WXT streamlines building a cross-browser MV3 extension, handling the structure and tooling so the extension stays maintainable. Manifest V3 is the current extension platform standard, with stricter rules around what extensions may run. Building on this foundation keeps the extension aligned with current browser requirements.

## Extension compliance: no remote code

Browser extensions must not load remote code. This is a firm platform rule: an MV3 extension is expected to ship the code it runs rather than fetching and executing scripts from the network at runtime. ContentSynergy AI's extension follows this by using bundled code, the logic it needs is included in the extension package itself.

This rule also shapes how authentication works in the extension. Rather than using the Firebase Auth web SDK, which is the approach the web app can use, the extension uses a Chrome Identity-style auth flow. Chrome's identity mechanism is the supported, compliant way for an MV3 extension to authenticate without pulling in remote scripts. The practical result is the same: you sign in with your account, and the extension does so in a way that respects extension-store compliance. The [architecture](/concepts/architecture) page describes how the surfaces connect to one shared account, and [how the AI works](/ai/how-ai-works) covers the client-side models behind generation.

## Why this matters

Following the no-remote-code rule is not just a technicality; it is what keeps the extension publishable and trustworthy. By bundling code and using Chrome Identity-style auth, the extension stays within the boundaries that browser stores enforce, while still delivering AI writing help in context. The [zero-cost model](/concepts/zero-cost-model) page explains the wider design philosophy that keeps the whole product free and client-side where possible.

## Getting started

Install the extension, sign in with your account, and start writing in a page where you compose. The [installation guide](/getting-started/installation) covers setup across surfaces. For how your data is handled and your rights to export and delete it, see the [privacy and GDPR](/analytics/privacy-gdpr) page.

## Frequently asked questions

**What does the browser extension do?**
It is a writing assistant that brings AI text generation and refinement into the pages where you compose, so you can draft and polish text without leaving the page.

**What is it built with?**
It is built with the WXT framework and targets Chrome Manifest V3, the current extension platform standard.

**How do I sign in?**
You sign in with the same account you use across ContentSynergy AI. The extension uses a Chrome Identity-style auth flow rather than the Firebase Auth web SDK.

**Why doesn't it use the Firebase Auth web SDK?**
Extensions must not load remote code. To comply, the extension uses bundled code and Chrome Identity-style auth instead of the web Auth SDK.

**Does my work in the extension connect to my account?**
Yes. The extension shares the same account as the web, Android, and desktop surfaces, keeping your work tied to one account.
