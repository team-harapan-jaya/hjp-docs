---
outline: deep
---

# GET Schedule Types

This endpoint retrieves a list of available schedule types. This endpoint is useful for obtaining metadata about schedule classifications, such as types or codes, for filtering or categorization purposes.

## URL

**Base URL**: `https://dev-api-akdp.harapan-jaya.com`

**Endpoint**: `/roster/v2/Schedules/Types`

**URL Method**: `GET` `https://dev-api-akdp.harapan-jaya.com/roster/v2/Schedules/Types`

**Swagger URL**: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Schedule+Service+OpenApi`

## Parameters

| **Parameter**         | **Type**                          | **Description**                  |
|-----------------------|-----------------------------------|----------------------------------|
| `q`                   | `string` _(query)_                | Search query for schedule types. |

## Responses

- `200 OK`: Returns a paginated list of schedule types.
- `401 Unauthorized`: Authentication required.
- `403 Forbidden`: Insufficient permissions to access the data.
- `500 Internal Server Error`: Server issues.

## Example Response

::: code-group
<<< @/../responses/schedule_service/get_schedule_types/success_response.json [200 (OK)]

<<< @/../responses/schedule_service/get_schedule_types/unauthorized_response.json [401 (Unauthorized)]

<<< @/../responses/schedule_service/get_schedule_types/forbidden_response.json [403 (Forbidden)]
:::
