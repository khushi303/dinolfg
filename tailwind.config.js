/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Bgheader': "url(./assets/images/webp/bgheaderr.webp)",
        'BgBtnJoin': "url(./assets/images/webp/bg-btnjoin.webp)",
        'BgTimeline': "url(./assets/images/webp/timelinedhased.webp)"
      },
      backgroundSize: {
        'Bgsize': "100% 100%"
      }
    },
  },
  plugins: [],
}

