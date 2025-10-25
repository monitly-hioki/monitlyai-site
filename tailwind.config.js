/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
  safelist: [
    { pattern: /^aspect-\[.*\]$/ },
    { pattern: /^md:order-(1|2)$/ },
    'md:grid-flow-dense',
    'rounded-2xl',
    'bg-gray-50',
    'text-gray-700',
    'object-cover',
  ],
}
