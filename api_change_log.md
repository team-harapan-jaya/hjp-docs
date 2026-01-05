---
outline: deep
---

# API Change Log

This change log records significant updates to the Harapan Jaya API documentation, including updates to service URLs, endpoints, and response structures that may impact existing integrations.

---

<div id="v1-1-0"></div>

<details>
<summary><strong>v1.1.0 – January 2026</strong></summary>

---

#### POST Booking
- Updated base URL for both development and production environments
- Updated endpoint
- Updated HTTP method and Swagger URL
- Updated 200 (OK) response schema to include complete booking information

---

#### GET All Bookings
- Updated base URL for both development and production environments
- Updated endpoint
- Updated HTTP method and Swagger URL
- Added new query parameters:
  - `bookingStatus`
  - `isActive`
  - `isAvailableForCheckin`
- Removed query parameter:
  - `createdBy`
- Updated 200 (OK) response schema to include complete booking information

---

#### GET Single Booking
- Updated base URL for both development and production environments
- Updated endpoint
- Updated HTTP method and Swagger URL
- Updated 200 (OK) response schema to include complete booking information

<details>
