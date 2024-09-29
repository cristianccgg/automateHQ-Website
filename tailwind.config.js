/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,css}", // Para los archivos dentro de la carpeta src
    "./*.html", // Para los archivos HTML en la raíz
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(35deg, #be0800 0%, #dc470d 100%)",
        "purple-custom": "linear-gradient(-41deg, #3600D1 0%, #B839FF 100%)",
      },
    },
  },
  plugins: [],
};
