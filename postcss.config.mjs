/** @type {import('postcss-load-config').Config} */
const config = {
  eslint: {
    ignoreDuringBuilds: true
  },
  output: "export",
  plugins: { 
    tailwindcss: {

    },
  },
};

export default config;
