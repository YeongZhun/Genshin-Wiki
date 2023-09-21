/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                'darker-purple': '#624e80',
                'lighter-purple': '#8d6cad',
                'darker-brown': '#7b5437',
                'lighter-brown': '#bd7726'
            },
            backgroundImage: {
                // 'genshin': 'url(https://i.ibb.co/f4s5jhM/genshin-impact-scenery-uhdpaper-com-4-K-3-2969.jpg)',
                // 'genshin': 'url(https://i.ibb.co/Q8339L6/genshin-impact-scenery-uhdpaper-com-hd-3-2969.jpg)',
                genshin: "url(https://images5.alphacoders.com/109/1099191.jpg)",
            },

            padding: {
                '22px': "5.5rem",
            },

            width: {
                250: "60rem",
                200: "48rem",
                190: "40rem",
                185: "39.5rem",
                180: "39rem",
                170: "38rem",
                160: "37rem",
                150: "36rem",
                140: "34rem",
                130: "32rem",
                120: "30rem",
                110: "28rem",
                107: "27rem",
                105: "26rem",
                102: "25rem",
                100: "24rem",
                92: "23rem",
                90: "22rem",
            },

            height: {
                250: "60rem",
                200: "48rem",
                150: "36rem",
                140: "34rem",
                130: "32rem",
                120: "30rem",
                110: "28rem",
                107: "27rem",
                105: "26rem",
                102: "25rem",
                100: "24rem",
            },

            colors: {
                orange: {
                    75: "#FFF2E1",
                },
                'darker-purple': '#745e95',
                'lighter-purple': '#B57CB3',
                'electro': '#be80da',
                'anemo': '#62b598',
                'cryo': '#3fd0d4',
                'pyro': '#E95C4B',
                'darker-brown': '#b47324',
                'lighter-brown': '#e89c38',
                'biege': '#e9e5dc',
                'dark-mode-bg': '#121212'
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

            "char-gallery-sm": { max: "535px"},

            "char-md": { min: "1251px" },

            "char-sm": { min: "618px", max: "1250px" },

            "char-ssm": { min: "0px", max: "617px" },

            "talent-xl": { min: "1861px" },

            "talent-l": { min: "1755px", max: "1860px" },

            "talent-md": { min: "1451px", max: "1754px" },

            "talent-sm": { max: "1450px" },

            "cons-2xl": { min: "1851px" },

            "cons-xl": { min: "1747px", max: "1850px" },

            "cons-l": { min: "1655px", max: "1746px" },

            "cons-md": { min: "1465px", max: "1654px" },

            "cons-sm": { min: "1325px", max: "1464px" },

            "cons-ssm": { min: "1258px", max: "1324px" },

            "cons-sssm": { max: "1257px" },

            "footer-lg": { min: "1171px" },

            "footer-md": { min: "700px", max: "1170px" },

            "footer-sm": { min: "615px", max: "699px"},

            "footer-ssm": {max: "614px"},

            "mainpage-md": {min: "790px"},

            "mainpage-sm": {max: "789px"},

            "mainpage-header-lg": {min: "760px"},

            "mainpage-header-md": {max: "759px"},

            "mainpage-image-md": {min: "791px"},

            "mainpage-image-sm": {min:"631px", max: "790px"},

            "mainpage-image-ssm": {max: "630px"},

            "comments-lg": {min: "1585px"},

            "comments-md": {min: "1260px", max: "1584px"},

            "comments-sm": {min: "750px", max: "1259px"},

            "comments-ssm": {max: "749px"},
        },
        // minWidth: {
        //     custom: "320px",
        // },
        fontFamily: {
            nunito: ["Nunito Sans", "sans-serif"],
            "nunito-italics": ["Nunito Sans", "sans-serif", "italic"],
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
