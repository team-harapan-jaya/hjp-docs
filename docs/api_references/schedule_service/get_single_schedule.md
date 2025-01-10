---
outline: deep
---

# GET Single Schedule

This endpoint retrieves detailed information about a specific schedule by its unique identifier (ID). The data includes details such as schedule type, departure and arrival times, duration, price, and capacity, making it useful for detailed analysis or integrations.

## URL

**Base URL**: `https://dev-api-akdp.harapan-jaya.com`

**Endpoint**: `/roster/v2/Schedules/{id}`

**URL Method**: `GET` `https://dev-api-akdp.harapan-jaya.com/roster/v2/Schedules/{id}`

**Swagger URL**: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Schedule+Service+OpenApi`

## Parameters

| **Parameter**    | **Type**                      | **Description**                          |
|------------------|-------------------------------|--------------------------------------    |
| `id` (required)  | `string($uuid)` _(path)_      | The unique identifier (UUID) of the schedule.|

## Responses

- `200 OK`: Returns detailed information about the schedule based on the ID.
- `401 Unauthorized`: Authentication required.
- `403 Forbidden`: Insufficient permissions to access the data.
- `404 Not Found`: The schedule with the requested ID was not found.
- `500 Internal Server Error`: Server issues.

## Example Response

::: code-group
<<< @/../responses/schedule_service/get_single_schedule/success_response.json [200 (OK)]

<<< @/../responses/schedule_service/get_single_schedule/unauthorized_response.json [401 (Unauthorized)]

<<< @/../responses/schedule_service/get_single_schedule/forbidden_response.json [403 (Forbidden)]

<<< @/../responses/schedule_service/get_single_schedule/not_found_response.json [404 (Not Found)]
:::
