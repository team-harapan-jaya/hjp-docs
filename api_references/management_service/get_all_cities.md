---
outline: deep
---

# GET All Cities

This endpoint allows users to retrieve a list of cities available in the system. The results can be filtered by optional parameters such as city name, active status, or sorting preferences, enabling more precise and relevant data retrieval. Additionally, the endpoint supports pagination, making it easier to manage large datasets efficiently.

## URL

**Base URL**: `https://dev-api-akdp.harapan-jaya.com`

**Endpoint**: `/management/v2/Cities`

**URL Method**: `GET` `https://dev-api-akdp.harapan-jaya.com/management/v2/Cities`

**Swagger URL**: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Management+Service+OpenApi`

## Parameters

| **Parameter**    | **Type**                      | **Description**                      |
|------------------|-------------------------------|--------------------------------------|
| `q`              | `string` _(query)_            | Search query for city names.         |
| `isActive`       | `boolean` _(query)_           | Filter by active status.             |
| `orderBy`        | `string` _(query)_            | Order results by specific fields.    |
| `pageNumber`     | `integer($int32)` _(query)_   | Page number for paginated results.   |
| `pageSize`       | `integer($int32)` _(query)_   | Number of results per page.          |

## Responses

- `200 OK`: Returns a paginated list of cities.
- `401 Unauthorized`: Authentication required.
- `403 Forbidden`: Insufficient permissions to access the data.
- `500 Internal Server Error`: Server issues.

## Example Response

::: code-group
<<< @/responses/management_service/get_all_cities/success_response.json [200 (OK)]

<<< @/responses/management_service/get_all_cities/unauthorized_response.json [401 (Unauthorized)]

<<< @/responses/management_service/get_all_cities/forbidden_response.json [403 (Forbidden)]
:::
