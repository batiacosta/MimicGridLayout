# MimicGridLayout

A small React Native + Expo App that mimics a grid layout (with a toggle to switch between grid and list). It demonstrates importing image assets, a tiny reusable Card component, and a simple FlatList-based layout.

## Contents
- `App.tsx` — app bootstrap
- `src/screens/HomeScreen.tsx` — home screen with grid/list toggle and uses flex 
- `src/components/GridItem.tsx` — individual grid item
- `assets/icons/` — PNG icon assets used by the grid
- `metro.config.js`, `babel.config.js` — bundler/runtime configuration (I tried to use sgv files so I needed them when getting the packages needed)

## Prerequisites
- Node.js (LTS recommended)
- npm (or yarn)
- Xcode (for iOS simulator) if you want to run native builds or open simulator locally
- Expo Go on your phone for testing on a physical device (optional)

This project is an Expo managed project (see `expo` in `package.json`).

## Quick start (recommended)
Use `npx` so you don't need a global Expo CLI installation.

1. Clone the repo and install dependencies:

```zsh
git clone https://github.com/batiacosta/MimicGridLayout.git
cd MimicGridLayout
npm install
```

2. Start Metro / Expo Dev Tools and open the iOS simulator or Expo Go:

```zsh
npx expo start -c
# then press `i` to open the iOS simulator, or 'a' to run Android Simulator
```

Notes:
- `-c` clears Metro's cache — helpful after changing asset config or Metro config.
- If you prefer a global CLI: `npm install -g expo-cli` (not required).

## Running a native build (only if you need native code)
This project is managed by Expo. Native builds are unnecessary for most JS/UI changes. If you need a custom native build (e.g. add native modules) you can prebuild/eject:

```zsh
npx expo prebuild
cd ios
pod install
cd ..
npx expo run:ios
```

Warning: prebuild will generate native `ios/` and `android/` folders and requires CocoaPods and Xcode (macOS).

## Common issues & troubleshooting

- Cannot find module 'babel-preset-expo' or 'metro-react-native-babel-preset'
  - Ensure `babel-preset-expo` and `metro-react-native-babel-preset` are listed in `devDependencies` and run `npm install`.
  - We include `babel.config.js` configured for Expo and Metro presets in this repo.

- SVGs show empty boxes or render incorrectly
  - This project uses PNG icons in `assets/icons/`. If you want SVG support instead, configure `react-native-svg` and `react-native-svg-transformer` and add the relevant Metro config. Alternatively, convert SVGs to PNGs and import them as static assets (the project already contains `src/types/images.d.ts` to type image imports).

- Codegen warnings like `Codegen didn't run for RNSVGPath`
  - Those are typically warnings that occur when native codegen metadata isn't present. They are often harmless in Expo Go but must be addressed when doing native builds (ensure correct Babel preset and run `pod install` after prebuild).

- Metro caching / stale assets
  - Run `npx expo start -c` to clear Metro cache and pick up new asset changes or config edits.

## Notes about the layout
- The home screen uses a `FlatList` with `numColumns={3}` to render a grid. There's a toggle (Switch) at the top to switch between a 3-column grid and a single-column list. See `src/screens/HomeScreen.tsx`.
- Each tile is rendered by `GridItem` which uses `Card` (a small wrapper around View / TouchableOpacity). Icons are imported from `src/icons/index.tsx` which resolves to static PNG assets.

## TypeScript
- `src/types/images.d.ts` declares `*.png`, `*.jpg`, `*.jpeg` so importing images like `import icon from './icon.png'` works without TS errors.

## Development tips
- Making cards square: use `aspectRatio: 1` on the card style.
- Persist layout choice: use `AsyncStorage` to save `isGrid` between launches.
- Remove debug logs: there is a `console.log` inside `GridItem.tsx` used during debugging; feel free to remove it once icons render correctly.

## Contributing
- Fork and open a PR. Keep changes small and focused.

## License
MIT
