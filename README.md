# Atlantic Tutoring Website

A static website for Atlantic Tutoring, built with plain HTML, CSS, and vanilla JavaScript. The site features a vintage milk carton packaging design mixed with Bauhaus editorial layouts.

## Design System

- **Colors**: Electric Cobalt blue (#2741D9) on warm cream paper backgrounds (#F7F2E6)
- **Typography**: Georgia serif for headings, DM Sans for body text
- **Layout**: Wide centered layout (max-width: 1000px) with scalloped decorative borders
- **Aesthetic**: Bold, handcrafted, architectural feel with thick line-art illustrations

## Pages

- **Home** (`index.html`) - Main landing page with hero, services, tutor profiles, and testimonials
- **About** (`about.html`) - Detailed information about Hannah and Cameron
- **Book a Session** (`book.html`) - Calendly integration for booking tutoring sessions
- **Contact** (`contact.html`) - Contact information and contact form
- **Tools** (`tools.html`) - Placeholder for upcoming revision tools

## File Structure

```
/
├── index.html
├── about.html
├── book.html
├── contact.html
├── tools.html
├── css/
│   └── style.css
├── img/
│   ├── favicon.svg
│   ├── logo.svg
│   ├── milk-carton.svg
│   ├── icon-molecule.svg
│   ├── icon-book.svg
│   ├── icon-globe.svg
│   ├── portrait-hannah.svg
│   └── portrait-cameron.svg
├── CNAME
└── README.md
```

## Technical Details

- **No frameworks**: Pure HTML, CSS, and vanilla JavaScript
- **Responsive**: Mobile-first design with breakpoints at 768px and 480px
- **Accessibility**: Semantic HTML5, proper focus states, ARIA-friendly
- **Performance**: Minimal dependencies, fast loading
- **SEO**: Proper meta tags, semantic structure

## Deployment

This site is designed to be hosted on GitHub Pages at `atlantictutoring.com`. The `CNAME` file is already configured for the custom domain.

## Integration Notes

- **Calendly**: Replace placeholder URLs in `book.html` with actual Calendly embed codes
- **Formspree**: Update form endpoints in `contact.html` and `tools.html` with actual Formspree IDs
- **WhatsApp**: Update phone number in `contact.html` with actual WhatsApp number

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Development

The site uses a component-based approach with consistent header/footer structure across all pages. The scallop banner uses a flexible SVG system that adapts to screen width without cutting off partial arcs.
