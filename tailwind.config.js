/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { ink: { 950:'#03060d',900:'#05080f',800:'#070b18',700:'#0a1224',600:'#0e1a36' }, cyan: { 300:'#67e3f9',400:'#22d3ee',500:'#06b6d4',600:'#0891b2' } }, fontFamily: { sans:['Sora','system-ui','sans-serif'], display:['Space Grotesk','Sora','system-ui','sans-serif'] }, animation: { 'float-slow':'float 8s ease-in-out infinite', 'float-slower':'float 12s ease-in-out infinite', 'pulse-glow':'pulse-glow 4s ease-in-out infinite', 'marquee':'marquee 35s linear infinite' }, keyframes: { float:{'0%,100%':{transform:'translateY(0) translateX(0)'},'50%':{transform:'translateY(-22px) translateX(10px)'}}, 'pulse-glow':{'0%,100%':{opacity:'.35',transform:'scale(1)'},'50%':{opacity:'.65',transform:'scale(1.08)'}}, marquee:{'0%':{transform:'translateX(0)'},'100%':{transform:'translateX(-50%)'}} } } },
  plugins: [],
};
