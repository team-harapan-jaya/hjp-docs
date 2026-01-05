---
outline: deep
---

# API Change Log

This section documents all significant changes made to the Harapan Jaya API documentation, including updates to service URLs, endpoints, and response structures. The purpose of this change log is to help partners understand what has changed, why the change was made, and how it may affect existing integrations.

---

## Ticketing Service

<details>
<summary><strong>v1.1.0 – January 2026</strong></summary>

### Overview
This release focuses on aligning the Booking API documentation with the latest Ticketing Service implementation.

---

### POST /ticket/v1/Bookings

**Change Type:** Documentation Update  
**Impact:** Non-breaking

#### Changes
- Updated base URL to Ticketing Service
- Updated response schema to include complete booking information

#### Notes
- No request payload changes
- Existing integrations remain compatible

---

### GET /ticket/v1/Bookings

**Change Type:** Documentation Update  
**Impact:** Non-breaking

#### Changes
- Updated base URL
- Added pagination metadata in response
- Added new response fields:
  - `FinalPrice`
  - `StatusName`
  - `IsActive`

#### Notes
- Filtering behavior remains unchanged
- Pagination fields are optional and backward compatible

---

### GET /ticket/v1/Bookings/{idOrCode}

**Change Type:** Documentation Update  
**Impact:** Non-breaking

#### Changes
- Updated base URL
- Added `IsAlreadyCheckin` flag in response

#### Notes
- Useful for validating check-in state before processing

</details>

---

<details>
<summary><strong>v1.0.0 – Initial Release</strong></summary>

### Overview
Initial release of Booking API documentation.

#### Included Endpoints
- POST /ticket/v1/Bookings
- GET /ticket/v1/Bookings
- GET /ticket/v1/Bookings/{idOrCode}

#### Notes
- Base URL pointing to initial Ticketing API gateway
- Basic booking response structure

</details>
