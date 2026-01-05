---
outline: deep
---

# GET All Bookings

This endpoint allows users to retrieve a paginated list of bookings with optional filters such as booking date, creator, or sorting preferences. This endpoint is ideal for managing and viewing booking data in bulk.

## URL

**Base URL (dev environtment)**: `https://dev-api.harapan-jaya.com`

**Base URL (production)**: `https://api.harapan-jaya.com`

**Endpoint**: `/ticket/v1/Bookings`

**URL Method**: `GET` `https://dev-api.harapan-jaya.com/ticket/v1/Bookings`

**Swagger URL**: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Ticketing+Service+OpenApi`

## Parameters

| **Parameter**             | **Type**                          | **Description**                                     |
|---------------------------|-----------------------------------|-----------------------------------------------------|
| `bookingDate`             | `string($date-time)` _(query)_    | Filter bookings by creation date.                   |
| `bookingStatus`           | `string` _(query)_                | Filter bookings by current booking status.          |
| `isActive`                | `boolean` _(query)_               | Filter bookings by active state.                    |
| `isAvailableForCheckin`   | `boolean` _(query)_               | Filter bookings that are eligible for check-in.     |
| `orderBy`                 | `string` _(query)_                | Order results by specific fields.                   |
| `pageNumber`              | `integer($int32)` _(query)_       | Page number for paginated results.                  |
| `pageSize`                | `integer($int32)` _(query)_       | Number of results per page.                         |

## Responses

- `200 OK`: Returns a paginated list of bookings.
- `401 Unauthorized`: Authentication required.
- `403 Forbidden`: Insufficient permissions to access the data.
- `500 Internal Server Error`: Server issues.

## Example Response

::: code-group
<<< @/responses/transaction_service/get_all_bookings/success_response.json [200 (OK)]

<<< @/responses/transaction_service/get_all_bookings/unauthorized_response.json [401 (Unauthorized)]

<<< @/responses/transaction_service/get_all_bookings/forbidden_response.json [403 (Forbidden)]
:::
