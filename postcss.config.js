export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // CSS optimization for production
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: [
          'default',
          {
            // Optimize for mobile
            discardComments: {
              removeAll: true,
            },
            normalizeWhitespace: true,
            colormin: true,
            minifySelectors: true,
            minifyFontValues: true,
            minifyParams: true,
            convertValues: {
              length: false, // Keep original units for mobile compatibility
            },
          },
        ],
      },
    }),
  },
};
