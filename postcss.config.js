// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
    
//   },
// }

// postcss.config.js
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     'postcss-nesting': [require('postcss-nesting')], // Add the postcss-nesting plugin here
//   },
// };

// postcss.config.js
// module.exports = {
//   plugins: {
//     'postcss-import': {},
//     'tailwindcss/nesting': 'postcss-nesting',
//     tailwindcss: {},
//     autoprefixer: {},
//   }
// }

export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  }
};
