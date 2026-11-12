---
title: "How to Publish an App on the App Store (and Google Play): Accounts, Requirements, Review and Common Rejections"
description: "How to publish an app to the Apple App Store and Google Play: developer accounts and fees, preparing builds, App Store Connect setup, screenshots and metadata, privacy labels, TestFlight, submission and App Review, Google Play Console, closed testing requirements, data safety, common rejection reasons, and publishing apps made with AI app builders."
date: 2026-11-12
cluster: web
order: 168
hire: an app published to the stores
hirekind: app
---

<p class="lede">To publish an app on the <strong>Apple App Store</strong>: join the <strong>Apple Developer Program</strong> (annual fee), create the app in <strong>App Store Connect</strong>, upload a signed build from <strong>Xcode</strong> (or your build tool), add <strong>screenshots, description, privacy details and pricing</strong>, test with <strong>TestFlight</strong>, then <strong>submit for App Review</strong>. For <strong>Google Play</strong>: create a <strong>Play Console</strong> account (one-time fee), upload an <strong>Android App Bundle</strong>, complete the store listing, <strong>data safety</strong> and content forms, run required testing, and roll out to production.</p>

## Apple App Store: step by step

1. **Enroll** in the Apple Developer Program (individual or organisation; organisations need a D-U-N-S number)
2. **Create an App ID** and certificates/provisioning (Xcode can manage automatically)
3. **Create the app record** in App Store Connect: name, bundle ID, SKU, primary language
4. **Archive and upload** the build from Xcode (Product › Archive › Distribute) or via CI/EAS for React Native/Expo
5. **TestFlight:** test internally and with external testers
6. **Store listing:** subtitle, description, keywords, screenshots for required device sizes, app icon, support URL, marketing URL
7. **App Privacy:** privacy policy URL and privacy "nutrition label" (data collected and how it's used)
8. **Age rating, pricing and availability**
9. **Submit for review** with notes and demo login credentials if needed
10. **Release** manually or automatically after approval

Review often takes around a day or two, but can vary.

## Google Play: step by step

1. **Create a Play Console developer account** (one-time fee; identity verification)
2. **Create the app** and set default language, app/game, free/paid
3. **Upload an Android App Bundle (.aab)** signed with Play App Signing
4. **Testing:** internal, closed and open tracks. New personal developer accounts may be required to run a **closed test with a minimum number of testers for a set period** before production access (check current requirements)
5. **Store listing:** title, short and full description, icon, feature graphic, screenshots
6. **App content:** privacy policy, data safety form, ads declaration, content rating questionnaire, target audience
7. **Roll out** to production (staged rollouts recommended)

## Publishing apps made with AI app builders (e.g., Base44-style tools)

Many AI and no-code app builders generate **web apps**. To publish to app stores you typically:
1. Check whether the builder offers **native export** or app store publishing (some do, sometimes on paid plans)
2. Otherwise **wrap the web app** with a tool like Capacitor or a builder-supported wrapper (see [How to turn code into an app](/blog/how-to-turn-code-into-an-app/))
3. Add **native value** (push notifications, offline features), since Apple may reject thin website wrappers
4. Follow the steps above for accounts, signing and review

## Common App Store rejection reasons

- **Crashes and bugs** (Guideline 2.1, app completeness)
- **Incomplete information:** missing demo account, broken links
- **Minimum functionality:** apps that are just websites or too simple
- **In-app purchase rules:** digital goods must use Apple's IAP in most cases
- **Privacy:** missing policy, inaccurate privacy labels, requesting unnecessary permissions without explanation
- **Misleading metadata or screenshots**
- **Copycat or spam apps**
- **Sign in with Apple** requirement when offering certain third-party logins (check current rules)

## Google Play common issues

- Inaccurate data safety form
- Missing privacy policy
- Permissions policy violations (SMS, call log, location in background)
- Impersonation or intellectual property issues
- Not meeting target API level requirements

## After publishing

- Monitor crashes and reviews
- Reply to reviews
- Ship regular updates (and keep up with OS/SDK requirements)
- Optimise listings (ASO) and track conversion from store page views

(Building the app: [How to make an app](/blog/how-to-make-an-app/). Monetisation: [How to create an app and make money](/blog/how-to-create-an-app-and-make-money/).)

## Frequently asked questions

### How do I publish an app on the App Store?
Join the Apple Developer Program, create the app in App Store Connect, upload a signed build, add metadata, screenshots and privacy details, test with TestFlight and submit for App Review.

### How much does it cost to publish an app?
Apple charges an annual developer program fee; Google Play charges a one-time registration fee. Check current pricing on their websites.

### How long does App Store review take?
Often a day or two, but it varies; updates and resubmissions follow the same process.

### Can I publish a Base44 or AI-built app to the App Store?
Usually yes, if the tool supports native export or you wrap the web app with a tool like Capacitor and add genuine app functionality, then follow standard submission steps.

### Why was my app rejected by Apple?
Common reasons include crashes, missing demo credentials, minimal functionality, in-app purchase violations, privacy issues and misleading metadata.

### Do I need a Mac to publish an iOS app?
Traditionally yes, for Xcode; cloud build services (like Expo EAS or CI providers with macOS runners) can build and upload without owning a Mac.
