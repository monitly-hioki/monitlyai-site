/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: ["bg-[#0056FF]","text-[#0056FF]","bg-[#EAF2FF]","bg-[#F7F9FA]","bg-[#F0F3F5]","text-neutral-600","text-neutral-700","text-neutral-900","border-neutral-200","bg-white"],
  theme: { extend: { colors: { brand: { blue: "#0056FF", dark: "#003B99", soft: "#F7F9FA", soft2: "#F0F3F5" } }, maxWidth: { container: "1200px" } } },
  plugins: [],
}
