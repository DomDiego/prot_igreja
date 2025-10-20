# Design Guidelines: Igreja Mobile Web App

## Design Approach
**Reference-Based with Spiritual Calm Focus**
Draw inspiration from devotional apps (YouVersion Bible, Calm, Headspace) - combining serene spiritual aesthetics with modern mobile UI patterns. Focus on readability, peaceful atmosphere, and intuitive navigation for daily devotional content.

## Core Design Principles
1. **Spiritual Serenity**: Calm, contemplative atmosphere that encourages reflection
2. **Content Clarity**: Text-first design with exceptional readability for scripture
3. **Gentle Interactions**: Smooth transitions, no jarring animations
4. **Accessibility First**: High contrast ratios, comfortable touch targets (minimum 44px)

## Color Palette

### Light Mode
- **Background**: 0 0% 98% (warm off-white)
- **Surface/Cards**: 0 0% 100% (pure white)
- **Primary**: 240 50% 45% (deep spiritual blue)
- **Primary Hover**: 240 55% 35%
- **Text Primary**: 240 20% 15% (near black with blue undertone)
- **Text Secondary**: 240 10% 45% (muted gray)
- **Border**: 240 10% 90% (soft dividers)
- **Accent (optional use)**: 45 85% 55% (warm gold for special highlights)

### Dark Mode
- **Background**: 240 15% 8% (deep navy-black)
- **Surface/Cards**: 240 12% 12% (elevated dark surface)
- **Primary**: 240 60% 65% (lighter blue for contrast)
- **Primary Hover**: 240 65% 75%
- **Text Primary**: 240 5% 95% (soft white)
- **Text Secondary**: 240 5% 65% (muted light gray)
- **Border**: 240 10% 20% (subtle dark dividers)
- **Accent**: 45 75% 60% (softer gold)

## Typography
**Font Stack**: 'Poppins' (headings), 'Inter' (body) via Google Fonts

- **App Title/Logo**: text-2xl font-semibold tracking-tight
- **Card Titles**: text-lg font-medium
- **Scripture Text**: text-base leading-relaxed (optimized for reading)
- **Body/Description**: text-sm leading-normal
- **Footer Labels**: text-xs font-medium

## Layout System
**Spacing Primitives**: Use Tailwind units of 3, 4, 6, 8, 12, 16
- Card padding: p-6
- Section spacing: space-y-6
- Container margins: mx-4
- Footer height: h-16
- Safe bottom spacing for floating footer: pb-20

**Container Structure**:
- Max width: max-w-2xl mx-auto (mobile-optimized reading width)
- Horizontal padding: px-4
- Vertical rhythm: py-6 for main sections

## Component Library

### Header
- Fixed top position with backdrop blur
- Height: h-16
- Contains: Church name/logo (left), Dark mode toggle (right)
- Background: Semi-transparent with backdrop-blur-md
- Border bottom: border-b with subtle color

### Cards (Salmo do Dia / Provérbio do Dia)
- Rounded corners: rounded-2xl
- Shadow: shadow-lg in light, shadow-2xl in dark
- Padding: p-6
- Background: Surface color with subtle gradient overlay
- Border: 1px subtle in dark mode only
- Content structure:
  - Small label badge (e.g., "SALMO 23" in uppercase, text-xs)
  - Scripture text: text-base leading-relaxed, font-serif consideration for authenticity
  - Attribution: text-sm text-secondary italic

### YouTube Video Container
- Aspect ratio: aspect-video
- Rounded: rounded-2xl overflow-hidden
- Shadow: shadow-lg
- Responsive iframe with w-full h-full

### Floating Footer Navigation
- Fixed bottom-0 with safe-area-inset-bottom support
- Height: h-16
- Background: Surface color with backdrop-blur-xl
- Border top: border-t
- 5 equal-width navigation items (grid-cols-5)
- Each item:
  - Icon size: w-6 h-6
  - Label: text-xs mt-1
  - Active state: Primary color
  - Inactive: Text secondary color
  - Touch target: Full item height/width

### Dark Mode Toggle
- Position: Header top-right
- Icon: 🌙 (dark) / ☀️ (light) or use Heroicons sun/moon
- Size: p-2 with icon w-5 h-5
- Smooth transition on theme change
- Persist preference in localStorage

## Interaction Patterns
- **Card Tap**: Subtle scale (scale-[0.98]) on active press
- **Navigation**: Instant route change, no page transitions
- **Dark Mode Toggle**: 200ms transition on all color changes
- **Scroll**: Smooth scrolling, header remains visible

## Visual Enhancements
- **Shadows**: Layered shadows for depth (light mode), stronger shadows in dark mode
- **Gradients**: Subtle radial gradients on card backgrounds (very subtle, 5% opacity)
- **Borders**: Use sparingly, only in dark mode for card definition
- **Icons**: Heroicons (outline style) for navigation and UI elements

## Page-Specific Layouts

### Home Page
1. Header (fixed top)
2. Greeting section: "Bem-vindo" with time-based message
3. Salmo do Dia card
4. Provérbio do Dia card  
5. YouTube video embed (sermon/worship)
6. Bottom spacing for footer (pb-20)
7. Floating footer (fixed bottom)

### Other Pages (Placeholder Layouts)
- **Bíblia**: Search bar + book list grid
- **Eventos**: Timeline/calendar view
- **Pedidos**: Prayer request form + list
- **Configurações**: Settings list with toggles

## Responsive Behavior
- Base (mobile): Single column, full feature set
- sm (640px+): Slight padding increase (px-6)
- md (768px+): Container max-w-2xl centered, side margins visible
- No multi-column layouts - keep mobile-first focus

## Critical Implementation Notes
- All form inputs, text areas maintain dark mode consistency
- Footer z-index: z-50 to stay above all content
- Use `min-h-screen` on main container, not viewport height forcing
- Maintain 20px bottom padding on scrollable content for footer clearance
- Test safe-area-inset for iOS notch compatibility