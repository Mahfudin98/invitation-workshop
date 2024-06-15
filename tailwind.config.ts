import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      invit: ["Oleo Script"],
      ls: ["Noto Serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
        "fade-up": "fade-up 1.5s both"
      },
      keyframes: {
        "fade-up": {
          from: {
            opacity: "0",
            transform: "translateY(100%)"
          },
          to: {
            opacity: "1"
          }
        },
        spin: {
          to: {
            transform: "rotate(360deg)"
          }
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0"
          }
        },
        pulse: {
          "50%": {
            opacity: ".5"
          }
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
          }
        }
      },
      transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT:
          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        colors:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        color: "color",
        height: "height",
        "max-height": "max-height",
        opacity: "opacity",
        shadow: "box-shadow",
        background: "background-color",
        "border-color": "border-color",
        transform: "transform"
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        bounce: "cubic-bezier(0.34, 1.61, 0.7, 1.3)",
        linear: "linear",
        in: "cubic-bezier(0.42, 0, 1, 1)",
        "in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
        out: "cubic-bezier(0, 0, 0.58, 1)"
      },
      translate: ({ theme }) => ({
        ...theme("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        full: "100%"
      })
    }
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["valentine"]
  }
};
export default config;
