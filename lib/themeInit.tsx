import { ThemeManager, Colors } from "react-native-ui-lib";

export default function themeInit() {
  // Define custom colors for light theme
  const lightThemeColors = {
    primary: Colors.black,
    backgroundPrimary: Colors.white,
    backgroundSecondary: "#1E1E1E",
    cardBackground: "#1f1f1f",
    textPrimary: Colors.black,
    textSecondary: Colors.grey30,
    border: "#2C2C2C",
    error: "#FF4D4D",
    success: "#4CAF50",
  };

  // Set light theme colors
  Colors.loadColors(lightThemeColors);

  // Configure light theme
  ThemeManager.setComponentTheme("View", {
    backgroundColor: Colors.backgroundPrimary,
  });

  ThemeManager.setComponentTheme("Text", {
    color: Colors.textPrimary,
  });
}
