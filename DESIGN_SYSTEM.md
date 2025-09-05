# Other Ways Therapy - Design System

## 🎨 Color Palette

### Brand Colors
```css
--owt-supporting: #4E5F4E        /* Dark green for headings */
--owt-primary-brown: #BB8B74     /* Primary brown for buttons/accents */
--owt-secondary-brown: #B49E9A   /* Secondary brown for cards */
--owt-tertiary-brown: #AFA691    /* Tertiary brown for cards */
```

### Background Colors
```css
--owt-bg-primary: #F7F8F0        /* Main page background */
--owt-bg-secondary: #F8F6F0      /* Header background */
--owt-bg-tertiary: #F6F6F6       /* Footer background */
--owt-bg-accent: #ECE7DD         /* Accent sections */
```

### Text Colors
```css
--owt-text-primary: #555555      /* Main body text */
--owt-text-secondary: #8C8E8A    /* Secondary text/eyebrows */
--owt-text-white: #FFFFFF        /* White text on dark backgrounds */
```

### Usage in Tailwind
```html
<!-- Use with CSS variables -->
<div class="bg-[var(--owt-bg-primary)]">
<div class="text-[var(--owt-text-primary)]">

<!-- Or use with Tailwind custom colors -->
<div class="bg-owt-bg-primary">
<div class="text-owt-text-primary">
```

## 🔤 Typography

### Fonts
- **Headings**: Kalnia (variable: `--font-heading`)
- **Body**: Bricolage Grotesque (variable: `--font-body`)

### Typography Classes
```css
.heading-font              /* Apply heading font */
.text-clamp-hero-title     /* Hero title sizing */
.text-clamp-hero-subtitle  /* Hero subtitle sizing */
.text-clamp-about-title    /* Section title sizing */
.text-clamp-eyebrow        /* Small eyebrow text */
.text-clamp-cta-title      /* CTA title sizing */
```

### Example Usage
```html
<h1 class="heading-font text-clamp-hero-title text-white">
  Other Ways Therapy
</h1>
<p class="text-clamp-hero-subtitle text-white font-light">
  Transformative Therapy Intensives
</p>
```

## 🔘 Buttons

### Button Classes
```css
.btn-base      /* Base button styling (rounded, font) */
.btn-light     /* Light button variant */
.btn-dark      /* Dark button variant */
```

### Button Examples
```html
<!-- Light button -->
<button class="btn-base btn-light px-6 py-3">
  Schedule Consultation
</button>

<!-- Dark button -->
<button class="btn-base btn-dark px-6 py-3">
  Learn More
</button>
```

## 📦 Layout Utilities

### Section Utilities
```css
.section-container     /* Standard container: max-w-7xl + padding */
.section-padding       /* Standard section padding: py-10 md:py-16 */
.section-padding-sm    /* Smaller section padding: py-8 md:py-10 */
.section-grid-2col     /* 2-column responsive grid */
```

### Card Utilities
```css
.card-rounded          /* Large rounded corners for cards */
.card-rounded-sm       /* Smaller rounded corners */
```

### Layout Examples
```html
<!-- Standard section -->
<section class="w-full bg-owt-bg-primary section-padding">
  <div class="section-container">
    <div class="section-grid-2col">
      <!-- Content -->
    </div>
  </div>
</section>

<!-- Card with rounded corners -->
<div class="card-rounded bg-owt-secondary-brown p-6">
  <!-- Card content -->
</div>
```

## 🏗️ Common Patterns

### Hero Section Pattern
```html
<section class="relative w-full min-h-[60vh] md:min-h-[75vh] overflow-hidden rounded-b-[100px]">
  <Image src="/assets/therapy-healing-landscape-background.jpg" alt="" fill priority className="object-cover" />
  <div class="absolute inset-0">
    <div class="section-container h-full">
      <div class="h-full flex items-center justify-center">
        <div class="flex flex-col items-center text-center gap-6">
          <h1 class="heading-font text-white text-clamp-hero-title">Title</h1>
          <p class="text-white font-light text-clamp-hero-subtitle">Subtitle</p>
          <button class="btn-base btn-light px-6 py-3">CTA</button>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Two-Column Section Pattern
```html
<section class="w-full bg-owt-bg-primary section-padding">
  <div class="section-container">
    <div class="section-grid-2col">
      <!-- Left column: Text -->
      <div class="flex flex-col">
        <span class="text-clamp-eyebrow font-semibold tracking-[.06em] text-owt-text-secondary mb-4">
          EYEBROW TEXT
        </span>
        <h2 class="heading-font text-clamp-about-title text-[var(--owt-supporting)]">
          Section Title
        </h2>
        <div class="mt-6 flex flex-col gap-4 text-owt-text-primary font-light">
          <p>Content paragraph...</p>
        </div>
        <div class="pt-6">
          <button class="btn-base btn-dark px-6 py-3">Learn More</button>
        </div>
      </div>
      
      <!-- Right column: Image -->
      <div class="flex justify-center lg:justify-end">
        <div class="relative rounded-full overflow-hidden w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem]">
          <Image src="/assets/footer-background-texture.png" alt="" fill className="object-cover" />
        </div>
      </div>
    </div>
  </div>
</section>
```

### Card Grid Pattern
```html
<section class="w-full bg-white section-padding">
  <div class="section-container">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div class="card-rounded bg-owt-secondary-brown text-white p-6 md:p-8">
        <Image src="/assets/emdr-therapy-icon.svg" alt="" width={55} height={55} className="mb-4 mx-auto" />
        <h3 class="heading-font text-2xl md:text-3xl text-center">Card Title</h3>
        <p class="mt-4 text-sm md:text-base font-light text-center">Card content...</p>
        <div class="pt-6 text-center">
          <button class="btn-base btn-light px-6 py-3">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</section>
```

## 🎯 Quick Start for New Pages

1. **Use consistent backgrounds**: `bg-owt-bg-primary`, `bg-owt-bg-secondary`, etc.
2. **Apply section structure**: `section-container` + `section-padding`
3. **Use typography classes**: `heading-font`, `text-clamp-*` classes
4. **Consistent buttons**: `btn-base btn-light` or `btn-base btn-dark`
5. **Standard text colors**: `text-owt-text-primary` for body text
6. **Responsive grids**: `section-grid-2col` for two-column layouts

## 📱 Responsive Design

- **Mobile-first**: All classes are mobile-first with `md:` and `lg:` breakpoints
- **Custom breakpoint**: Header uses custom `867px` breakpoint for navigation
- **Clamp functions**: Typography scales smoothly across all screen sizes
- **Consistent spacing**: Use standard padding/margin patterns

This design system ensures consistency and makes building new pages quick and easy!
