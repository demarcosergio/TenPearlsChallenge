## Backend API:

- .NET Version: 6.0
- MSSQL DB
- Clean Architecture
- Dapper Repository Pattern
- Unit of Work
- Swagger UI
- API Authentication (Key Based)
- Logging (using log4net)
- Unit Testing (MSTest Project)

### DB setup:
To create the database and the table you can use the scripts shared under the `TenPearls.Sql/Scripts` folder of the code sample.

## Angular APP:

1. Run `npm install`
2. Replace the above `apiUrl` inside `src/app/Service/http-provider.service.ts`. Example : `http://localhost:3500/`
3. Run `ng serve` for a dev server

## User stories for backend:

- As a user, I want to be able to create a new record in the database using the API endpoint, so that I can add new contact to the application.
- As a user, I want to be able to read the existing records in the database using the API endpoint, so that I can view a contact in the application.
- As a user, I want to be able to update the existing records in the database using the API endpoint, so that I can modify a contact in the application.
- As a user, I want to be able to delete the existing records from the database using the API endpoint, so that I can remove a contact from the application.

## User stories for frontend:

- As a user, I want to be able to view a list of all contacts in the database.
- As a user, I want to be able to add a new contact to the database.
- As a user, I want to be able to edit an existing contact in the database.
- As a user, I want to be able to delete a contact from the database.
