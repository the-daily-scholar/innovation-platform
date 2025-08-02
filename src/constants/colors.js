export const colors = {
  // Core branding colors
  brandPrimary: '#12418d',       // Deep blue
  brandSecondary: '#2f84a9',     // Medium blue
  brandTertiary: '#8ecaef',      // Light blue
  
  // Accent colors
  accentPrimary: '#ef601e',      // Vibrant orange
  accentSecondary: '#fa9939',     // Warm orange
  accentTertiary: '#f7ce4d',      // Golden yellow
  
  // Neutral colors
  pureWhite: '#ffffff',
  paperWhite: '#f8f8ff',         // Slightly off-white
  lightWarm: '#f9eeb6',          // Pale cream
  lightCool: '#f8dcbf',          // Peach cream
  mediumNeutral: '#d5c5c7',      // Grayish pink
  warmGray: '#ddc1a7',           // Beige
  darkWarm: '#bd9479',           // Muted brown
  darkCool: '#745e4d',           // Cool brown
  charcoal: '#5b4f47',           // Dark brown-gray
  deepCharcoal: '#373d3b',       // Almost black
  pureBlack: '#000000',
  
  // Special colors
  eggplant: '#5e376d',           // Deep purple
  navy: '#001f3d',               // Very dark blue
  
  // *Added complementary colors*
  successGreen: '#4caf50*',       // For positive actions
  errorRed: '#f44336*',           // For errors/warnings
  alertYellow: '#ffeb3b*',        // For cautions
  infoBlue: '#2196f3*'           // For informational items
};

// Optional: Color groups for easier theming
export const colorGroups = {
  brand: ['brandPrimary', 'brandSecondary', 'brandTertiary'],
  accents: ['accentPrimary', 'accentSecondary', 'accentTertiary'],
  neutrals: [
    'pureWhite', 'paperWhite', 'lightWarm', 'lightCool',
    'mediumNeutral', 'warmGray', 'darkWarm', 'darkCool',
    'charcoal', 'deepCharcoal', 'pureBlack'
  ],
  special: ['eggplant', 'navy'],
  system: ['successGreen', 'errorRed', 'alertYellow', 'infoBlue']
};

// Optional: Light/dark theme variations
export const themes = {
  light: {
    background: colors.paperWhite,
    text: colors.deepCharcoal,
    primary: colors.brandPrimary
  },
  dark: {
    background: colors.deepCharcoal,
    text: colors.paperWhite,
    primary: colors.brandTertiary
  }
};
