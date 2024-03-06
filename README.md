# Drone Backend

This repository contains the backend code for the Drone application. Below are the instructions to install and run the app locally.

## Installation

```bash
$ yarn
```

**Environment Variables:**
Create a `.env` file in the root folder with the following variables:

```
DATABASE_URL=<MondoDbURL>
JWT_SECRET=<Your JWT SERET> (provide any string for testing)
ACCESS_CODE_EXPIRY=24h (use 24 hours for testing)
```

## Running the App

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev
```

## Postman Collection

Postman collection link: [Drone Backend Postman Collection](https://app.getpostman.com/join-team?invite_code=e7428287211159780c07512b02009b81&target_code=75169fd48c40549f4dd91523c4db8613)

When navigating to Postman, follow these steps:
1. Make the first call to the `signup` API.
   ![Signup API](https://github.com/Bhaumik-Tandan/Drone-Backend/assets/62440699/575a29c1-3da6-4ebe-bc70-7c72a324ddff)
2. Then, hit the `login` API. It will automatically add the token.
   ![Login API](https://github.com/Bhaumik-Tandan/Drone-Backend/assets/62440699/a36899ea-ccb4-4374-bc6c-c07b2b29b032)
3. Ensure that the environment in Postman is set to `local`.
   ![Environment Setup](https://github.com/Bhaumik-Tandan/Drone-Backend/assets/62440699/4f4e55b1-48ef-4cbf-9564-33fd2b98bb01)

After these steps, you can use any API endpoint as needed.

Feel free to explore and contribute to this project!
