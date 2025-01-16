---
outline: deep
---

# OAuth2 Authentication Flow (Client Credentials)

The Harapan Jaya API uses the OAuth2 client credentials flow for authentication, allowing secure access to API endpoints.

## Token Request

The client application sends a POST request to the token URL: `https://identity.harapan-jaya.com/realms/dev/protocol/openid-connect/token`

The request must include the following parameters:

- `client_id`: The client's unique identifier.
- `client_secret`: The client's secret key.
- `grant_type`: Set to `client_credentials`.

## Example Request

```bash
curl -X POST "https://identity.harapan-jaya.com/realms/dev/protocol/openid-connect/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "client_id=your_client_id&client_secret=your_client_secret&grant_type=client_credentials"
```

## Token Response

If the request is successful, the authorization server responds with an access token:

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "token_type": "Bearer",
    "expires_in": 300
}
```

## Accessing Protected Endpoints

Use the access token in the Authorization header for all API requests:

```bash
Authorization: Bearer <access_token>
```

## Token Expiry

Tokens have a limited lifespan (5 minutes). Once expired, a new token must be requested using the same flow.