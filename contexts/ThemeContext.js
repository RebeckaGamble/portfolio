import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = {
  theme: "light",
  themes: {
    light: {
      backgroundColor: "white",
      textColor: "black",
     // border: "1px gray",
     //fonSize: "24px"
    },
    dark: {
      backgroundColor: "black",
      textColor: "white",
      //border: "1px white",
    },
  },
};

function themeReducer(state, action) {
  switch (action.type) {
    case "light":
      return { ...state, theme: "light" };
    case "dark":
      return { ...state, theme: "dark" };
    default:
      return state;
  }
}

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
