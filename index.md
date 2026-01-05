---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "👋🏼Welcome to HJP Documentation"
  tagline: Your gateway to seamless Harapan Jaya API Integration
  actions:
    - theme: brand
      text: Introduction
      link: /introduction
    - theme: alt
      text: Authentication
      link: /api_authentication
    - theme: alt
      text: API References
      link: /api_references/management_service/get_all_cities
    - theme: alt
      text: Change Log
      link: /api_change_log

features:
  - title: API Authentication
    details: The authentication methods required to securely access the Harapan Jaya API.
    link: /api_authentication
  - title: Management Service
    details: Handles the management of cities, stations, and other related data.
    link: /api_references/management_service/get_all_cities
  - title: Schedule Service
    details: Provides information on bus schedules, types, and details for route planning.
    link: /api_references/schedule_service/get_all_schedules
  - title: Transaction Service
    details: Facilitates booking processes and payment-related transactions.
    link: /api_references/transaction_service/post_booking
---
