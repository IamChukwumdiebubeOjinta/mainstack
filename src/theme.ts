import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    semanticTokens: {
      colors: {
        brand: {
          DEFAULT: { value: "orange.500" },
          subtle: { value: { _light: "gray.50", _dark: "gray.800" } },
        },
        // App palette extracted from components
        app: {
          text: { value: { _light: "#131316", _dark: "white" } },
          textMuted: { value: { _light: "#56616B", _dark: "gray.400" } },
          surface: { value: { _light: "white", _dark: "gray.900" } },
          surfaceMuted: { value: { _light: "#EFF1F6", _dark: "gray.800" } },
          borderMuted: { value: { _light: "#E5E5E5", _dark: "gray.700" } },
          success: { value: { _light: "#28A745", _dark: "#28A745" } },
          successBg: { value: { _light: "#E6F7ED", _dark: "green.900" } },
          danger: { value: { _light: "#DC3545", _dark: "#DC3545" } },
          dangerBg: { value: { _light: "#FDEBEB", _dark: "red.900" } },
          warning: { value: { _light: "#FFC107", _dark: "#FFC107" } },
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
        pill: { value: "100px" },
        action: { value: "8px" },
      },
      shadows: {
        app: {
          header: { value: "0px 2px 4px #2c3b420d , 0px 2px 6px #2d3b430f" },
          sidebar: { value: "0px 4px 8px rgba(92, 115, 131, 0.08), 0px 6px 12px rgba(92, 115, 131, 0.08)" },
        },
      },
    },
  },
})

export default system


