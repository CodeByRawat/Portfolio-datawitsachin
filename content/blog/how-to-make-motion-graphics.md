---
title: "How to Make Motion Graphics: Step-by-Step for Beginners (After Effects, Text Animation, Animated Backgrounds and Loops)"
description: "A practical beginner's guide to making motion graphics: planning, designing assets, animating in After Effects, keyframes and easing, animating text, making animated backgrounds, creating seamless loops, adding sound, exporting for social media, free alternatives, and the mistakes that make animation look amateur."
date: 2026-11-12
cluster: creative
order: 85
hire: a motion graphics video
hirekind: creative
---

<p class="lede">To make motion graphics: <strong>plan the message and storyboard</strong>, <strong>design your assets</strong> (in Illustrator, Figma or directly in your animation tool), <strong>animate them with keyframes and easing</strong> in software such as Adobe After Effects, <strong>time the movement to music or voiceover</strong>, add sound effects, and <strong>export</strong> in the right format and aspect ratio for each platform. The technical part is learnable in weeks; what makes motion graphics look professional is planning, timing and restraint.</p>

This guide walks through the full process with beginner-friendly explanations of keyframes, easing, text animation, animated backgrounds and loops, plus free tools if you don't have After Effects. (New to the topic? Start with [What are motion graphics?](/blog/what-are-motion-graphics/))

## Step 1: Define the goal and format

Before opening any software, answer:
- **What is the one message?** ("Book a demo", "50% off this week", "Our app tracks invoices automatically")
- **Who is it for, and where will they see it?** A TikTok ad, a LinkedIn post, a website hero, a YouTube intro
- **Length:** 6–15 seconds for ads and social, 30–90 seconds for explainers
- **Aspect ratio:** 9:16 (Reels, TikTok, Shorts), 1:1 or 4:5 (feed), 16:9 (YouTube, web)
- **Sound:** will most people watch muted? (Usually yes on social, so text must carry the message)

## Step 2: Write a short script

Even a 10-second ad needs a script: the exact words on screen or in voiceover, scene by scene. Rule of thumb: about **2.5 spoken words per second**, and no more than **5–7 words on screen at once** for fast social videos.

## Step 3: Storyboard it

Sketch each scene in boxes (even stick figures are fine) with notes on what moves and how it transitions to the next scene. Good storyboards plan **transitions**: a circle that grows to become the next background, a word that morphs into an icon, the camera pushing through a phone screen into the app. Strong transitions are what make motion graphics feel premium.

## Step 4: Design the assets

- Create **style frames**: two or three key frames fully designed with final fonts, colours and illustrations
- Build vector assets in **Illustrator or Figma**, keeping each element that moves on its **own layer** with clear names
- Prepare **brand assets**: logo (vector), colour codes, fonts, product screenshots or UI
- Design at the **export resolution** (e.g., 1080×1920 for vertical)

## Step 5: Animate with keyframes

A **keyframe** records a property value (position, scale, rotation, opacity) at a point in time; the software interpolates between keyframes.

The core properties (After Effects shortcuts in brackets): **Position (P), Scale (S), Rotation (R), Opacity (T), Anchor point (A)**.

### Easing: the secret to smooth motion
Real objects accelerate and decelerate. Linear motion looks robotic. In After Effects, select keyframes and press **F9 (Easy Ease)**, then open the **Graph Editor** to shape the speed curve: a fast start and long, gentle settle feels modern and confident.

### Timing principles
- **Overlap and offset:** don't start everything at once; stagger elements by 2–4 frames
- **Anticipation and overshoot:** a slight pull back before a move, or a small overshoot before settling, adds life
- **Hold:** give the viewer time to read: roughly 1 second per 3 words, minimum
- **Match the beat:** place big moves on music beats or voiceover emphasis

## Step 6: Animate text

Kinetic text is the backbone of most social motion graphics.

**In After Effects:**
1. Create a text layer with the Type tool.
2. Use **Text Animators** (twirl open the layer › Animate › Position/Opacity/Scale) with a **Range Selector** to reveal letters, words or lines one at a time.
3. Or apply **Animation Presets** (Effects & Presets › Animation Presets › Text) for quick typewriter, fade-up or bounce effects, then customise.
4. Use a **track matte** (a shape layer above the text) to make words slide up from behind an invisible line, a clean, modern reveal.

**To make text wiggle**, add the expression `wiggle(3,10)` to Position (3 times per second, 10 pixels), or use a Wiggly selector in a text animator for per-letter jitter.

## Step 7: Make an animated background

Options from simple to advanced:
- **Gradient shift:** animate the colours or position of a gradient ramp slowly over the duration
- **Floating shapes:** blurred circles drifting with gentle `wiggle(0.3,80)` expressions
- **Fractal Noise** effect with an animated Evolution property for smoke, waves or texture
- **Pattern grids** moving with the Offset effect
- **3D environments** in Blender or Cinema 4D for premium hero videos

Keep backgrounds subtle so they don't compete with the message.

## Step 8: Create seamless loops

Loops are useful for website heroes, GIF-like social posts and backgrounds.
- Make the **first and last frames identical** (copy the first keyframes to the end)
- Use the expression `loopOut("cycle")` on properties to repeat keyframed motion forever
- For a longer, natural-looking loop from a short animation, offset several copies of the cycle in time and position so repetition isn't obvious

## Step 9: Add sound design and music

Sound makes motion feel physical: whooshes on transitions, clicks on UI taps, risers before reveals. Use properly licensed music and SFX libraries. Even if many viewers watch muted, those with sound on stay longer when it's well done.

## Step 10: Export for each platform

| Platform | Ratio | Resolution | Notes |
|---|---|---|---|
| Reels, TikTok, Shorts | 9:16 | 1080×1920 | Keep key text away from top and bottom UI zones |
| Instagram / Facebook feed | 4:5 or 1:1 | 1080×1350 / 1080×1080 | Captions burned in |
| YouTube, website | 16:9 | 1920×1080 or 3840×2160 | Higher bitrate |
| Website UI animation | Any | Vector | Export as Lottie (Bodymovin) or use Rive |

Export H.264 MP4 through Adobe Media Encoder (or the Render Queue), typically at 25 or 30 fps, 10–20 Mbps for 1080p.

## Free and cheaper alternatives to After Effects

| Tool | Platform | Best for |
|---|---|---|
| **Blender** | Desktop, free | 3D motion and 2D (Grease Pencil) |
| **DaVinci Resolve (Fusion page)** | Desktop, free tier | Node-based motion graphics and compositing |
| **Cavalry** | Desktop, free tier | Procedural 2D motion design |
| **Rive** | Web/desktop | Interactive web and app animation |
| **Canva, CapCut** | Web/mobile | Quick templates for social |
| **Alight Motion** | Mobile | Keyframe animation on a phone |

## Mistakes that make motion graphics look amateur

- Linear (un-eased) movement
- Too many fonts, colours and effects
- Everything moving at once with no hierarchy
- Text on screen too briefly to read
- Default presets used unchanged
- Transitions that don't connect scenes (random wipes and spins)
- Ignoring safe zones so captions are hidden by app buttons
- No sound design

## When to hire a motion designer

Learning is worthwhile if you'll make content regularly. Hiring makes sense when you need a polished brand video quickly, a campaign of many consistent ad variations, 3D or UI animation, or simply don't have the hours to learn. A professional will typically deliver script, storyboard, animation and all platform sizes in a fixed scope.

## Frequently asked questions

### How do I start making motion graphics?
Start with a short project: a 10-second animated text post. Plan the message, design simple assets, animate with keyframes and easing in After Effects or a free tool like Blender or Cavalry, add music and export in 9:16.

### Is After Effects hard to learn?
The basics (keyframes, easing, text animation, shape layers) can be learned in a few weeks of practice. Mastering timing, design and expressions takes much longer. Many free tutorials help beginners.

### How do you animate text in After Effects?
Use Text Animators with a Range Selector to reveal characters, words or lines, apply text animation presets, or slide text through a track matte. Add Easy Ease to keyframes for smooth motion.

### How do you make an animated background?
Animate a gradient, add slowly drifting blurred shapes with wiggle expressions, use the Fractal Noise effect, or loop a moving pattern, keeping it subtle behind your main content.

### How do you make a small animation loop for longer?
Make the first and last frames match, use loopOut("cycle") expressions to repeat keyframes, or time-remap and duplicate the cycle with offsets so repetition is less noticeable.

### Can I make motion graphics on my phone?
Yes. Apps like Alight Motion, CapCut and Canva support keyframes, text animation and templates, though desktop software gives more control for professional work.
