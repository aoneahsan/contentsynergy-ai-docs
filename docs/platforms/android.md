---
id: android
title: Android App
description: ContentSynergy AI on Android is a Capacitor 8 app on Google Play with native share, local notifications, edge-to-edge display, and native Google sign-in.
sidebar_label: Android
keywords:
  - android app
  - capacitor
  - google play
  - local notifications
  - native google sign-in
  - edge-to-edge
---

# Android App

The Android app is ContentSynergy AI packaged as a native Android application, built with Capacitor 8 and published on Google Play. It brings the same account and content you use on the web to a mobile device, wrapped with native Android capabilities that make sense on a phone.

The app's package name is `com.aoneahsan.contentsynergy`, and you can find it on Google Play at [play.google.com/store/apps/details?id=com.aoneahsan.contentsynergy](https://play.google.com/store/apps/details?id=com.aoneahsan.contentsynergy). It shares one account and data store with the [web app](/platforms/web), the [browser extension](/platforms/browser-extension), and the [desktop app](/platforms/desktop), so your work stays in sync across surfaces. For the broader picture, see the [introduction](/intro) and the [tools overview](/tools/overview).

## Built with Capacitor

[Capacitor](https://capacitorjs.com/) is the framework that wraps the app's web codebase into a native Android app while giving it access to device features. Using Capacitor 8 means the Android app stays close to the web experience in functionality while adding the native integrations below. The [system architecture](/concepts/architecture) page describes how the shared codebase serves all four surfaces.

## Native Android features

The Android app adds capabilities that take advantage of the device:

- **Share sheet.** The app integrates with Android's native share sheet, so you can send content to other apps through the standard system interface.
- **Local notifications for scheduled posts.** When you schedule a post, the app can use local notifications to remind you. Local notifications are generated on the device and work regardless of any cloud configuration.
- **Edge-to-edge display.** The app renders edge-to-edge, drawing content correctly around the system status and navigation bars. This is handled properly using the capawesome edge-to-edge plugin, so content sits in the right place rather than behind the system bars.

## Native Google sign-in

On Android, Google sign-in uses the native `@capgo/capacitor-social-login` flow. This means you sign in with the device's native Google account picker rather than a web popup. Importantly, this native flow lands on the same Firebase user as the web app, so signing in on Android gives you the same account and the same content as everywhere else. Firebase Auth's Google sign-in is described further on the [how the AI works](/ai/how-ai-works) and [architecture](/concepts/architecture) pages in the context of the shared data store.

## An honest note on notifications

There is an important distinction between two kinds of notifications. Local notifications, used for scheduled-post reminders, are created on the device and work regardless of cloud setup. Native push notifications, on the other hand, require the project's `google-services.json` to be present in the build. That file is a Firebase configuration the developer adds at build time. So while local notifications work out of the box, push notifications depend on that configuration being included. This is stated plainly so expectations match reality.

## Getting the app

Install from Google Play using the link above, then sign in with Google to reach your account. The [installation guide](/getting-started/installation) covers first-run details. For how your data and uploads are handled on every surface, including account deletion, see the [privacy and GDPR](/analytics/privacy-gdpr) page, and the [zero-cost model](/concepts/zero-cost-model) page explains the no-paid-backend design that the Android app shares.

## Frequently asked questions

**Where can I download the Android app?**
It is on Google Play at the listing for package `com.aoneahsan.contentsynergy`. Install it and sign in with Google to access your account.

**Does signing in on Android create a separate account?**
No. The native Google sign-in flow lands on the same Firebase user as the web app, so your account and content are shared.

**Do scheduled-post reminders work without extra setup?**
Yes. Scheduled-post reminders use local notifications, which are generated on the device and work regardless of cloud configuration.

**What about push notifications?**
Native push notifications require the project's `google-services.json` to be present in the build, a Firebase configuration the developer adds. Local notifications do not depend on it.

**How does the app handle the status and navigation bars?**
It uses an edge-to-edge display handled correctly via the capawesome edge-to-edge plugin, so content renders in the right place rather than behind the system bars.
