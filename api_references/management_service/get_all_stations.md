---
outline: deep
---

# GET All Stations

This endpoint allows users to retrieve a list of stations with optional filters such as station name or sorting preferences. This endpoint also supports pagination and enabling efficient handling of large datasets when displaying or integrating station data.

## URL

**Base URL (dev environtment)**: `https://dev-api-akdp.harapan-jaya.com`

**Base URL (production)**: `https://api-akdp.harapan-jaya.com`

**Endpoint**: `/management/v2/Stations`

**URL Method**: `GET` `https://dev-api-akdp.harapan-jaya.com/management/v2/Stations`

**Swagger URL**: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Management+Service+OpenApi`

## Parameters

| **Parameter**    | **Type**                      | **Description**                      |
|------------------|-------------------------------|--------------------------------------|
| `q`              | `string` _(query)_            | Search query for station names.      |
| `orderBy`        | `string` _(query)_            | Order results by specific fields.    |
| `pageNumber`     | `integer($int32)` _(query)_   | Page number for paginated results.   |
| `pageSize`       | `integer($int32)` _(query)_   | Number of results per page.          |

## Responses

- `200 OK`: Returns a paginated list of stations.
- `401 Unauthorized`: Authentication required.
- `403 Forbidden`: Insufficient permissions to access the data.
- `500 Internal Server Error`: Server issues.

## Example Response

::: code-group
<<< @/responses/management_service/get_all_stations/success_response.json [200 (OK)]

<<< @/responses/management_service/get_all_stations/unauthorized_response.json [401 (Unauthorized)]

<<< @/responses/management_service/get_all_stations/forbidden_response.json [403 (Forbidden)]
:::
