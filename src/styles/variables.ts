// --------------------- COLORS ---------------------------------
export const COLOR_WHITE: string = '#FFFFFF';
export const COLOR_TRANSPARENT: string = 'rgba(255, 255, 255, 0)';
export const COLOR_BLACK: string = '#000000';
export const COLOR_YELLOW: string = '#ffd23f';
export const COLOR_RED: string = '#ee4266';
export const COLOR_AQUA: string = '#1b998b';
export const SIZE_EXTRA_SMALL: string = '500px';
export const SIZE_SMALL: string = '768px';
export const SIZE_MEDIUM: string = '992px';
export const SIZE_LARGE: string = '1200px';

// -------------------- VARIABLES -------------------------------
export const BROWSER_CONTEXT: number = 19;
export const FONT_SUBHEADING: string = 'Play';
export const FONT_FOOTER: string = 'Play';

// -------------------- FUNCTIONS -------------------------------
export function em(pixels: number, context: number = BROWSER_CONTEXT) {
    return `${pixels / context}em`;
}

export function rem(pixels: number, contex: number = BROWSER_CONTEXT) {
    return `${pixels / contex}rem`;
}

export function headingFont(size: number) {
  return `
    color: ${COLOR_WHITE};
    font-family: ${FONT_SUBHEADING};
    font-size: ${rem(size)};
    line-height: 1.4;
    text-decoration: none;
    text-transform: uppercase;
  `;
}

export function textShadowEffect() {
  return `
    text-shadow:
      ${em(.8)} ${em(.8)} 0 ${COLOR_BLACK},
      ${em(-.30)} ${em(-.30)} 0 ${COLOR_BLACK},
      ${em(.30)} ${em(-.30)} 0 ${COLOR_BLACK},
      ${em(-.30)} ${em(.30)} 0 ${COLOR_BLACK},
      ${em(.30)} ${em(.30)} 0 ${COLOR_BLACK};
  `;
}

export const boxShadowEffect = () => `
  border-radius: ${rem(10)};
  box-shadow:
    ${rem(3)} ${rem(3)} 0 ${COLOR_BLACK},
    ${rem(-1)} ${rem(-1)} 0 ${COLOR_BLACK},
    ${rem(1)} ${rem(-1)} 0 ${COLOR_BLACK},
    ${rem(-1)} ${rem(1)} 0 ${COLOR_BLACK},
    ${rem(1)} ${rem(1)} 0 ${COLOR_BLACK};
`;