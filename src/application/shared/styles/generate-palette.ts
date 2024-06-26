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

const rgbToHsl = (r: number, g: number, b: number): HSL => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
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
  }

  return [h, s, l];
};

const adjustLightness = (rgb: RGB, factor: number): string => {
  const [h, s, l] = rgbToHsl(...rgb);
  const newL = Math.max(0, Math.min(1, l * factor));
  return `${(h * 360).toFixed(2)}deg ${(s * 100).toFixed(2)}% ${(newL * 100).toFixed(2)}%`;
};

const setColorProperty = (
  property: string,
  color: string,
  intensity: number
) => {
  document.body.style.setProperty(`--${property}-${intensity}`, color);
};

const setColorScheme = (color: string, property: string) => {
  const baseRgb = hexToRgb(color);
  const factors = [1.8, 1.6, 1.4, 1.2, 1.1, 1.0, 0.9, 0.7, 0.5, 0.3, 0.15];

  factors.forEach((factor, index) => {
    const intensity = index === factors.length - 1 ? 950 : index * 100;
    setColorProperty(property, adjustLightness(baseRgb, factor), intensity);
  });
};

export const setPalette = ({
  primaryColor,
  secondary_color,
}: {
  primaryColor: string;
  secondary_color: string;
}) => {
  setColorScheme(primaryColor, "primary");
  setColorScheme(secondary_color, "secondary");
};
