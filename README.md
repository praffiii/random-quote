# 🌸 Random Quote Generator

A beautiful, responsive random quote generator with a cozy pastel aesthetic. Get inspired with motivational quotes at the click of a button!

## Features

- **Beautiful Pastel Design** - Calm and cozy aesthetic with animated background blobs
- **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile devices
- **Random Quotes** - Fetches inspirational quotes from the Advice Slip API
- **Smooth Animations** - Hover effects and floating background elements
- **Fast & Lightweight** - No build tools required, runs directly in the browser

## Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Modern utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - ES6+ async/await for API calls
- **Google Fonts** - Quicksand font family
- **Advice Slip API** - Free quote/advice API

## Getting Started

### Prerequisites

No installation required! Just a modern web browser.

### Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/praffiii/random-quote.git
   ```

2. Navigate to the project directory:

   ```bash
   cd random-quote
   ```

3. Open `index.html` in your browser:

## Project Structure

```
random-quote/
├── index.html      # Main HTML file with responsive layout
├── script.js       # JavaScript for fetching and displaying quotes
├── .gitignore      # Git ignore rules
└── README.md       # Project documentation
```

## Color Palette

The project uses a carefully selected pastel color scheme:

- **Cream**: `#FDFAF6` - Background
- **Pink**: `#FFC8DD` - Accent elements
- **Blue**: `#BDE0FE` - Decorative blobs
- **Lavender**: `#E2C6FF` - Decorative accents
- **Dark Gray**: `#4A4A4A` - Text

## API Information

This project uses the [Advice Slip API](https://api.adviceslip.com/):

- **Endpoint**: `https://api.adviceslip.com/advice`
- **No authentication required**
- **Free to use**

## Features Breakdown

### Responsive Design

- Mobile-first approach with Tailwind CSS utilities
- Breakpoints for small (`sm:`), medium (`md:`), and large (`lg:`) screens
- Touch-friendly button sizing on mobile devices

### Interactive Elements

- Smooth hover animations on the quote container
- Active state feedback on button clicks
- Loading state while fetching new quotes
- Error handling for failed API requests

### Accessibility

- Semantic HTML structure
- Proper focus states for keyboard navigation
- Readable font sizes and contrast ratios

---
