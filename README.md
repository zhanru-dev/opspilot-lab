# OpsPilot

OpsPilot is an operations platform for teams running high-stakes online events, such as product launches, customer conferences and company all-hands.

It brings event preparation into one place and answers the question operations teams struggle with most: **is this event ready to go live?**

## What it does

- **Prepare**: owners, runbook, audience access and media in one control surface. Launch Control turns this evidence into a readiness score and blocks going live while a hard blocker remains.
- **Admit**: attendees register on a public page and verify their email. Access can be public, limited to email domains, or invitation-only.
- **Run**: live streaming with chat, questions and polls, plus a live room for the operations team.
- **Record**: every important decision is audited, and other systems are notified through signed webhooks.

## Getting started

Requirements: Node.js 22 and npm 10.

```bash
npm ci
cp .env.example .env
npm run dev:api
```

The API listens on http://127.0.0.1:4200. Check it with:

```bash
curl http://127.0.0.1:4200/api/v1/health/live
```

## Status

Early development. See the [product brief](docs/product-brief.md) for the problem, users and scope.
