module.exports = Object.assign({
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary-container": "#b1b4c3",
        "surface-container-low": "#1a1b20",
        "on-primary-container": "#541200",
        "on-surface": "#e3e2e7",
        "secondary-container": "#434653",
        "outline": "#ab8980",
        "secondary": "#c3c6d5",
        "outline-variant": "#5b4039",
        "surface": "#121317",
        "on-background": "#e3e2e7",
        "surface-container-highest": "#343439",
        "surface-container": "#1f1f24",
        "surface-container-lowest": "#0d0e12",
        "surface-variant": "#343439",
        "background": "#121317",
        "on-surface-variant": "#e4beb4",
        "primary": "#ffb5a0",
        "surface-container-high": "#292a2e",
        "surface-bright": "#38393d",
        "on-primary": "#5f1500",
        "primary-container": "#ff5722",
        "tertiary": "#3de273",
        "tertiary-container": "#00a74c"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "gutter": "1.5rem",
        "space-xs": "0.5rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "3rem",
        "space-xxl": "4rem",
        "margin-mobile": "1rem",
        "margin": "3rem",
        "gutter-mobile": "0.75rem"
      },
      fontFamily: {
        "headline-sm": ["Montserrat", "sans-serif"],
        "headline-md": ["Montserrat", "sans-serif"],
        "headline-lg": ["Montserrat", "sans-serif"],
        "headline-xl": ["Montserrat", "sans-serif"],
        "headline-xl-mobile": ["Montserrat", "sans-serif"],
        "headline-lg-mobile": ["Montserrat", "sans-serif"],
        "label-lg": ["Montserrat", "sans-serif"],
        "label-md": ["Montserrat", "sans-serif"],
        "label-sm": ["Montserrat", "sans-serif"],
        "body-sm": ["Hanken Grotesk", "sans-serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "headline-sm": ["1.25rem", { lineHeight: "1.3", letterSpacing: "0.04em", fontWeight: "700" }],
        "headline-md": ["1.75rem", { lineHeight: "1.25", letterSpacing: "0.01em", fontWeight: "700" }],
        "headline-lg": ["2.5rem", { lineHeight: "1.15", letterSpacing: "0.02em", fontWeight: "800" }],
        "headline-xl": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "900" }],
        "headline-xl-mobile": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "900" }],
        "headline-lg-mobile": ["1.75rem", { lineHeight: "1.2", letterSpacing: "0.01em", fontWeight: "800" }],
        "label-lg": ["0.875rem", { lineHeight: "1.2", letterSpacing: "0.08em", fontWeight: "800" }],
        "label-md": ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.1em", fontWeight: "700" }],
        "label-sm": ["0.6875rem", { lineHeight: "1.15", letterSpacing: "0.12em", fontWeight: "700" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6", letterSpacing: "0.01em", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.7", letterSpacing: "0", fontWeight: "400" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", letterSpacing: "0", fontWeight: "400" }]
      }
    }
  }
}, {content:['./index.html']});
