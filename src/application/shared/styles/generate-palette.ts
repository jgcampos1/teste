type RGB = [number, number, number];
type HSL = [number, number, number];

const hexToRgb = (hex: string): RGB => {
  hex = hex.replace(/^#/, "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
};

const rgbToHex = (r: number, g: number, b: number): string => {
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const rgbToHsl = (r: number, g: number, b: number): HSL => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  const l = (max + min) / 2;

  if (max === min) {
    h = 0; // achromatic
  } else {
    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
    return [h, s, l];
  }

  return [h, 0, l]; // s is zero if achromatic
};

const hslToRgb = (h: number, s: number, l: number): RGB => {
  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

const adjustLightness = (rgb: RGB, factor: number): RGB => {
  const [h, s, l] = rgbToHsl(...rgb);
  const newL = Math.max(0, Math.min(1, l * factor));
  return hslToRgb(h, s, newL);
};

export const generatePalette = (
  hexColor: string
): { colors: { primary: { [key: number]: string } } } => {
  const baseRgb = hexToRgb(hexColor);
  const primary = {
    50: rgbToHex(...adjustLightness(baseRgb, 1.8)),
    100: rgbToHex(...adjustLightness(baseRgb, 1.6)),
    200: rgbToHex(...adjustLightness(baseRgb, 1.4)),
    300: rgbToHex(...adjustLightness(baseRgb, 1.2)),
    400: rgbToHex(...adjustLightness(baseRgb, 1.1)),
    500: hexColor,
    600: rgbToHex(...adjustLightness(baseRgb, 0.9)),
    700: rgbToHex(...adjustLightness(baseRgb, 0.7)),
    800: rgbToHex(...adjustLightness(baseRgb, 0.5)),
    900: rgbToHex(...adjustLightness(baseRgb, 0.3)),
    950: rgbToHex(...adjustLightness(baseRgb, 0.15)),
  };

  document.body.style.setProperty("--minha-primary", primary[500]);

  return { colors: { primary: primary } };
};

export const getActualColor = () => {
  return {
    colors: {
      primary: {
        "50": "#FFFFFF",
        "100": "#FFFFFF",
        "200": "#FFFFFF",
        "300": "#EDEDFD",
        "400": "#C9C9F8",
        "500": "#a5a5f3",
        "600": "#8181EE",
        "700": "#3939E5",
        "800": "#1818B4",
        "900": "#0E0E6C",
        "950": "#070736",
      },
    },
  };
};
