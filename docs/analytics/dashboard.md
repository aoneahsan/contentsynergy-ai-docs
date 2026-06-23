---
id: dashboard
title: Analytics Dashboard
description: The ContentSynergy AI analytics dashboard visualizes content performance with D3.js charts, A/B testing, survey analytics, and JSON/CSV export.
sidebar_label: Analytics Dashboard
keywords:
  - analytics dashboard
  - d3.js charts
  - a/b testing
  - survey analytics
  - data export
  - content performance
---

# Analytics Dashboard

The analytics dashboard is the ContentSynergy AI workspace where you visualize how your content performs, compare variants, and export the underlying numbers for your own records. It gathers the activity tracked inside the app and renders it as readable charts so you can make editorial decisions with evidence rather than guesswork.

Every chart on the dashboard is drawn with [D3.js](https://d3js.org/), the visualization library the app uses for all of its charts. D3 gives the dashboard precise, fully custom rendering instead of a one-size-fits-all charting widget, which keeps the visuals consistent across bar charts, line charts, and distribution views.

## What the dashboard shows

The dashboard focuses on the data the app can genuinely measure. It reflects two honest sources: the events the app records as you create and manage content, and whatever each connected platform chooses to expose back to you. Where a platform does not return a metric, the dashboard does not invent one, so the numbers you see map to real activity.

Typical views include content volume over time, comparisons between drafts and variants, and breakdowns of survey responses. Because ContentSynergy AI keeps its data in Firebase Firestore on the free tier, the dashboard reads from your own stored records rather than a third-party reporting black box. To understand why the app avoids paid backends, see the [zero-cost model](/concepts/zero-cost-model).

## A/B testing content variants

A/B testing lets you create two or more versions of a piece of content and compare them side by side. Instead of guessing which headline, intro, or call to action works better, you keep both variants and review their performance in the dashboard.

The workflow is straightforward: produce the variants you want to compare, label them, and let the dashboard surface the difference in a chart. A/B testing is most useful when you have a clear question, such as which subject line earns more engagement, and a way for the platform to report the outcome. The dashboard presents the comparison honestly, including cases where the difference is small or inconclusive.

## Survey analytics

Survey analytics turns raw survey responses into summaries you can read at a glance. When you collect feedback or audience input, the dashboard aggregates the answers into counts and distributions so patterns become visible. This is helpful for validating content direction, gathering reactions to variants, or understanding which topics resonate. As with every view, survey analytics only reports the responses actually submitted.

## Exporting your data

Data export gives you a portable copy of your analytics in JSON or CSV. JSON preserves the full structure for developers and integrations, while CSV opens cleanly in spreadsheets for manual analysis. Export is part of ContentSynergy AI's broader commitment to keeping your data yours, the same principle behind the export options described on the [privacy and GDPR](/analytics/privacy-gdpr) page.

To start using the dashboard, follow the [installation guide](/getting-started/installation) and review the [tools overview](/tools/overview) to see how content created across the app feeds into your analytics. If you are new to the product, the [introduction](/intro) explains the bigger picture, and [how the AI works](/ai/how-ai-works) covers the client-side models behind your content.

## Frequently asked questions

**Which charting library powers the dashboard?**
All charts are built with D3.js. The app standardizes on D3 for every chart so the visualizations stay consistent and fully customizable.

**Can I export my analytics data?**
Yes. You can export in JSON for structured, machine-readable use or CSV for spreadsheets. Both formats contain the data the app has tracked for your account.

**Are the analytics numbers always complete?**
They reflect what the app tracks in-app and what each connected platform exposes. If a platform does not return a particular metric, the dashboard does not fabricate it.

**How does A/B testing decide a winner?**
A/B testing presents the variants and their measured outcomes side by side. You interpret the comparison; the dashboard does not overstate small or inconclusive differences.

**Where is the dashboard data stored?**
Your analytics records live in Firebase Firestore on the free tier, tied to your account, which is why the app can read and export them directly for you.
