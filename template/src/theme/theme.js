export const THEME = {
  "breakpoints": {
    "values": {
      "xs": 0,
      "sm": 576,
      "md": 768,
      "lg": 992,
      "xl": 1200,
    },
  },
  "typography": {
    "fontFamily": "NeoSansRegular,NeoSansMedium,NeoSansBold,NeoSansLight,-apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif",
    "button": {
      "textTransform": "none"
    }
  },
  "palette": {
    "common": {
      "black": "rgba(0, 0, 0, 1)",
      "white": "#fff"
    },
    "background": {
      "paper": "rgba(250, 250, 250, 1)",
      "default": "rgba(255, 255, 255, 1)"
    },
    "primary": {
      "light": "rgba(58, 80, 132, 1)",
      "main": "rgb(0,40,87)",
      "dark": "rgba(0, 0, 46, 1)",
      "translucent": "rgba(0,40,87,.7)",
      "contrastText": "#fff"
    },
    "secondary": {
      "mediumLight": "rgba(37,171,230, 1)",
      "light": "rgba(88, 177, 238, 1)",
      "main": "rgba(0, 125, 179, 1)",
      "dark": "rgba(0, 86, 139, 1)",
      "translucent": "rgba(0, 130, 187, 1)",
      "contrastText": "#fff"
    },
    "error": {
      "light": "rgba(235, 156, 152, 1)",
      "main": "rgba(203, 47, 38, 1)",
      "dark": "rgba(141, 32, 25, 1)",
      "contrastText": "#fff"
    },
    "text": {
      "primary": "rgba(51, 51, 51, 1)",
      "secondary": "rgba(137, 137, 137, 1)",
      "disabled": "rgba(185, 185, 185, 1)",
      "hint": "rgba(0, 0, 0, 0.38)"
    }
  }
};

export default THEME;
