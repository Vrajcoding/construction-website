# Konstruktion — Service Page Implementation Specification

## Goal

Build the **Service page** for the Konstruktion website with a premium, editorial construction-industry aesthetic. The page should feel consistent with the existing **About Us page**, especially the section-label treatment, spacing system, typography hierarchy, image treatment, and overall visual rhythm.

**Important:** Do not treat this as a simple collection of text and images. Every section must use a deliberate Figma-style layout system with consistent containers, spacing, typography, alignment, and responsive behavior.

---

# 1. Global Design Rules

## Page structure

Use a centered content container throughout the page.

Recommended desktop container:

- Max width: `1440px`
- Horizontal page padding: `64px`
- Large desktop padding: `80px` where visually appropriate
- Tablet padding: `40px`
- Mobile padding: `20px–24px`

Do not let text touch the viewport edges.

## Spacing system

Use a consistent spacing scale instead of arbitrary values:

- `8px` — micro spacing
- `12px` — small spacing
- `16px` — compact spacing
- `24px` — standard spacing
- `32px` — medium spacing
- `48px` — section/content spacing
- `64px` — large spacing
- `80px` — major section spacing
- `96px–120px` — large section separation

For the Service page:

- The top of each major section should have **medium-to-large vertical spacing**.
- Avoid sections feeling crowded.
- Use generous whitespace between image blocks and text blocks.
- The second section should intentionally have **more top margin** so the page feels premium and spacious.

## Typography

Follow the existing website typography if already defined.

If typography is not already defined, use:

- Display / hero heading: large, bold, uppercase where appropriate
- Main section heading: `48px–64px`, bold
- Secondary heading: `32px–42px`, semibold
- Supporting text: `18px–22px`, medium/semibold depending on hierarchy
- Body text: `16px–18px`, regular/medium
- Small labels: `12px–14px`, medium/semibold

Recommended line heights:

- Large heading: `0.95–1.05`
- Secondary heading: `1.05–1.15`
- Body: `1.5–1.7`

Do not use excessive font weights. Keep a clear hierarchy.

## Colors

Use the existing brand colors from the project.

The orange accent should be used for:

- Section labels
- Accent lines
- Small interactive details
- Buttons where appropriate

Do not overuse orange.

## Images

Images should:

- Fill their assigned container
- Use `width: 100%`
- Use `height: 100%` when inside a fixed-height image wrapper
- Use `object-fit: cover`
- Have clean, intentional cropping
- Avoid visible distortion
- Maintain consistent border-radius only if the existing website design uses it

Do not add random image borders or effects.

---

# 2. Service Page — Task 1
## Service Intro / Hero Section

Create the first major section.

### Layout

Use a two-column layout:

- Left side: service introduction content
- Right side: large heading content

Suggested desktop ratio:

- Left: `40%`
- Right: `60%`

Use a generous gap between columns.

### Left side

At the top of the left content:

1. Show the text:

**SERVICE**

2. Add the same orange horizontal accent line used on the About Us page.

The label and orange line should visually match the About Us page exactly in:

- Size
- Thickness
- Color
- Spacing
- Alignment

Below the label, add the supporting text.

Use a medium-sized, semibold style.

The left content should have comfortable internal padding so it does not feel pressed against the section edges.

### Right side

Show:

**CONSTRUCTION**

Use:

- Very large typography
- Bold weight
- Strong visual impact
- Tight line height
- Uppercase styling if consistent with the existing About Us design

The heading should dominate the section visually.

### Image

Below the introductory content, add the main construction image.

Image requirements:

- Full available width
- Full assigned height
- `object-fit: cover`
- Strong visual presence
- No unnecessary margins inside the image wrapper

The image should feel like a large editorial banner rather than a small card.

### Recommended spacing

- Top section padding: `64px–96px`
- Label-to-line spacing: `8px–12px`
- Label/line-to-text spacing: `24px–32px`
- Text-to-image spacing: `48px–64px`
- Image height desktop: approximately `500px–700px`, depending on the source image

---

# 3. Service Page — Task 2
## Integrated Construction Services Section

This section should have **more top margin than the first section**.

The extra whitespace is intentional and should make the page feel sophisticated.

### Outer layout

Create one main container/div.

Inside it, create two columns:

- Left: large image
- Right: content

Recommended desktop ratio:

- Left image: `50%`
- Right content: `50%`

Use a generous column gap.

### Left image

The image should:

- Occupy the full height of the section
- Occupy the full width of its column
- Use `object-fit: cover`
- Have a strong editorial crop
- Align perfectly with the content block

Do not make the image a small card.

### Right content

Vertically center the content inside the section.

Show this heading:

**Delivering integrated construction services to build lasting success**

Typography:

- Semi-large
- Semibold
- Strong hierarchy
- Comfortable line height

Below it, show:

**When you partner with Konstruktion, you not only get innovative solutions, you get our fully vested team and a commitment to doing things right. Our relentless focus on success leads to smarter more collaborative building practices.**

Typography:

- Medium-sized body text
- Easy to read
- Regular/medium weight
- Comfortable line height
- Limit text width so the paragraph does not become too wide

### Content alignment

Both pieces of content should appear visually centered vertically within the right column.

Do not place them at the extreme top or bottom.

### Recommended spacing

- Section top margin: `96px–120px`
- Column gap: `64px–96px`
- Right content internal padding: `32px–64px`
- Heading-to-paragraph spacing: `24px–32px`

---

# 4. Service Page — Task 3
## Challenge / Vision Section

Add medium top spacing before this section.

Recommended:

- Top margin: `80px–96px`

### Layout

Create one main container with two columns:

- Left: text
- Right: image

Recommended ratio:

- Left: `45%`
- Right: `55%`

### Left content

Place this text:

**No matter the challenge, we build on what we know works and elevate your vision of success**

The content should:

- Be medium-sized
- Use semibold typography
- Have strong line height
- Have generous internal padding
- Be vertically positioned intentionally, preferably around the upper/middle portion of the text column

Use enough whitespace around it so the section feels premium.

### Right image

The image should:

- Fill the complete right-side image container
- Use full width
- Use full height
- Use `object-fit: cover`
- Have a strong visual crop

The image should visually balance the large text area.

---

# 5. Service Page — Task 4
## Scroll-Based Industry / Quality / Trends Section

This is the most interactive section of the Service page.

Create a **sticky/scroller-style two-column layout**.

### Overall concept

Desktop:

- Left side: scrollable/sticky text content
- Right side: large construction/installation image

The right-side image should initially appear at a **medium size** and then visually expand as the user scrolls.

The interaction should feel like a premium editorial scroll animation.

### Right-side image animation

Initial state:

- Medium-sized image
- Centered inside its image area
- Not immediately full-screen/full-column

During scrolling:

- Image gradually scales/expands
- Width increases
- Height increases
- Image moves toward occupying the full available image area
- Use smooth interpolation
- Avoid sudden jumps

Suggested animation behavior:

- Initial scale: approximately `0.75–0.85`
- Final scale: `1`
- Duration should be tied to scroll progress rather than a fixed timer
- Use smooth easing/interpolation

The animation should feel like the image is being revealed/expanded vertically as the user moves down the page.

### Important implementation requirement

Use a scroll-triggered animation library already available in the project if one exists.

If the project already uses **GSAP + ScrollTrigger**, use that rather than introducing another animation library.

Respect reduced-motion preferences:

- If `prefers-reduced-motion: reduce` is enabled, disable the large scroll animation and show the image normally.

---

# 6. Scroll Section — Left Content

Create a sticky/scrolling content area on the left.

There are three content states/blocks.

Each block should have clear separation and should become visually active as the corresponding scroll progress is reached.

---

## Content Block 1

### Heading

**Pushing the Industry Forward**

### Body

**At Konstruktion, we are passionate about driving value into every project we undertake. We continue to challenge our people, projects and the industry. By being forward-thinking, we are continually finding new ways to deliver success for our clients and stakeholders.**

Style:

- Heading: semi-large, semibold
- Body: medium/regular
- Comfortable line height
- Strong spacing between heading and paragraph

---

## Content Block 2

### Heading

**Quality Assurance**

### Body

**Konstruktion’s culture of quality is built into everything we do and begins with personal accountability from our employee-owners. Successful quality projects demonstrate our culture that embraces clear communication, strong problem-solving, and a relentless focus on creating strong relationships. We work with you from project start-up through completion to ensure your expectations are delivered and the final project meets all your needs.**

Style:

- Heading: semi-large, semibold
- Body: medium/regular
- Comfortable line height
- Keep the paragraph width controlled for readability

---

## Content Block 3

### Heading

**Tracking Project Trends**

### Body

**From smart sensors to comprehensive integrated project analytics, we track and trend progress, quality, safety and more. This data allows us to understand the immediate and potential impacts of items and provides a simple means of examining complex data, provide you with options, and resolve challenges before they become issues.**

Style:

- Heading: semi-large, semibold
- Body: medium/regular
- Comfortable line height

---

# 7. Scroll Navigation / Progress Indicator

On the left side, add a subtle scroller/progress indicator for the three content blocks.

Possible structure:

- Vertical line
- Three progress points/dots
- Active point changes based on scroll position

The active state should use the brand orange accent.

Inactive states should remain subtle.

The scroller should:

- Be visually minimal
- Not overpower the content
- Clearly communicate which content block is active
- Stay aligned with the text blocks

---

# 8. Contact CTA

At the end of the Service page, add a clear CTA.

Primary button text:

**CONTACT**

The button should follow the existing website's button style.

Recommended:

- Strong typography
- Medium-to-large click target
- Comfortable horizontal/vertical padding
- Orange accent/brand styling
- Hover state
- Keyboard focus state
- Smooth transition

The Contact button should navigate to the website's existing Contact page/route.

Do not create a duplicate contact page if one already exists.

---

# 9. Website / Home Navigation

Add a secondary navigation/button/link for the website's main page.

Use:

**HOME**

The Home button should navigate to the existing Home page.

If the website already has a navbar/header, keep navigation consistent with it instead of creating a completely separate navigation style.

---

# 10. Responsive Design

The Service page must be fully responsive.

## Desktop

Use:

- Two-column layouts
- Large typography
- Large images
- Generous whitespace
- Sticky scroll interaction

## Tablet

Adjust:

- Column widths
- Heading sizes
- Image heights
- Gaps
- Padding

Do not allow text to become cramped.

## Mobile

Stack sections vertically.

Order should generally be:

1. Label / introduction
2. Main heading
3. Image
4. Supporting content
5. Image/text sections
6. Scroll section content
7. Image
8. Contact CTA

For the scroll section on mobile:

- Disable complex sticky behavior if it causes usability issues
- Stack the three content blocks
- Keep the image visible
- Use a lighter scroll/reveal animation
- Never create horizontal overflow

Recommended mobile typography:

- Main heading: `40px–48px`
- Section heading: `28px–34px`
- Body: `16px–18px`

Recommended mobile padding:

- `20px–24px`

---

# 11. Figma-Style Layout Quality Checklist

Before considering the page complete, verify:

### Spacing

- [ ] Consistent outer page padding
- [ ] Consistent section spacing
- [ ] No random margins
- [ ] Text has sufficient breathing room
- [ ] Image/text gaps feel intentional
- [ ] Second section has noticeably more top whitespace

### Alignment

- [ ] Columns align to the same container
- [ ] Images align cleanly with content
- [ ] Text baselines and edges are visually consistent
- [ ] CTA aligns with the overall grid

### Typography

- [ ] Clear heading hierarchy
- [ ] No overly large body text
- [ ] Line lengths remain readable
- [ ] Semibold/bold weights used intentionally
- [ ] Letter spacing matches the existing design

### Images

- [ ] All images use proper aspect ratios
- [ ] No stretching
- [ ] No accidental empty gaps
- [ ] `object-fit: cover` where required
- [ ] Full-width/full-height behavior is preserved

### Animation

- [ ] Scroll animation is smooth
- [ ] No layout jumps
- [ ] No horizontal scrollbar
- [ ] No excessive motion
- [ ] Reduced-motion support exists
- [ ] Animation does not block scrolling

### Navigation

- [ ] CONTACT button works
- [ ] HOME link works
- [ ] Existing navbar remains consistent
- [ ] No duplicate navigation logic

---

# 12. Final Implementation Standard

The final Service page should feel like a **premium construction-company website**, not a basic template.

Prioritize:

1. Strong visual hierarchy
2. Generous whitespace
3. Consistent Figma-style spacing
4. Large editorial imagery
5. Clean two-column compositions
6. Strong typography
7. Smooth scroll-driven storytelling
8. Responsive behavior
9. Accessible interactions
10. Consistency with the existing About Us page

Do not add unnecessary cards, gradients, shadows, icons, decorative elements, or UI components unless they already exist in the website's design system.

**Most important:** preserve the existing site's visual language and components. Extend the design system rather than creating a disconnected Service page.
