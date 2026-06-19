import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { marmite: { purple:'#6D28D9', pink:'#EC4899', cream:'#FFF7ED', ink:'#1F2937' } } } }, plugins: [] };
export default config;
