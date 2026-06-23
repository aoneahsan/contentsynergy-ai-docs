---
id: themes-personalization
title: Themes and Personalization
description: Customize appearance, accent color, radius, scaling, font size, and panel background with a Radix UI theme customizer for signed-in and signed-out users.
sidebar_label: Themes & Personalization
keywords:
  - theme customizer
  - radix ui theming
  - appearance light dark system
  - accent color picker
  - cross-device preferences
  - boot loader hydration
  - zero-cost personalization
---

# Themes and Personalization

Themes and Personalization is the built-in theme customizer that lets you tailor how ContentSynergy AI looks across seven visual dimensions, available whether or not you are signed in. The app is built on Radix UI throughout, and the customizer exposes that system through card-based selectors — visual tiles you click rather than dropdown menus — so you can set appearance, accent color, border radius, UI scaling, font size, and panel background to taste. Your choices persist locally on the device and, when you are signed in, sync across your devices through Firestore. A full-page boot loader holds the first render until both the theme and your authentication state have loaded, so you never see a flash of the wrong theme.

## What it does

The customizer makes the interface yours. It changes the app's chrome and surfaces consistently because the whole UI is Radix-based, so a setting applies everywhere rather than to one screen. Crucially, it works for everyone: signed-out visitors can personalize the look and have it remembered on their device, and signed-in users get the same controls plus cross-device sync. Personalization is not gated behind an account.

## The controls and options

The customizer exposes seven dimensions, each through card-based selectors:

- **Appearance** — light, dark, or system. System follows your operating system's preference.
- **Accent color** — choose from twelve primary colors to set the app's highlight color.
- **Border radius** — set how rounded the interface corners are.
- **UI scaling** — scale the overall interface up or down for comfort.
- **Font size** — adjust text size for readability.
- **Panel background** — set the background treatment for panels and surfaces.

These are visual tiles, not dropdowns, so you see the effect of a choice as you make it. The header carries a Palette icon that opens the customizer at any time, plus a quick appearance-cycle button that steps through light, dark, and system without opening the full panel.

## How it works: persistence and hydration

Your preferences are saved with a dual-layer strategy. Locally, the app stores them through `@capacitor/preferences`, which maps to the device's storage on web and native. When you are signed in, the same preferences are written to Firestore under `users/{uid}.preferences`, which becomes the cross-device source of truth, so a change on one device shows up on another. To avoid hammering the database during rapid adjustments, the remote writes are debounced — the app waits for you to settle before syncing.

On first paint and on a hard reload, a full-page boot loader gates the render until the theme is hydrated and authentication has resolved its first state. This prevents the flash where the app would otherwise render in the default theme and then snap to your saved one. The loader keeps the wait pleasant with rotating copy — quotes and tips that cycle while the app initializes — rather than a blank screen.

None of this depends on a paid service. Preferences ride on Firebase's free tier with no Firebase Cloud Functions, consistent with the [zero-cost model](/concepts/zero-cost-model) the app is built around.

## Where the data lives

Locally, preferences live in device storage through `@capacitor/preferences`. For signed-in users, they also live in Firestore at `users/{uid}.preferences` on the free tier, which keeps your look consistent across devices. There is no paid storage layer. Signing out leaves your local preferences in place, so the device keeps showing your last chosen look. For the broader free-stack picture, read [the zero-cost model](/concepts/zero-cost-model).

Personalization sits alongside the rest of the app. Once the interface feels right, head into the studio — for example the [text post generator](/content/text-posts) — line content up in [scheduling](/publishing/scheduling), and publish to your [connected platforms](/publishing/social-platforms). To get oriented, see the [introduction](/intro), the [quick start](/getting-started/quick-start), the [tools overview](/tools/overview), and [how the AI works](/ai/how-ai-works).

## Frequently asked questions

**Can I customize the theme without an account?**
Yes. The customizer is available to both signed-in and signed-out users. Signed-out preferences are remembered on your device; signing in adds cross-device sync.

**What can I change?**
Seven dimensions: appearance (light, dark, system), accent color from twelve primary colors, border radius, UI scaling, font size, and panel background — all through card-based selectors.

**How do my settings sync across devices?**
When you are signed in, preferences are written to Firestore under `users/{uid}.preferences` with debounced updates, so changes on one device appear on another. Locally, they are stored through `@capacitor/preferences`.

**Why is there a loading screen when the app starts?**
A full-page boot loader holds the first render until the theme and your authentication state have loaded, preventing a flash of the wrong theme. It shows rotating quotes and tips while it initializes.

**Does personalization cost anything or use a paid backend?**
No. It runs on Firebase's free tier with no Cloud Functions, in line with the [zero-cost model](/concepts/zero-cost-model).
