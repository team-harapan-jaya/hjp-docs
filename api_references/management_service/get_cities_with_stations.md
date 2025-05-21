---
outline: deep
---

# GET Cities with Stations

This endpoint provides a list of cities along with their associated stations, allowing developers to query cities with station data. Optional filters, such as searching for cities with stations or sorting by specific fields, enhance the ability to retrieve the most relevant results. The endpoint also supports pagination, ensuring efficient handling of larger datasets for integration or display purposes.

## URL

**Base URL (dev environtment)**: `https://dev-api-akdp.harapan-jaya.com

**Base URL (production)**: `https://api-akdp.harapan-jaya.com

**Endpoint**: `/management/v2/Cities/Stations`

**URL Method**: `GET` `https://dev-api-akdp.harapan-jaya.com/management/v2/Cities/Stations`

**Swagger URL**: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Management+Service+OpenApi`

## Parameters

| **Parameter**    | **Type**                      | **Description**                                 |
|------------------|-------------------------------|--------------------------------------           |
| `q`              | `string` _(query)_            | Search query for city or station names.         |
| `isActive`       | `boolean` _(query)_           | Filter cities that have associate stations.     |
| `orderBy`        | `string` _(query)_            | Order results by specific fields.               |
| `pageNumber`     | `integer($int32)` _(query)_   | Page number for paginated results.              |
| `pageSize`       | `integer($int32)` _(query)_   | Number of results per page.                     |

## Responses

- `200 OK`: Returns a paginated list of cities with station details.
- `401 Unauthorized`: Authentication required.
- `403 Forbidden`: Insufficient permissions to access the data.
- `500 Internal Server Error`: Server issues.

## Example Response

::: code-group
<<< @/responses/management_service/get_cities_with_stations/success_response.json [200 (OK)]

<<< @/responses/management_service/get_cities_with_stations/unauthorized_response.json [401 (Unauthorized)]

<<< @/responses/management_service/get_cities_with_stations/forbidden_response.json [403 (Forbidden)]

:::
