# 🎬 Movie App

A modern, cross-platform movie discovery app built with React Native, Expo, and TypeScript. Browse popular movies, search for your favorites, and explore detailed movie information with a beautiful, intuitive interface.

## ✨ Features

- 🎭 **Browse Popular Movies**: Discover trending and popular movies
- 🔍 **Smart Search**: Search for movies by title with real-time results
- 📱 **Cross-Platform**: Works on iOS, Android, and Web
- 🎨 **Modern UI**: Beautiful interface with TailwindCSS styling
- 📄 **Movie Details**: View comprehensive movie information including ratings, release dates, and descriptions
- 💾 **Save Movies**: Bookmark your favorite movies for later viewing
- 🌐 **TMDB Integration**: Powered by The Movie Database (TMDB) API

## 🚀 Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Styling**: NativeWind (TailwindCSS for React Native)
- **Navigation**: Expo Router with file-based routing
- **API**: The Movie Database (TMDB) API
- **State Management**: React Hooks
- **Development**: ESLint, TypeScript, Metro bundler

## 📱 App Structure

```
app/
├── (tabs)/               # Tab navigation screens
│   ├── index.tsx        # Home screen with popular movies
│   ├── search.tsx       # Movie search functionality
│   ├── saved.tsx        # Saved movies list
│   └── profile.tsx      # User profile screen
├── movies/
│   └── [id].tsx         # Dynamic movie details screen
└── _layout.tsx          # Root layout with navigation setup

components/
├── MovieCard.tsx        # Reusable movie card component
└── SearchBar.tsx        # Search input component

services/
├── api.ts               # TMDB API configuration and functions
└── useFetch.ts          # Custom hook for data fetching
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- TMDB API key

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd movie_app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your TMDB API key:

```env
EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key_here
```

To get a TMDB API key:
1. Visit [TMDB website](https://www.themoviedb.org/)
2. Create an account
3. Go to Settings > API
4. Request an API key

### 4. Start the development server

```bash
npx expo start
```

### 5. Run on different platforms

In the output, you'll find options to open the app in:

- **Development build**: `npx expo run:android` or `npx expo run:ios`
- **Android emulator**: Press `a` in the terminal
- **iOS simulator**: Press `i` in the terminal (macOS only)
- **Web browser**: Press `w` in the terminal
- **Expo Go app**: Scan the QR code with your phone

## 🎯 Available Scripts

```bash
npm start          # Start the Expo development server
npm run android    # Run on Android emulator/device
npm run ios        # Run on iOS simulator/device
npm run web        # Run in web browser
npm run lint       # Run ESLint for code quality
```

## 🏗️ Key Components

### MovieCard Component
Displays movie information in a card format with:
- Movie poster image
- Title
- Clickable navigation to movie details

### API Service
Handles all TMDB API interactions:
- Fetching popular movies
- Searching movies by query
- Retrieving detailed movie information

### Custom Hooks
- `useFetch`: Manages API calls and loading states

## 🎨 Styling

This project uses **NativeWind**, which brings TailwindCSS to React Native:
- Utility-first CSS framework
- Responsive design capabilities
- Consistent styling across platforms
- Easy customization through `tailwind.config.js`

## 📂 File Structure Highlights

- **File-based routing**: Organized using Expo Router for intuitive navigation
- **TypeScript interfaces**: Strongly typed data structures in `interfaces/`
- **Asset management**: Organized icons and images in `assets/`
- **Modular components**: Reusable UI components in `components/`

## 🔧 Configuration Files

- `expo.json`: Expo configuration
- `tailwind.config.js`: TailwindCSS customization
- `tsconfig.json`: TypeScript compiler options
- `babel.config.js`: Babel transpilation settings
- `metro.config.js`: Metro bundler configuration

## 🚀 Building for Production

### For Android:
```bash
npx expo build:android
```

### For iOS:
```bash
npx expo build:ios
```

### For Web:
```bash
npx expo export:web
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Expo](https://expo.dev/) for the amazing development platform
- [NativeWind](https://www.nativewind.dev/) for bringing TailwindCSS to React Native

## 📞 Support

If you have any questions or run into issues, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Contact the development team

---

**Happy movie browsing! 🍿🎬**
