---
outline: deep
---

# GET Single City

This endpoint retrieves detailed information about a specific city by its unique identifier (ID). The data returned includes city-specific details such as the name, code, and province, allowing developers to access detailed city-level metadata. This is particularly useful for scenarios where precise and structured city data is required for operations or integrations.

## URL

**Base URL**: `https://dev-api-akdp.harapan-jaya.com`

**Endpoint**: `/management/v2/Cities/{id}`

**URL Method**: `GET` `https://dev-api-akdp.harapan-jaya.com/management/v2/Cities/{id}`

**Swagger URL**: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Management+Service+OpenApi`

## Parameters

| **Parameter**    | **Type**                      | **Description**                          |
|------------------|-------------------------------|--------------------------------------    |
| `id` (required)  | `string($uuid)` _(path)_      | The unique identifier (UUID) of the city.|

## Responses

- `200 OK`: Returns detailed information about the city based on the ID.
- `401 Unauthorized`: Authentication required.
- `403 Forbidden`: Insufficient permissions to access the data.
- `404 Not Found`: The city with the requested ID was not found.
- `500 Internal Server Error`: Server issues.

## Example Response

::: code-group
<<< @/../responses/management_service/get_single_city/success_response.json [200 (OK)]

<<< @/../responses/management_service/get_single_city/unauthorized_response.json [401 (Unauthorized)]

<<< @/../responses/management_service/get_single_city/forbidden_response.json [403 (Forbidden)]

<<< @/../responses/management_service/get_single_city/not_found_response.json [404 (Not Found)]
:::
