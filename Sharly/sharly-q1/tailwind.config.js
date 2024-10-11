/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this for React components
    "./node_modules/flowbite/**/*.js", // Add this to include Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Add this line to use Flowbite's plugin
  ],
};
