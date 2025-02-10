/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spotifyMix: [
          'SpotifyMixUITitle',
          'CircularSp-Arab',
          'CircularSp-Hebr',
          'CircularSp-Cyrl',
          'CircularSp-Grek',
          'CircularSp-Deva',
          'var(--fallback-fonts, sans-serif)',
        ],
      },
    },
  },
  plugins: [],
}
