# 🎬 Movie App

### 🚧 Future Implementations
- 💾 **Save Movies**: Bookmark your favorite movies for later viewing *(Coming Soon)*
- 👤 **User Profiles**: Personalized user profiles and preferences *(Coming Soon)*
- 📊 **Advanced Analytics**: Detailed viewing statistics and recommendations *(Planned)*ern, cross-platform movie discovery app built with React Native, Expo, and TypeScript. Browse popular movies, search for your favorites, and explore detailed movie information with a beautiful, intuitive interface.

## ✨ Features

- 🎭 **Browse Popular Movies**: Discover trending and popular movies from TMDB
- 🔍 **Smart Search**: Search for movies by title with real-time results and debounced input
- 📱 **Cross-Platform**: Works seamlessly on iOS, Android, and Web
- 🎨 **Modern UI**: Beautiful interface with NativeWind (TailwindCSS) styling
- 📄 **Movie Details**: View comprehensive movie information including ratings, release dates, and descriptions
- 🏆 **Trending Rankings**: Visual ranking system for trending movies with gradient overlays
- � **Search Analytics**: Track search queries and movie interactions with Appwrite backend
- 🎯 **Interactive Navigation**: Smooth navigation between screens with Expo Router
- ⚡ **Performance Optimized**: Fast loading with proper error handling and loading states
- 🎪 **Rich Components**: Custom movie cards, search bars, and trending cards with masked views

### 🚧 Future Implementations
- �*�💾 �*Save Movies**: Bookmark your favorite movies for later viewing *(Coming Soon)*
- 👤 **User Profiles**: Personalized user profiles and preferences *(Coming Soon)*
- 📊 **Advanced Analytics**: Detailed viewing statistics and recommendations *(Planned)*

## 🚀 Tech Stack

- **Framework**: React Native with Expo SDK 53
- **Language**: TypeScript with strict type checking
- **Styling**: NativeWind (TailwindCSS for React Native)
- **Navigation**: Expo Router with file-based routing
- **API**: The Movie Database (TMDB) API v3
- **Backend**: Appwrite for search analytics and data persistence
- **State Management**: React Hooks with custom useFetch hook
- **UI Components**: React Native Masked View for gradient effects
- **Development Tools**: ESLint, TypeScript, Metro bundler
- **Image Handling**: Expo Image with optimized caching

## 📱 App Structure

```
app/
├── (tabs)/               # Tab navigation screens
│   ├── index.tsx        # Home screen with popular movies
│   ├── search.tsx       # Movie search with debounced input
│   ├── saved.tsx        # Saved movies (Future Implementation)
│   └── profile.tsx      # User profile (Future Implementation)
├── movies/
│   └── [id].tsx         # Dynamic movie details screen
└── _layout.tsx          # Root layout with navigation setup

components/
├── MovieCard.tsx        # Reusable movie card component
├── SearchBar.tsx        # Search input with controlled state
└── TrendingCard.tsx     # Trending movie card with ranking overlay

services/
├── api.ts               # TMDB API configuration and functions
├── appwrite.ts          # Appwrite backend integration
└── useFetch.ts          # Custom hook for data fetching

interfaces/
└── interfaces.d.ts      # TypeScript type definitions

constants/
├── icons.ts             # Icon asset exports
└── images.ts            # Image asset exports
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

Create a `.env` file in the root directory and add your API keys:

```env
# Required: TMDB API Configuration
EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key_here

# Optional: Appwrite Configuration (for search analytics)
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_appwrite_database_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

**Getting a TMDB API key:**
1. Visit [TMDB website](https://www.themoviedb.org/)
2. Create an account
3. Go to Settings > API
4. Request an API key

**Appwrite Setup (Optional):**
Appwrite is used for search analytics. The app will work without it, but search tracking won't be available.
1. Create an [Appwrite](https://appwrite.io/) account
2. Create a new project
3. Set up a database with a collection for search tracking
4. Add the credentials to your `.env` file

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
Displays movie information in a grid card format with:
- High-quality movie poster images from TMDB
- Movie title with text truncation
- Star ratings with visual indicators
- Clickable navigation to detailed movie views

### TrendingCard Component
Specialized card for trending movies featuring:
- Ranking overlay with gradient masked numbers
- Custom styling with React Native Masked View
- Compact horizontal layout for trending sections
- Interactive navigation to movie details

### SearchBar Component
Interactive search input with:
- Controlled state management
- Customizable placeholder text
- Integrated search icon
- Responsive design for all screen sizes

### API Service
Comprehensive TMDB API integration:
- Fetching popular movies with pagination
- Real-time movie search with query parameters
- Detailed movie information retrieval
- Proper error handling and response validation

### Custom Hooks
- `useFetch`: Advanced data fetching with loading states, error handling, and refetch capabilities
- Automatic cleanup and memory leak prevention
- Flexible configuration for different API endpoints

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

- `app.json`: Expo app configuration and metadata
- `expo-env.d.ts`: Expo environment type definitions
- `tailwind.config.js`: NativeWind/TailwindCSS customization
- `nativewind-env.d.ts`: NativeWind type definitions
- `tsconfig.json`: TypeScript compiler options and paths
- `babel.config.js`: Babel transpilation settings for React Native
- `metro.config.js`: Metro bundler configuration for asset handling
- `eslint.config.js`: ESLint rules and code quality standards

## 🚀 Building for Production

### Modern Expo Development Build:
```bash
# For Android
npx expo run:android --variant release

# For iOS  
npx expo run:ios --configuration Release
```

### EAS Build (Recommended):
```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Configure and build
eas build --platform android
eas build --platform ios
```

### Web Export:
```bash
npx expo export:web
```

### Legacy Build (Deprecated):
```bash
# Note: expo build commands are deprecated
# Use EAS Build or development builds instead
npx expo build:android  # Legacy
npx expo build:ios      # Legacy
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
