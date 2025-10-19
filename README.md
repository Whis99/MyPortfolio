# Alex Walker Portfolio

A modern, responsive portfolio website built with React, Material UI, and Vite. Features a beautiful dark/light mode toggle and a clean, professional design.

## Features

- 🌙 **Dark/Light Mode Toggle** - Switch between themes with a beautiful sun/moon icon
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean, minimalist design with smooth animations and transitions
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **Professional Layout** - Left sidebar with profile info and main content area

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Material UI 5** - Beautiful, accessible UI components
- **Vite** - Fast build tool and development server
- **Emotion** - CSS-in-JS styling solution
- **Context API** - Theme management across the application

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with theme toggle
│   ├── Sidebar.jsx         # Profile sidebar with social links
│   └── MainContent.jsx     # Main introduction and CTA buttons
├── contexts/
│   └── ThemeContext.jsx    # Theme management context
├── App.jsx                 # Main app component with theme provider
├── main.jsx               # Application entry point
└── index.css              # Global styles and animations
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Customization

### Theme Colors

The portfolio uses a sophisticated color palette that automatically adapts to light/dark modes:

- **Primary**: Clean whites and grays
- **Secondary**: Pink-to-purple gradients for CTAs
- **Accent**: Purple glow effects and highlights

### Content

To customize the portfolio for your own use:

1. **Update personal information** in `Sidebar.jsx`
2. **Modify navigation links** in `Header.jsx`
3. **Change introduction text** in `MainContent.jsx`
4. **Replace avatar image** in the `public/` folder
5. **Update social media links** in `Sidebar.jsx`

### Styling

The portfolio uses Material UI's `sx` prop for styling, making it easy to customize:

- Colors automatically adapt to theme changes
- Responsive breakpoints: `xs`, `sm`, `md`, `lg`, `xl`
- Consistent spacing using Material UI's spacing system

## Features in Detail

### Theme System

- **Persistent Storage**: Theme preference is saved in localStorage
- **Smooth Transitions**: All color changes are animated for a polished feel
- **Automatic Adaptation**: Components automatically adjust to current theme

### Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Flexible Layout**: Sidebar stacks above content on small screens
- **Touch Friendly**: Optimized button sizes and spacing for mobile

### Performance

- **Code Splitting**: Components are loaded efficiently
- **Optimized Images**: SVG avatar for fast loading
- **Smooth Animations**: CSS animations with hardware acceleration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, please open an issue in the repository.

---

**Built with ❤️ using React, Material UI, and Vite**
