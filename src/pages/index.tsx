import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

type Feature = {
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Text, image, video, audio & 3D',
    body: 'One studio for every format. Generate captioned text posts, styled images, Ken Burns reels, voice and music tracks, and 3D models — each with template or placeholder fallbacks so nothing hard-fails.',
  },
  {
    title: 'Zero-cost, browser-based AI',
    body: 'AI runs client-side on open-source models (transformers.js, WebGPU, WebAudio, WebGL). No developer-funded paid LLM, no per-generation bill — the app is free to run and free to use.',
  },
  {
    title: 'Schedule & publish to 8 networks',
    body: 'Connect Facebook, Instagram, X, LinkedIn, YouTube, TikTok, Pinterest, and Telegram with OAuth 2.0 + PKCE. Queue posts on a calendar with daily, weekly, monthly, or custom recurrence.',
  },
  {
    title: 'Surveys, polls & analytics',
    body: 'Build surveys with 12 question types and conditional logic, then read responses through D3.js charts. A/B test variants and export results as JSON or CSV.',
  },
  {
    title: 'Fine-tune your brand voice',
    body: 'Train lightweight LoRA adapters on your own examples to steer tone and vocabulary, watch training progress, and apply an adapter to any text generation.',
  },
  {
    title: '100+ creator & developer tools',
    body: 'QR codes, hashes, passwords, color palettes, gradients, favicons, business cards, meta tags, conversions, and dozens more — all client-side, all in the same workspace.',
  },
];

function HomepageHeader(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/getting-started/quick-start"
          >
            Quick Start — 5 min
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/intro"
          >
            Read the Intro
          </Link>
          <Link
            className="button button--outline button--lg"
            href="https://contentsynergy.aoneahsan.com"
          >
            Open the App
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresWrap}>
      <div className="container">
        <div className="row">
          {FEATURES.map((f) => (
            <div key={f.title} className="col col--4" style={{ marginBottom: '1.5rem' }}>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorStrip(): ReactNode {
  return (
    <section className={styles.authorStrip}>
      <div className="container">
        <p>
          Built and maintained by{' '}
          <Link href="https://aoneahsan.com">Ahsan Mahmood</Link> —{' '}
          <Link href="https://linkedin.com/in/aoneahsan">LinkedIn</Link> ·{' '}
          <Link href="https://github.com/aoneahsan">GitHub</Link> ·{' '}
          <Link href="https://www.npmjs.com/~aoneahsan">npm</Link>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Zero-cost AI content studio`}
      description="Documentation for ContentSynergy AI: create and schedule social media content — text, images, video, audio, 3D, surveys — with zero-cost, browser-based AI."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AuthorStrip />
      </main>
    </Layout>
  );
}
