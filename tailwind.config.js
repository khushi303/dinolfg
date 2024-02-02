/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Bgheader': "url(./assets/images/png/bgheaderr.png)",
        'BgBtnJoin': "url(./assets/images/png/bg-btnjoin.png)",
        'BgTimeline': "url(./assets/images/png/timelinedhased.png)"
      },
      backgroundSize: {
        'Bgsize': "100% 100%"
      }
    },
  },
  plugins: [],
}

