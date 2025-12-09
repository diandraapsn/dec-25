# Interactive Birthday Love Letter - Design Guidelines

## Design Approach
This project requires a custom, emotion-driven design centered around an interactive envelope/letter opening experience. The aesthetic should feel like a personal, handwritten love letter with vintage charm and Gen Z romantic sensibility.

## Color Palette
- **Primary**: Blush pink, cream, baby blue (soft pastels)
- **Accent**: Warm peachy tones for highlights
- **Text**: Soft charcoal or warm brown for readability against light backgrounds
- Use soft gradients throughout to create warmth and depth

## Typography
- **Primary Font**: Handwritten/script style for letter content and romantic messages (e.g., Dancing Script, Pacifico, or Sacramento from Google Fonts)
- **Secondary Font**: Clean serif or sans-serif for readability in longer paragraphs
- **Hierarchy**: Large, expressive titles with gentle animations; readable body text with handwritten feel

## Layout & Spacing
- **Central Focus**: All content centered on screen, especially the envelope interaction
- **Spacing Units**: Use generous padding (tailwind: p-8, p-12, p-16) to create breathing room and intimate feel
- **Container Width**: Moderate max-width (max-w-3xl to max-w-4xl) to maintain letter-like proportions

## Core Components & Sections

### 1. Landing/Envelope Animation
- Centered envelope illustration or graphic in viewport center
- Click-to-open interaction that unfolds/opens the envelope
- Smooth CSS animation revealing letter content inside
- Gentle floating/pulsing animation to indicate interactivity

### 2. Hero Section (Opened Letter)
- **Title**: "Someone I Love Was Born Today ✨"
- Fade-in animation as letter unfolds
- Decorative elements: small floating hearts, twinkling stars

### 3. Romantic Message Section
- Short, heartfelt paragraph in Gen Z romantic style
- Handwritten typography feel
- Gentle fade-in as user scrolls
- Emoji accents (💌 ✨ 💗)

### 4. "Reasons I Love You" Cards
- Grid or stacked card layout
- Each card contains one sweet reason/moment
- Soft shadows and rounded corners
- Subtle hover animations (gentle lift or glow)
- Include inside jokes and small moments

### 5. Interactive Birthday Surprise Button
- Prominent CTA button: "Click for a Birthday Surprise 🎉"
- **On Click Reveals**:
  - Hidden love note (modal or expanding section)
  - "1 Yes-Day Coupon" graphic/card
  - Floating emoji explosion animation (hearts, stars, confetti)
- Playful, celebratory interaction

### 6. Birthday Countdown Timer
- Countdown to December 25th
- Display format: days, hours, minutes, seconds
- **Note**: Website will be given on Dec 24 at 11:30 AM
- "Close your eyes and make a wish ✨" interaction element
- Gentle sparkle animations around countdown

### 7. Final Message Section
- **Title**: "To the Man Who Stole My Heart"
- Closing heartfelt birthday message
- Serves as letter signature/ending
- Warm, emotional tone

### 8. Background Music Toggle
- LANY song integration
- Toggle button in corner (autoplay OFF by default)
- Simple play/pause control with icon
- Subtle, non-intrusive design

## Animations & Interactions
- **Envelope Opening**: Smooth unfold/reveal animation (2-3 seconds)
- **Floating Hearts**: Gentle floating animations in background
- **Twinkling Stars**: Subtle sparkle effects
- **Text Fade-ins**: Smooth entrance animations as content appears
- **Emoji Explosion**: Triggered by surprise button, playful burst effect
- **All animations**: Soft, gentle, romantic - avoid jarring movements

## Images
- **Envelope Graphic**: Illustrated or decorative envelope as main interaction piece (center of landing screen)
- **Decorative Elements**: Small heart illustrations, star graphics, floral accents (🌷)
- **Coupon Design**: Visual "Yes-Day Coupon" card/ticket design
- **No large hero image needed** - the envelope serves as the focal point

## Responsive Behavior
- **Desktop Primary**: Optimized for PC viewing experience
- **Mobile Support**: Stack cards vertically, maintain envelope interaction, scale animations appropriately
- Ensure all interactive elements are touch-friendly

## Special Details
- Scatter cute emoji details throughout (💌 ✨ 💗 🌷)
- Vintage aesthetic touches: paper texture overlays, soft edges
- "Error: too much love 💗" playful popup (optional timing trigger)
- Warm, cozy atmosphere with soft glows and subtle shadows
- Maintain intimate, personal letter feel throughout

## Technical Notes
- Clean, beginner-friendly structure for easy text/color editing
- Smooth transitions between sections
- Ensure countdown timer accuracy for Dec 24-25 timing
- Music controls should be accessible but not distracting