---
id: scheduling
title: Scheduling and Autopilot
description: Schedule social content across connected platforms with daily, weekly, monthly, or custom recurrence, an autopilot queue, and a calendar view.
sidebar_label: Scheduling
keywords:
  - social media scheduling
  - content calendar
  - autopilot queue
  - recurring posts
  - client-side scheduler
  - local notifications
  - zero-cost publishing
---

# Scheduling and Autopilot

Scheduling is the part of ContentSynergy AI that lines your finished content up to publish later across the networks you have connected, with a calendar and queue to see what is planned. You pick when a post should go out and, if you want, how often it should repeat — daily, weekly, monthly, or on a custom cadence — and the app holds it in a queue until its time arrives. An autopilot mode keeps that queue moving so a steady stream of content goes out without you staging each item by hand. Everything is driven client-side against Firestore, with no paid always-on server behind it.

## What it does

The scheduler takes content you have created — for example drafts from the [text post generator](/content/text-posts) — and assigns each one a time and one or more destination networks from your [connected social platforms](/publishing/social-platforms). Instead of publishing immediately, the post waits in your queue. You can plan a single one-off post or a repeating series, and you can see the whole plan laid out so you know what is going where and when.

This turns ad-hoc posting into a planned program. You batch your creation in one sitting, set the cadence, and let the queue carry it forward.

## The controls and options

Scheduling gives you these main controls:

- **Date and time** — choose exactly when a post should publish.
- **Target platforms** — select which connected networks each scheduled item should go to.
- **Recurrence** — set how the post repeats:
  - **Daily** — the post recurs every day.
  - **Weekly** — the post recurs on a weekly cadence.
  - **Monthly** — the post recurs on a monthly cadence.
  - **Custom** — define your own cadence when the standard intervals do not fit.
- **Autopilot mode** — turn on a mode that keeps the queue flowing so content continues to publish on the cadence you set without per-item staging.
- **Calendar / queue view** — see scheduled items on a calendar and in a queue, so the plan is visible at a glance.

## How it works: client-side scheduling against Firestore

Your scheduled posts and their cadence are saved in Firestore, on Firebase's free tier, under your account. The scheduling logic runs client-side, evaluating which items are due against the schedule you defined. This design is deliberate and is what keeps the feature aligned with the [zero-cost model](/concepts/zero-cost-model): there are no Firebase Cloud Functions and no paid compute layer doing the dispatching in the background.

When a scheduled item comes due, the app dispatches it to the target networks using the OAuth tokens stored from your [platform connections](/publishing/social-platforms).

## An honest note on dispatch timing

Because there is no paid, always-on server running around the clock, the app dispatches scheduled posts when it is running — when you have it open, or through its client-side scheduling — rather than from a server that fires precisely at a timestamp whether or not anything is open. Set your expectations accordingly: scheduling here is a planning and queueing tool that publishes as the app runs, not a guaranteed second-accurate cloud cron.

To make this practical, the app uses local notifications to remind you on mobile, so you can open it around the times your content is due. On Android, these reminders surface on the device. See [the Android platform notes](/platforms/android) for how local notifications behave there. The honest framing is the point: you get free, flexible scheduling with no server bill, in exchange for dispatch that depends on the app running rather than a paid backend.

## Where the data lives

Schedules, recurrence rules, and queue state live in Firestore under your account, on the free tier. Uploaded media that a post references is handled through FilesHub, not a paid storage bucket. Nothing about scheduling introduces a paid service. For the full picture of how the stack stays free, read [the zero-cost model](/concepts/zero-cost-model), and to publish your first scheduled post, follow the [quick start](/getting-started/quick-start). You can also browse the [tools overview](/tools/overview) or return to the [introduction](/intro).

## Frequently asked questions

**What recurrence options are available?**
Daily, weekly, monthly, and custom. You can also schedule a single non-repeating post, or let autopilot keep the queue flowing.

**Will my posts publish exactly on time if the app is closed?**
Not guaranteed. There is no paid always-on server, so the app dispatches scheduled posts when it is running and through its client-side scheduling. Local notifications remind you on mobile so you can open it around due times.

**What is autopilot mode?**
Autopilot keeps your queue moving so content continues publishing on the cadence you set, without you staging each item individually.

**Where are my schedules stored?**
In Firestore, under your account, on Firebase's free tier. There are no Cloud Functions and no paid compute involved.

**Do I need to connect platforms before scheduling?**
Yes. Scheduling publishes to the networks you have linked. Set those up first on the [social platforms](/publishing/social-platforms) page.
