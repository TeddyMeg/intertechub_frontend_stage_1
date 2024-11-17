# Modern Portfolio Website

A beautiful, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. This project demonstrates modern web development practices without relying on frameworks.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🚀 Smooth scrolling navigation
- 💡 Dynamic project cards
- 📝 Contact form
- 🌙 Optimized performance
- 🎯 SEO friendly

The server will start on `http://localhost:3000`

## Deployment

This server is deployed on [Render](https://render.com). You can access the live version at: [https://intertechub-backend-stage-1.onrender.com/](https://intertechub-backend-stage-1.onrender.com/)

## GitHub Repository

The source code for this project is available on GitHub: [https://github.com/TeddyMeg/intertechub_frontend_stage_1](https://github.com/TeddyMeg/intertechub_frontend_stage_1)

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm run start
   ```

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   ├── style.css      # Main styles
│   └── components.css # Reusable component styles
├── js/
│   ├── main.js        # Main JavaScript functionality
│   └── projects.js    # Projects data and rendering
└── README.md          # Project documentation
```

## Key Components

1. **Navigation**
   - Responsive navigation menu
   - Smooth scroll behavior
   - Mobile-friendly hamburger menu

2. **Hero Section**
   - Eye-catching gradient background
   - Social media links
   - Professional image

3. **About Section**
   - Professional bio
   - Skills grid
   - Responsive layout

4. **Projects Section**
   - Dynamic project cards
   - Hover effects
   - Project tags
   - External links

5. **Contact Form**
   - Validated input fields
   - Modern styling
   - Submit handling

6. **Footer**
   - Social links
   - Copyright information
   - Responsive design

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Customize the content:
   - Update text in `index.html`
   - Modify projects in `js/projects.js`
   - Adjust styles in CSS files

## Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary: #3b82f6;
    --secondary: #4f46e5;
    /* ... other colors ... */
}
```

### Projects
Add new projects in `js/projects.js`:
```javascript
const projects = [
    {
        title: "Project Name",
        description: "Project description",
        image: "image-url",
        tags: ["Tag1", "Tag2"],
        link: "project-link"
    }
    // Add more projects...
];
```

### Social Links
Update social media links in `index.html`:
```html
<div class="social-links">
    <a href="your-link">...</a>
</div>
```

## Best Practices Used

1. **Modular CSS**
   - Separated base styles and components
   - CSS custom properties for theming
   - Mobile-first approach

2. **JavaScript Organization**
   - Modular code structure
   - Event delegation
   - Clean function organization

3. **Performance**
   - Optimized images
   - Minimal dependencies
   - Efficient DOM manipulation

4. **Accessibility**
   - Semantic HTML
   - ARIA labels
   - Keyboard navigation

5. **SEO**
   - Meta tags
   - Semantic structure
   - Descriptive alt texts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT License - feel free to use this template for your own portfolio!