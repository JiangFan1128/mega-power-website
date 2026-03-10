\# AGENTS.md



\## Mission

Build a premium multilingual corporate marketing website for MEGA.



MEGA must be positioned as:

\*\*an integrated digital green energy solutions provider\*\*

—not just a hardware vendor.



This project should communicate the company's capabilities across:

\- utility-scale storage

\- frequency regulation

\- integrated PV-ESS-charging

\- transportable energy storage

\- commercial \& industrial storage

\- digital platform capability

\- safety and reliability

\- O\&M and service readiness



The project-level guidance in this file is intentional because Codex reads `AGENTS.md` files before it starts work in a repository. :contentReference\[oaicite:30]{index=30}



---



\## Tech Stack

Use:

\- Next.js App Router

\- TypeScript

\- Tailwind CSS



Prefer:

\- app directory routing

\- reusable server-friendly page sections

\- clean file organization

\- content-driven rendering



Do not introduce unnecessary dependencies.



---



\## Routing and Localization

Implement locale-based routing for:

\- /en

\- /ja

\- /zh



Requirements:

\- English is the source language

\- Japanese and Chinese mirror the same content structure

\- add a language switcher in the header

\- keep locale content in structured files

\- do not hardcode long-form content inside UI components



Suggested content structure:

\- /content/en.ts

\- /content/ja.ts

\- /content/zh.ts



or equivalent structured locale modules.



---



\## Page Requirements

Build these top-level pages:

\- Home

\- Scenarios

\- Solutions

\- Platform

\- Products

\- Safety \& Reliability

\- Services

\- About

\- Contact



All pages must exist under all locales.



---



\## Homepage Rules

Homepage must be scenario-first.



Required section order:

1\. Hero

2\. Core Value Proposition

3\. Featured Scenarios

4\. Solutions Overview

5\. Platform / 6S+EDR Capability

6\. Product Families

7\. Safety \& Reliability

8\. Service \& Japan Local Support

9\. Basic Contact CTA



Do not move Products above Scenarios.



---



\## Scenarios Page Rules

Scenarios is a top-level page and a major conversion page.



Required scenario groups:

\- Grid \& Renewable Integration

\- Frequency Regulation \& Grid Stability

\- EV Charging in Weak-grid or Space-constrained Conditions

\- Commercial \& Industrial Cost Optimization

\- Off-grid / Temporary / Emergency Power

\- Japan-specific Deployment Needs



This page should explain customer environments and problems first, then MEGA's approach.



---



\## Japan Market Rules

Japan is a priority market in this website.



Reflect Japan-oriented messaging in:

\- homepage support section

\- scenarios page

\- service page

\- about page where relevant



Focus on:

\- constrained site conditions

\- operational reliability

\- resilience

\- maintainability

\- support readiness

\- communication trust



Do not make unsupported legal or regulatory claims.



---



\## Design Rules

Use the uploaded HTML reference for:

\- color palette direction

\- typography tone

\- card structure

\- spacing rhythm

\- dark industrial-tech atmosphere



Do not reuse:

\- the HTML logo

\- the HTML icons

\- emoji placeholders

\- decorative assets as final assets



No large hero photo or video is required for this MVP.



---



\## Product Rules

Products page must:

\- use real product information from the source PDF

\- use product images from the source PDF where practical

\- organize products by family

\- show key specs in a readable format

\- stay expandable for future detail pages



Do not add PDF download buttons in the current version.



---



\## Platform and Safety Rules

Treat Platform and Safety as strategic content, not secondary content.



Platform page must present:

\- digital warning

\- traceability

\- monitoring

\- control

\- O\&M workflow logic



Safety \& Reliability page must present:

\- safety architecture

\- warning and response

\- operational confidence

\- trust and maintainability messaging



---



\## Services Rules

Services page should communicate:

\- service strategy

\- localized service logic

\- long-term support

\- partner collaboration

\- Japan support readiness



No fake office locations, phone numbers, or operational promises.



---



\## Contact Rules

For the MVP:

\- show only basic contact information

\- do not build a contact form

\- keep CTA simple and professional



---



\## Component Rules

Use reusable components.



Suggested shared components:

\- Header

\- Footer

\- LanguageSwitcher

\- HeroSection

\- SectionIntro

\- ScenarioCardGrid

\- SolutionBlock

\- PlatformFeatureGrid

\- ProductFamilyTabs

\- ProductCard

\- TrustSection

\- ServiceSection

\- CTASection



Keep components modular and content-driven.



---



\## Content Rules

\- No lorem ipsum

\- No filler charts

\- No fake statistics beyond provided material

\- Keep tone professional and concise

\- English copy should be the source of truth

\- Japanese and Chinese should be easy to map structurally



---



\## Accessibility and Responsiveness

Must include:

\- semantic HTML

\- accessible headings

\- visible focus states

\- responsive layout

\- mobile navigation

\- legible text contrast



---



\## SEO Basics

Add basic metadata for each page:

\- title

\- description

\- locale-aware metadata

\- Open Graph basics if practical



Keep it clean and minimal.



---



\## Coding Style

\- keep files readable

\- avoid over-engineering

\- prefer simple composition

\- use clear naming

\- extract repeated UI patterns

\- keep implementation production-minded



---



\## Acceptance Criteria

The work is acceptable when:

\- all required pages exist

\- locale routing works for en / ja / zh

\- homepage is scenario-first

\- Scenarios is a top-level page

\- design reflects the uploaded HTML's tone without copying its brand assets

\- product families render cleanly

\- product information is not treated as downloadable PDFs

\- platform and safety pages clearly strengthen trust

\- Japan support messaging is visible

\- layout works on desktop and mobile

