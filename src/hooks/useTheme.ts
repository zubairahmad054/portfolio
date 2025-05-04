import { useState, useEffect } from 'react';

interface Theme {
  primary: string;
  secondary: string;
  neutral: {
    light: string;
    DEFAULT: string;
  };
}

const defaultTheme: Theme = {
  primary: '#0A192F',
  secondary: '#64FFDA',
  neutral: {
    light: '#CCD6F6',
    DEFAULT: '#8892B0',
  },
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const updateTheme = (newTheme: Partial<Theme>) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      ...newTheme,
      neutral: {
        ...prevTheme.neutral,
        ...(newTheme.neutral || {}),
      },
    }));

    // Update CSS variables
    Object.entries(newTheme).forEach(([key, value]) => {
      if (typeof value === 'object') {
        Object.entries(value).forEach(([subKey, subValue]) => {
          document.documentElement.style.setProperty(
            `--${key}-${subKey.toLowerCase()}`,
            subValue
          );
        });
      } else {
        document.documentElement.style.setProperty(`--${key}`, value);
      }
    });
  };

  useEffect(() => {
    // Initialize CSS variables
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--secondary', theme.secondary);
    document.documentElement.style.setProperty('--neutral-light', theme.neutral.light);
    document.documentElement.style.setProperty('--neutral', theme.neutral.DEFAULT);
  }, [theme.primary, theme.secondary, theme.neutral.light, theme.neutral.DEFAULT]);

  return { theme, updateTheme };
};