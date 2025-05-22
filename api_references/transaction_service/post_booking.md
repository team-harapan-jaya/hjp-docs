---
outline: deep
---

# POST Booking

This endpoint allows users to create a new booking by providing the necessary details such as schedule, origin, and destination. This endpoint allows users to initiate a booking process with the required information.

> [!TIP]
> 💡 Ensure that the user has completed the payment before initiating the booking process.

## URL

**Base URL (dev environtment)**: `https://dev-api-akdp.harapan-jaya.com`

**Base URL (production)**: `https://api-akdp.harapan-jaya.com`

**Endpoint**: `/transaction/v2/Bookings`

**URL Method**: `GET` `https://dev-api-akdp.harapan-jaya.com/transaction/v2/Bookings`

**Swagger URL**: `https://dev-api-akdp.harapan-jaya.com/swagger/index.html?urls.primaryName=Transaction+Service+OpenApi`

## Body

| **Attribute**          | **Type**    | **Description**                                                | **Required**    |
|------------------------|-------------|----------------------------------------------------------------|-----------------|
| `Name`                 | `string`    | The name of the customer making the booking.                   | Required        |
| `PhoneNumber`          | `string`    | The customer's phone number.                                   | Required        |
| `Email`                | `string`    | The customer's email address.                                  | Required        |
| `Address`              | `string`    | The customer's address.                                        | Required        |
| `ScheduleId`           | `string`    | The unique identifier (UUID) of the schedule for the booking.  | Required        |
| `OriginStationId`      | `string`    | The unique identifier (UUID) of the origin terminal.           | Required        |
| `DestinationStationId` | `string`    | The unique identifier (UUID) of the destination terminal.      | Required        |

## Example Request Body

```json
[
    {
        "Name": "John Doe",
        "PhoneNumber": "0873622342",
        "Email": "johndoe@example.com",
        "Address": "123 Main Street",
        "ScheduleId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "OriginStationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "DestinationStationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6" 
    },
    {
        "Name": "Jessica Doe",
        "PhoneNumber": "0873622342",
        "Email": "jessicadoe@example.com",
        "Address": "123 Main Street",
        "ScheduleId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "OriginStationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "DestinationStationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
]
```

## Responses

- `200 OK`: Returns the details of the newly created booking.
- `400 Bad Request`: Invalid input.
- `401 Unauthorized`: Authentication required.
- `403 Forbidden`: Insufficient permissions to access the data.
- `500 Internal Server Error`: Server issues.

## Example Response

::: code-group
<<< @/responses/transaction_service/post_booking/success_response.json [200 (OK)]

<<< @/responses/transaction_service/post_booking/bad_request_response.json [400 (Bad Request)]

<<< @/responses/transaction_service/post_booking/unauthorized_response.json [401 (Unauthorized)]

<<< @/responses/transaction_service/post_booking/forbidden_response.json [403 (Forbidden)]
:::
