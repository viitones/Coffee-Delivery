import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-roboto: "Roboto", sans-serif;
    --font-baloo: "Baloo 2", sans-serif;

    --font-roboto-xsm: 0.75rem;
    --font-roboto-sm: 0.875rem;
    --font-roboto-md: 1rem;
    --font-roboto-lg: 1.25rem;

    --font-baloo-xsm: 1.125rem;
    --font-baloo-sm: 1.25rem;
    --font-baloo-md: 1.5rem;
    --font-baloo-lg: 2rem;
    --font-baloo-xl: 3rem;
  }
  
  *, *::after, *::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(prop) => prop.theme['gray-500']};
  }

  html, input, button {
    font: 500 var(--font-roboto-md)/1.3 var(--font-roboto);
  }

  body {
    background-color: ${(prop) => prop.theme['gray-100']};
  }

  h1 {
    font: 800 var(--font-baloo-xl)/1.3 var(--font-baloo);
    color: ${(prop) => prop.theme['gray-900']};
  }

  h2 {
    font: 800 var(--font-baloo-lg)/1.3 var(--font-baloo);
    color: ${(prop) => prop.theme['gray-800']};
  }

  h3 {
    font: 700 var(--font-baloo-sm)/1.3 var(--font-baloo);
    color: ${(prop) => prop.theme['gray-800']};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
  }
`
