---
outline: deep
---

# GET Single Booking

This endpoint retrieve detailed information about a specific booking using either the booking ID or booking code. This endpoint provides comprehensive booking data, including customer information, origin and destination details, pricing, and check-in times.

## URL

**Base URL (dev environtment)**: `https://dev-api.harapan-jaya.com`

**Base URL (production)**: `https://api.harapan-jaya.com`

**Endpoint**: `/ticket/v1/Bookings/{idorCode}`

**URL Method**: `GET` `https://dev-api.harapan-jaya.com/ticket/v1/Bookings/{idorCode}`

**Swagger URL**: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Ticketing+Service+OpenApi`

## Parameters

| **Parameter**          | **Type**                      | **Description**                          |
|------------------------|-------------------------------|--------------------------------------    |
| `idorCode` (required)  | `string($uuid)` _(path)_      | The unique booking ID or booking code.   |

## Responses

- `200 OK`: Returns detailed information about the booking based on the ID or booking code.
- `401 Unauthorized`: Authentication required.
- `403 Forbidden`: Insufficient permissions to access the data.
- `404 Not Found`: The booking with the requested ID or booking code was not found.
- `500 Internal Server Error`: Server issues.

## Example Response

::: code-group
<<< @/responses/transaction_service/get_single_booking/success_response.json [200 (OK)]

<<< @/responses/transaction_service/get_single_booking/unauthorized_response.json [401 (Unauthorized)]

<<< @/responses/transaction_service/get_single_booking/forbidden_response.json [403 (Forbidden)]

<<< @/responses/transaction_service/get_single_booking/not_found_response.json [404 (Not Found)]
:::
