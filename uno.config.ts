import { defineConfig, presetUno, presetIcons, presetWebFonts, transformerVariantGroup } from 'unocss'
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        default: {
          name: 'Montserrat',
          weights: [400,500,600,700,800]
        },
        cursive: 'Dancing Script'
      },
    }),
    presetAnimations(),
    presetShadcn({
      color: "stone",
      radius: 0.4
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  theme: {
    fontFamily: {
      default: ['Montserrat'],
      cursive: ['Dancing Script']
    },
    colors: {
      "primary-hover": 'hsl(var(--primary-hover))',
      "primary-foreground-hover": 'hsl(var(--primary-foreground-hover))'
    },
    animation: {
      keyframes: {
        flipHeads: `{
          from {
            transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
            animation-timing-function: ease-out;
          }
          40% {
            transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, 170deg);
            animation-timing-function: ease-out;
          }
          50% {
            transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, 190deg);
            animation-timing-function: ease-in;
          }
          80% {
            transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 360deg);
            animation-timing-function: ease-in;
          }
          to {
            transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 360deg);
            animation-timing-function: ease-in;
          }
        }`,
        flipTails: `{
          0% {
            transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
            animation-timing-function: ease-out;
          }
          40% {
            transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, 285deg);
            animation-timing-function: ease-out;
          }
          50% {
            transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, 355deg);
            animation-timing-function: ease-in;
          }
          80% {
            transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 540deg);
            animation-timing-function: ease-in;
          }
          100% {
            transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 540deg);
            animation-timing-function: ease-in;
          }
        }`,
        puffIn: `{
          0% {
            opacity: 0;
            transform-origin: 50% 50%;
            transform: scale(2, 2);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform-origin: 50% 50%;
            transform: scale(1, 1);
            filter: blur(0px);
          }
        }`
      },
    },
  },
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        "src/**/*.{js,ts}",
      ],
    },
  },
});