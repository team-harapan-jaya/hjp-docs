---
outline: deep
---

# API Change Log

This change log records significant updates to the Harapan Jaya API documentation, including updates to service URLs, endpoints, and response structures that may impact existing integrations.

:::details v1.1.0 – January 2026

### POST /ticket/v1/Bookings
- **Change Type:** Documentation Update
- **Impact:** Non-breaking
- Updated base URL to Ticketing Service
- Updated response schema to include complete booking information
- No request payload changes
- Existing integrations remain compatible

---

### GET /ticket/v1/Bookings
- **Change Type:** Documentation Update
- **Impact:** Non-breaking
- Updated base URL
- Added pagination metadata in response
- Added new response fields:
  - `FinalPrice`
  - `StatusName`
  - `IsActive`
- Filtering behavior remains unchanged
- Pagination fields are optional and backward compatible

---

### GET /ticket/v1/Bookings/{id}
- **Change Type:** Documentation Update
- **Impact:** Non-breaking
- Updated base URL
- Added `IsAlreadyCheckin` flag in response
- Useful for validating check-in state before processing

:::

---
