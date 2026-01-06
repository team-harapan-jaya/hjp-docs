---
outline: deep
---

# API Change Log

This change log records significant updates to the Harapan Jaya API documentation, including updates to service URLs, endpoints, and response structures that may impact existing integrations.

## Version Change Details

<div id="v1-1-0"></div>

::: details v1.0.1 – January 2026
---

###### POST Booking
- Updated base URL for both development and production environments
  - Development: `https://dev-api-akdp.harapan-jaya.com/` > `https://dev-api.harapan-jaya.com/`
  - Production: `https://api-akdp.harapan-jaya.com/` > `https://api.harapan-jaya.com/`
- Updated endpoint
  `/transaction/v2/Bookings` > `/ticket/v1/Bookings`
- Updated HTTP method and Swagger URL
  - HTTP Method: `POST` `https://dev-api-akdp.harapan-jaya.com/transaction/v2/Bookings` > `POST` `https://dev-api.harapan-jaya.com/ticket/v1/Bookings`
  - Swagger URL: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Transaction+Service+OpenApi` > `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Ticketing+Service+OpenApi`
- Updated 200 (OK) response schema to include complete booking information

---

###### GET All Bookings
- Updated base URL for both development and production environments
  - Development: `https://dev-api-akdp.harapan-jaya.com/` > `https://dev-api.harapan-jaya.com/`
  - Production: `https://api-akdp.harapan-jaya.com/` > `https://api.harapan-jaya.com/`
- Updated endpoint
  `/transaction/v2/Bookings` > `/ticket/v1/Bookings`
- Updated HTTP method and Swagger URL
  - HTTP Method: `POST` `https://dev-api-akdp.harapan-jaya.com/transaction/v2/Bookings` > `POST` `https://dev-api.harapan-jaya.com/ticket/v1/Bookings`
  - Swagger URL: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Transaction+Service+OpenApi` > `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Ticketing+Service+OpenApi`
- Added new query parameters:
  - `bookingStatus`
  - `isActive`
  - `isAvailableForCheckin`
- Removed query parameter:
  - `createdBy`
- Updated 200 (OK) response schema to include complete booking information

---

###### GET Single Booking
- Updated base URL for both development and production environments
  - Development: `https://dev-api-akdp.harapan-jaya.com/` > `https://dev-api.harapan-jaya.com/`
  - Production: `https://api-akdp.harapan-jaya.com/` > `https://api.harapan-jaya.com/`
- Updated endpoint
  `/transaction/v2/Bookings` > `/ticket/v1/Bookings`
- Updated HTTP method and Swagger URL
  - HTTP Method: `POST` `https://dev-api-akdp.harapan-jaya.com/transaction/v2/Bookings` > `POST` `https://dev-api.harapan-jaya.com/ticket/v1/Bookings`
  - Swagger URL: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Transaction+Service+OpenApi` > `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Ticketing+Service+OpenApi`
- Updated 200 (OK) response schema to include complete booking information

:::
