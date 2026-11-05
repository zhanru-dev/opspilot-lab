# OpsPilot — Product Brief

## Problem

Operations teams running high-stakes online events — product launches, customer conferences, company all-hands — prepare them across spreadsheets, chat threads and several tools. Just before going live, nobody can say with confidence whether the event is ready. Afterwards, nobody can reconstruct who decided what.

## Users

- **Operations manager** — owns the event and decides when it goes live.
- **Analyst** — read-only; follows readiness and results.
- **Attendee** — registers, verifies their email, watches and takes part.

## Golden flow

1. **Prepare** — the manager sets owners, the runbook, audience access and media. Launch Control turns this evidence into a readiness score and blocks going live while a hard blocker remains.
2. **Admit** — attendees register on a public page and verify their email. Access can be public, limited to email domains, or invitation-only.
3. **Run** — the event streams live; attendees chat, ask questions and vote in polls; the operations team watches one live room.
4. **Record** — every important decision is audited, and other systems are notified through signed webhooks.

## What success looks like

- A manager can answer "can we go live?" on one screen, with the evidence behind the answer.
- The system refuses to go live while a hard blocker remains.
- Every important decision has an actor, a time and a reason.
- An attendee whose access is revoked loses it immediately.

## Out of scope

Billing and self-service sign-up, single sign-on, native mobile apps.

## Optional modules

Built only after the golden flow works: AI-assisted recommendations, analytics snapshots, error triage, a public case-study page.