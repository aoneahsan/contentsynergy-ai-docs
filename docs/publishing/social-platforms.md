---
id: social-platforms
title: Social Platforms
description: Connect and publish to eight social networks from ContentSynergy AI using OAuth 2.0 with PKCE, with per-account tokens stored in Firestore.
sidebar_label: Social Platforms
keywords:
  - social media connections
  - oauth 2.0 pkce
  - publish to facebook instagram
  - linkedin youtube tiktok
  - pinterest telegram
  - social account authorization
  - zero-cost publishing
---

# Social Platforms

Social Platforms are the external networks you authorize ContentSynergy AI to post to on your behalf, connected through a standard OAuth 2.0 flow that uses PKCE for secure, password-free authorization. Instead of copying and pasting credentials, you grant the app a scoped access token from each network, and that token is stored against your account in Firestore so the app can publish the content you create. You can connect or disconnect any network at any time, and you only ever connect the ones you actually use.

## What it does

This section lets you link your ContentSynergy AI workspace to eight social networks: Facebook, Instagram, X (formerly Twitter), LinkedIn, YouTube, TikTok, Pinterest, and Telegram. Once a network is connected, content you generate in the studio — for example a draft from the [text post generator](/content/text-posts) — can be sent to that network rather than copied out by hand. Connecting is the prerequisite for publishing and for the [scheduling](/publishing/scheduling) workflow, where queued posts go out to the accounts you have linked.

Each connection is per-network and independent. Linking Facebook does not link Instagram, and removing LinkedIn leaves your other connections untouched. The app holds authorization only for the networks you deliberately connect.

## The controls and options

The connection panel gives you a row for each of the eight supported networks. For every network you can:

- **Connect** — start the OAuth 2.0 authorization flow for that specific network.
- **Disconnect** — revoke the stored token from the app and remove the connection.
- **See connection status** — whether a given network is currently linked to your account.

When you connect, you are sent to that network's own login and consent screen. You sign in directly with the network — never with the app — and it shows you exactly which permissions, or scopes, it is granting. The app never sees your social password.

## How OAuth 2.0 with PKCE works here

OAuth 2.0 is the industry-standard protocol for letting one application act on a user's behalf in another, without sharing the user's password. PKCE (Proof Key for Code Exchange) is an extension that hardens this flow against interception, which matters for browser and mobile apps like this one.

When you press **Connect** for a network, the app generates a one-time code verifier and sends its hashed challenge to the network. You then authorize on the network's site, and it returns an authorization code. The app exchanges that code — together with the original verifier — for an access token that represents your granted permission. ContentSynergy AI stores it against your account so it can publish on your behalf later, including from a scheduled queue.

This is the same kind of "Sign in with…" or "Connect your account" flow you have used on other services. Nothing about it depends on a paid backend; it fits the [zero-cost model](/concepts/zero-cost-model) the whole app is built around.

## Each platform sets its own rules

An honest note that matters for expectations: every network defines its own scopes, rate limits, content rules, and supported post types. The app requests the permissions a network requires to publish, but it cannot grant capabilities the network does not offer, and it cannot exceed limits the network enforces. For example, what counts as a valid image, video length, caption length, or posting frequency is decided by Facebook, Instagram, X, LinkedIn, YouTube, TikTok, Pinterest, or Telegram — not by ContentSynergy AI. If a network changes its API or tightens its limits, those changes apply to your connection too.

## Where the data lives

The access tokens you authorize are stored in Firestore, scoped to your account, on Firebase's free tier. There are no Firebase Cloud Functions in the app, and there is no paid storage layer for credentials. Because tokens are tied to your account, disconnecting a network removes the app's stored authorization for it. To learn how the rest of the stack stays free, see [the zero-cost model](/concepts/zero-cost-model), and to set up your first connection end to end, follow the [quick start](/getting-started/quick-start) and the [tools overview](/tools/overview). New to the app? Begin with the [introduction](/intro).

## Frequently asked questions

**Which networks can I connect?**
Eight: Facebook, Instagram, X (Twitter), LinkedIn, YouTube, TikTok, Pinterest, and Telegram. You connect each one individually and only the ones you want.

**Does the app see my social media password?**
No. You sign in on each network's own site through OAuth 2.0 with PKCE. The app receives a scoped access token, never your password.

**Where are my connection tokens stored?**
In Firestore, against your account, on Firebase's free tier. There is no paid storage and no Cloud Functions involved.

**Can I remove a connection later?**
Yes. Each network has a disconnect action that removes the app's stored authorization for that network without affecting your other connections.

**Why might a post be rejected by a network?**
Each platform enforces its own scopes, rate limits, and content rules. If a post falls outside what a network allows, that network — not the app — declines it. See [scheduling](/publishing/scheduling) for how queued posts depend on these connections.
