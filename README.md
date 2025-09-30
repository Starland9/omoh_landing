# Omoh Landing Page

![Omoh](./public/icon.png)

A modern, responsive landing page for **Omoh** - Your intelligent SMS-based financial transaction tracker. This web application showcases the features and capabilities of the Omoh mobile app, which automatically extracts and manages financial transactions from SMS messages.

## 🌟 About Omoh

Omoh is a mobile application that provides users with a comprehensive view of their financial transactions. By analyzing SMS messages from mobile money operators, Omoh automatically extracts transaction details, making it easier to track and manage your finances.

### Key Features Highlighted

- 🤖 **Automatic Extraction** - Analyzes SMS messages to identify and record transactions automatically
- 📊 **Transaction List** - View all your transactions in a clear, organized list
- 🔍 **Search & Filter** - Filter transactions by operator, type, or date
- ⚙️ **Custom Configuration** - Add your phone numbers to improve extraction accuracy

## 🚀 Live Demo

Visit the live landing page: [https://Starland9.github.io/omoh/](https://Starland9.github.io/omoh/)

## 🛠️ Tech Stack

This landing page is built with modern web technologies:

- **React 18** - UI library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend build tool
- **Material-UI (MUI)** - React component library with Material Design
- **Framer Motion** - Animation library for React
- **Emotion** - CSS-in-JS styling solution

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Starland9/omoh_landing.git
cd omoh_landing
```

2. **Install dependencies**

```bash
npm install
```

## 💻 Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

This project is configured for deployment to GitHub Pages. The production build is automatically deployed from the `dist/` folder.

### GitHub Pages Configuration

The project includes:
- Base URL set to `/omoh_landing/` in `vite.config.ts`
- Homepage configured in `package.json`

## 📁 Project Structure

```
omoh_landing/
├── public/              # Static assets
│   └── icon.png        # App icon
├── src/
│   ├── assets/         # Images and media files
│   │   ├── screenshots/  # App screenshots
│   │   ├── icon.png
│   │   └── mockup.jpg
│   ├── components/     # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   └── Footer.tsx
│   ├── contexts/       # React contexts
│   │   └── ThemeContext.tsx
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Application entry point
│   └── theme.ts        # MUI theme configuration
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md          # This file
```

## 🎨 Features

### Responsive Design
The landing page is fully responsive and works seamlessly across all device sizes, from mobile phones to desktop computers.

### Dark Mode Support
Built-in theme switching between light and dark modes for better user experience.

### Smooth Animations
Leverages Framer Motion for fluid, eye-catching animations that enhance user engagement.

### Modern UI
Material Design components provide a clean, professional interface that's both beautiful and functional.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Author

**Starland9**

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Built with ❤️ for the Omoh mobile app

---

**Note**: This is the landing page for the Omoh mobile application. For information about the mobile app itself, please visit the main Omoh repository.
