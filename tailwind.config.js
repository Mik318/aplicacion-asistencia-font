module.exports = {
  mode: 'jit',
  corePlugins: {
    preflight: 'preflight'
  },
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#722f37',
        secondary: '#FF6C0E'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        'aplicacionAsistencia': {
          "primary": "#722f37",
          "secondary": "#F57B51",
          "accent": "#7b8ae5",
          "neutral": "#095D6A",
          "base-100": "#fff",
          "info": "#7CC9DE",
          "success": "#2DD2B1",
          "warning": "#F0B270",
          "error": "#E8263D",
        },
      },
    ],
  },
}
