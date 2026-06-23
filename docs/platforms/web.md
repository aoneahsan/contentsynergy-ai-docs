---
id: web
title: Web App
description: ContentSynergy AI on the web runs in any modern browser, built on React 19, TypeScript, and Vite 8, with AI models cached after first download.
sidebar_label: Web
keywords:
  - web app
  - react 19
  - vite
  - webgpu
  - browser ai
  - progressive web app
---

# Web App

The web app is the primary surface for ContentSynergy AI, a browser-based application you open directly in any modern browser without installing anything. It is where the product's features come together first, and the other surfaces, Android, the browser extension, and the desktop app, share the same account and data as the web experience.

You can open it now at [contentsynergy.aoneahsan.com](https://contentsynergy.aoneahsan.com). Because it runs in the browser, the web app is the fastest way to try the product and the reference point for how everything else behaves. For the full overview, see the [introduction](/intro), and for the list of capabilities, the [tools overview](/tools/overview).

## Built with a modern stack

The web app is built with React 19, TypeScript, and Vite 8. React 19 provides the component model and rendering, TypeScript adds static typing for reliability, and Vite 8 powers fast builds and a responsive development experience. This stack keeps the app maintainable and quick to load, which matters for a tool you may keep open throughout a writing session. The deeper technical picture, including state management and collaborative editing, is covered on the [system architecture](/concepts/architecture) page.

## Running AI in the browser

A defining trait of the web app is that AI runs in your browser. The first time you use an AI feature, the relevant open-source model downloads, and after that it is cached so subsequent uses do not download it again. This means the initial use of a feature takes longer while the model loads, and later uses are faster because the model is already present.

For the best performance, WebGPU is recommended. WebGPU gives the browser access to your device's GPU, which accelerates model execution noticeably compared to running on the CPU alone. The app does not require WebGPU to function, but using a browser and device with WebGPU support makes AI features run faster. To understand the models and fallbacks involved, read [how the AI works](/ai/how-ai-works), and for why this client-side approach exists, see the [zero-cost model](/concepts/zero-cost-model).

## PWA-style experience

The web app is PWA-style, meaning it behaves like an installable, app-like experience in the browser rather than a static page. This makes it convenient to return to and keep handy. Combined with model caching, the result is a tool that loads quickly on repeat visits and keeps your AI features ready.

## Getting started on the web

Getting started is simply opening the URL and signing in. The [installation guide](/getting-started/installation) walks through the first run, including any first-use model download. Once you are in, your content lives in your account and is available across the app's other surfaces. If you care about how your data is handled, the [privacy and GDPR](/analytics/privacy-gdpr) page explains the controls, and you can change the interface language as described on the [multi-language](/analytics/multi-language) page.

## Frequently asked questions

**Do I need to install anything to use the web app?**
No. It runs in any modern browser. Just open [contentsynergy.aoneahsan.com](https://contentsynergy.aoneahsan.com) and sign in.

**Why does the first AI action take longer?**
The first time you use an AI feature, its open-source model downloads. After that, the model is cached, so later uses are faster because no download is needed.

**What is WebGPU and do I need it?**
WebGPU lets the browser use your device's GPU to speed up model execution. It is recommended for faster AI but not required; the app still works without it.

**What is the web app built with?**
It is built with React 19, TypeScript, and Vite 8, a modern stack chosen for reliability and fast loading.

**Is my content shared with the other surfaces?**
Yes. The web app shares one account and data store with the Android app, browser extension, and desktop app, so your content follows you across them.
