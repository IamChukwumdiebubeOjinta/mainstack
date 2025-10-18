import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    semanticTokens: {
      colors: {
        brand: {
          DEFAULT: { value: "orange.500" },
          subtle: { value: { _light: "gray.50", _dark: "gray.800" } },
        },
        nav: {
          active: { value: { _light: "fg", _dark: "fg" } },
          muted: { value: { _light: "fg.muted", _dark: "fg.muted" } },
          hoverBg: { value: { _light: "bg.muted", _dark: "bg.muted" } },
        },
        card: {
          bg: { value: { _light: "bg", _dark: "bg" } },
          border: { value: { _light: "border", _dark: "border" } },
        },
        chart: {
          line: { value: "{colors.orange.500}" },
        },
        bg: {
          DEFAULT: { value: { _light: "white", _dark: "gray.900" } },
          muted: { value: { _light: "gray.50", _dark: "gray.800" } },
        },
        fg: {
          DEFAULT: { value: { _light: "gray.900", _dark: "white" } },
          muted: { value: { _light: "gray.600", _dark: "gray.400" } },
        },
      },
      radii: {
        card: { value: "xl" },
      },
    },
  },
})

export default system


