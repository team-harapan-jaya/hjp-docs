---
outline: deep
---

# GET All Schedules

This endpoint allows users to retrieve a list of schedules with optional filters such as date, terminal, class, or schedule types. This endpoint supports pagination and sorting, enabling developers to efficiently handle large datasets and customize results based on their needs.

## URL

**Base URL**: `https://dev-api-akdp.harapan-jaya.com`

**Endpoint**: `/roster/v2/Schedules`

**URL Method**: `GET` `https://dev-api-akdp.harapan-jaya.com/roster/v2/Schedules`

**Swagger URL**: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Schedule+Service+OpenApi`

## Parameters

| **Parameter**         | **Type**                          | **Description**                                 |
|-----------------------|-----------------------------------|-------------------------------------------------|
| `scheduleDate`        | `string($date-time)` _(query)_    | Filter by schedule date.                        |
| `departureStation`    | `string` _(query)_                | Filter by departure station name.               |
| `arrivalStation`      | `string` _(query)_                | Filter by arrival station name.                 |
| `className`           | `string` _(query)_                | Filter by class of the schedule.                |
| `scheduleTypesIds`    | `array[string($uuid)]` _(query)_  | Filter by specific schedule type IDs.           |
| `departureTimeFrom`   | `string($date-span)` _(query)_    | Filter by departure time range (start).         |
| `departureTimeTo`     | `string($date-span)` _(query)_    | Filter by departure time range (end).           |
| `arrivalTimeFrom`     | `string($date-span)` _(query)_    | Filter by arrival time range (start).           |
| `arrivalTimeTo`       | `string($date-span)` _(query)_    | Filter by arrival time range (end).             |
| `userId`              | `string` _(query)_                | Filter schedules created by a specific user.    |
| `orderBy`             | `string` _(query)_                | Order results by specific fields.               |
| `pageNumber`          | `integer($int32)` _(query)_       | Page number for paginated results.              |
| `pageSize`            | `integer($int32)` _(query)_       | Number of results per page.                     |

## Responses

- `200 OK`: Returns a paginated list of schedules.
- `401 Unauthorized`: Authentication required.
- `403 Forbidden`: Insufficient permissions to access the data.
- `500 Internal Server Error`: Server issues.

## Example Response

::: code-group
<<< @/../responses/schedule_service/get_all_schedules/success_response.json [200 (OK)]

<<< @/../responses/schedule_service/get_all_schedules/unauthorized_response.json [401 (Unauthorized)]

<<< @/../responses/schedule_service/get_all_schedules/forbidden_response.json [403 (Forbidden)]
:::
