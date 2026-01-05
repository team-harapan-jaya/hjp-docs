import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "HJP Documentation",
  description: "This is Harapan Jaya Penumpang Documentation",
  base: "/hjp-docs/",
  head: [
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "logo-hj.png" }]
  ],
  themeConfig: {
    logo: 'logo-hj.png',
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Welcome to Harapan Jaya Penumpang Documentation', link: '/introduction', }
        ]
      },
      {
        text: 'Authentication',
        items: [
          { text: 'OAuth2 Authentication Flow (Client Credentials)', link: '/api_authentication', }
        ]
      },
      {
        text: 'API References',
        items: [
          {
            text: 'Management Service',
            collapsed: true,
            items: [
              { text: 'GET All Cities', link: '/api_references/management_service/get_all_cities' },
              { text: 'GET Single City', link: '/api_references/management_service/get_single_city' },
              { text: 'GET Cities With Stations', link: '/api_references/management_service/get_cities_with_stations' },
              { text: 'GET All Stations', link: '/api_references/management_service/get_all_stations' },
              { text: 'GET Single Station', link: '/api_references/management_service/get_single_station' }
            ]
          },
          {
            text: 'Schedule Service',
            collapsed: true,
            items: [
              { text: 'GET All Schedules', link: '/api_references/schedule_service/get_all_schedules' },
              { text: 'GET Single Schedule', link: '/api_references/schedule_service/get_single_schedule' },
              { text: 'GET Schedule Types', link: '/api_references/schedule_service/get_schedule_types' }
            ]
          },
          {
            text: 'Transaction Service',
            collapsed: true,
            items: [
              { text: 'POST Booking', link: '/api_references/transaction_service/post_booking' },
              { text: 'GET All Bookings', link: '/api_references/transaction_service/get_all_bookings' },
              { text: 'GET Single Booking', link: '/api_references/transaction_service/get_single_booking' }
            ]
          }
        ]
      },      
      {
        text: 'Change Log',
        items: [
          { text: 'v1.0.0 - Initial Release', link: '/api_authentication', },
          { text: 'V1.1.0 - January 2026', link: '/api_authentication', }
        ]
      }
    ]
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
  ]
}
);
