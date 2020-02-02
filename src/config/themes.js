const colors = {
  primary: `#FF8906`,
  secondary: `#F25F4C`,
  tertiary: `#E53170`,
}

const dark = {
  bg: `#0F0E17`,
  fg: `#FFFFFE`,
  body: `#A7A9BE`,
  ...colors,
}

const light = {
  bg: `#FFFFFE`,
  fg: `#0F0E17`,
  body: `#0F0E17`,
  ...colors,
}

export const themes = { dark, light }
