/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                // 'genshin': 'url(https://i.ibb.co/f4s5jhM/genshin-impact-scenery-uhdpaper-com-4-K-3-2969.jpg)',
                // 'genshin': 'url(https://i.ibb.co/Q8339L6/genshin-impact-scenery-uhdpaper-com-hd-3-2969.jpg)',
                genshin: "url(https://images5.alphacoders.com/109/1099191.jpg)",
            },
        },
        screens: {
            ssm: { min: "0px", max: "668px" },

            sm: { min: "669px", max: "920px" },
            // => @media (min-width: 640px and max-width: 767px) { ... }

            md: { min: "921px", max: "1159px" },
            // => @media (min-width: 768px and max-width: 1023px) { ... }

            lg: { min: "1160px", max: "1535px" },
            // => @media (min-width: 1024px and max-width: 1279px) { ... }

            xl: { min: "1536px", max: "1791px" },
            // => @media (min-width: 1280px and max-width: 1535px) { ... }

            "2xl": { min: "1792px", max: "2200px" },
            // => @media (min-width: 1536px) { ... }

            "3xl": { min: "2201px", max: "2303px" },

            "4xl": { min: "2304px", max: "2559px" },

            "5xl": { min: "2560px" },

            // '6xl': {'min': '2072px', 'max': '3327px'},

            // '7xl': {'min': '3328px', 'max': '3583px'},

            // '8xl': {'min': '3584px', 'max': '3839px'},
        },
        // minWidth: {
        //     custom: "320px",
        // },
        fontFamily: {
            'nunito': ['Nunito Sans', 'sans-serif'],
            'nunito-italics': ['Nunito Sans', 'sans-serif', 'italic']
            
        },
    },
    plugins: [
        {
            "postcss-import": {},
            "tailwindcss/nesting": "postcss-nesting",
            tailwindcss: {},
            autoprefixer: {},
        },
    ],
};

// module.exports = {
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: false,
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };
