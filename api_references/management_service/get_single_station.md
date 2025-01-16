---
outline: deep
---

# GET Single Station

This endpoint retrieve detailed information about a specific station by its unique identifier (ID). The data includes details such as the station's name, code, location, and type, which are useful for applications requiring precise station-level metadata.

## URL

**Base URL**: `https://dev-api-akdp.harapan-jaya.com`

**Endpoint**: `/management/v2/Stations/{id}`

**URL Method**: `GET` `https://dev-api-akdp.harapan-jaya.com/management/v2/Stations/{id}`

**Swagger URL**: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Management+Service+OpenApi`

## Parameters

| **Parameter**    | **Type**                      | **Description**                          |
|------------------|-------------------------------|--------------------------------------    |
| `id` (required)  | `string($uuid)` _(path)_      | The unique identifier (UUID) of the station.|

## Responses

- `200 OK`: Returns detailed information about the station based on the ID.
- `401 Unauthorized`: Authentication required.
- `403 Forbidden`: Insufficient permissions to access the data.
- `404 Not Found`: The station with the requested ID was not found.
- `500 Internal Server Error`: Server issues.

## Example Response

::: code-group
<<< @/responses/management_service/get_single_station/success_response.json [200 (OK)]

<<< @/responses/management_service/get_single_station/unauthorized_response.json [401 (Unauthorized)]

<<< @/responses/management_service/get_single_station/forbidden_response.json [403 (Forbidden)]

<<< @/responses/management_service/get_single_station/not_found_response.json [404 (Not Found)]
:::
