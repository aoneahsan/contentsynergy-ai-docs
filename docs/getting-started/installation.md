---
id: installation
title: Installation & access
description: Reach ContentSynergy AI on the web, Android, as a browser extension, or as a desktop app — and create your account to sync content across devices.
sidebar_label: Installation & access
sidebar_position: 1
keywords:
  - ContentSynergy AI install
  - AI content app download
  - web app
  - Android app
  - browser extension
---

# Installation & access

ContentSynergy AI ships on four surfaces that share one account and one data store. Pick whichever fits how you work; you can use several at once and your content stays in sync.

## Web app (primary surface)

Open [contentsynergy.aoneahsan.com](https://contentsynergy.aoneahsan.com) in any modern browser. There's nothing to install — the app loads in the browser, and the AI models download on first use and are cached afterward. For the fastest generations, use a browser and device with WebGPU support (recent Chrome, Edge, or Safari on capable hardware). The web app is the most complete surface and the one the rest of these docs assume by default.

## Android app

Install from Google Play: [ContentSynergy AI](https://play.google.com/store/apps/details?id=com.aoneahsan.contentsynergy) (package `com.aoneahsan.contentsynergy`). The Android build wraps the same app through Capacitor and adds native niceties — share-sheet integration, local notifications for scheduled posts, and edge-to-edge display. See [Android](/platforms/android) for platform specifics.

## Browser extension

The extension is a writing assistant that brings text generation into the pages where you already compose. Install it from your browser's extension store, sign in with the same account, and use it to draft and refine posts inline. See [Browser extension](/platforms/browser-extension).

## Desktop app

An Electron desktop build packages the app for Windows, macOS, and Linux, aimed at local and GPU-assisted workflows where you want a dedicated window and more headroom for model execution. See [Desktop](/platforms/desktop).

## Creating your account

Sign in with Google to enable cross-device sync. On the web, sign-in uses the Firebase Auth popup; on Android, it uses the native Google sign-in flow and lands you on the same Firebase user, so your content, schedules, templates, and theme preferences follow you everywhere. You can use many features without an account, but signing in is what persists and syncs your work.

## First-run model download

The first time you use a generation feature, the browser fetches the relevant open model and initializes it. This is a one-time cost per model per device; after that the model is cached and generations start quickly. If a model can't download — restricted network, low memory — the feature falls back to its template or placeholder path so you can keep working.

## Frequently asked questions

**Do I need to install anything for the web app?** No. It runs in the browser. Only the optional extension and desktop builds are installed.

**Is an account required?** No, but signing in with Google enables cross-device sync and persistence of your content and preferences.

**Why does the first generation take longer?** The model downloads and initializes on first use, then is cached for subsequent runs.

**Which browser is best?** Any modern browser works; one with WebGPU gives the fastest, largest local model runs.
