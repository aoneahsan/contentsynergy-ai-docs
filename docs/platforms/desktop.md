---
id: desktop
title: Desktop App
description: ContentSynergy AI on the desktop is an Electron app for Windows, macOS, and Linux, suited to local and GPU-assisted workflows with the same account.
sidebar_label: Desktop
keywords:
  - desktop app
  - electron
  - electron-builder
  - windows macos linux
  - gpu workflows
  - local ai
---

# Desktop App

The desktop app is ContentSynergy AI delivered as a native desktop application for Windows, macOS, and Linux. It is built with [Electron](https://www.electronjs.org/) and packaged using electron-builder, giving you a dedicated window for the product instead of a browser tab, while keeping the same account and data you use everywhere else.

Like the [web app](/platforms/web), the [Android app](/platforms/android), and the [browser extension](/platforms/browser-extension), the desktop app shares one account and data store. Sign in once and your content is available across all of them. For the product overview, see the [introduction](/intro), and for the full capability list, the [tools overview](/tools/overview).

## Why a desktop app

The desktop app is aimed at local and GPU-assisted workflows where a dedicated window and more headroom help model execution. Running in its own application window, separate from the browser, gives the app room to work and keeps it out of the way of your tabs. For people who lean on AI features heavily, a standalone desktop environment can make those workflows more comfortable and give model execution more headroom than a shared browser session.

Because ContentSynergy AI runs its default AI flow on the client, a desktop context that can take advantage of local and GPU-assisted execution fits the product's design well. The [how the AI works](/ai/how-ai-works) page explains the open-source models and acceleration the app uses, and the [zero-cost model](/concepts/zero-cost-model) page covers why client-side execution is central to keeping the product free.

## Built with Electron and electron-builder

Electron lets the app run as a native desktop program across operating systems from a shared codebase, and electron-builder handles packaging it into installers for Windows, macOS, and Linux. This means the same product you know from the web is available as a proper desktop app on all three major platforms, without maintaining three separate native codebases. The [system architecture](/concepts/architecture) page describes how this shared codebase serves every surface.

## Same account and data

A key point is continuity: the desktop app uses the same account and data as the other surfaces. There is no separate desktop-only account or isolated data set. Whatever you create on the web, Android, or the extension is the same content you see on the desktop, and vice versa. This keeps your workflow unified no matter where you happen to be working.

## Getting started

Install the desktop build for your operating system, sign in with your account, and continue where you left off. The [installation guide](/getting-started/installation) covers setup details. For how your data is handled, including export and account deletion, see the [privacy and GDPR](/analytics/privacy-gdpr) page, and to change the interface language, see the [multi-language](/analytics/multi-language) page.

## Frequently asked questions

**Which operating systems does the desktop app support?**
It supports Windows, macOS, and Linux. It is built with Electron and packaged using electron-builder for all three platforms.

**Why use the desktop app instead of the web app?**
The desktop app is aimed at local and GPU-assisted workflows where a dedicated window and more headroom help model execution, which can suit AI-heavy use.

**Do I need a separate account for the desktop app?**
No. The desktop app uses the same account and data as the web, Android, and browser-extension surfaces.

**Is the desktop app a different product from the web app?**
No. It is the same ContentSynergy AI product in a native desktop window, sharing the codebase and your content across surfaces.

**Does the desktop app run AI locally too?**
The product's default AI flow runs on the client, and the desktop context is well suited to local and GPU-assisted execution. See [how the AI works](/ai/how-ai-works) for details.
