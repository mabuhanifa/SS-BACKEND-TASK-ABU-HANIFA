# Node Express MongoDB API with Authentication and Authorization

Welcome to MY Project! This is a brief guide to help you get started with the development environment and understand the security implementations in the project.

## Getting Started

To get started with the project, you have two options:

### Option 1: Test the Deployed API

You can test the deployed API directly from Postman by using the following URL:

```bash
https://amused-galoshes-lion.cyclic.app/
```

Please make sure you have Postman installed on your machine. You can send requests to the provided URL to interact with the API endpoints.

### Option 2: Run the App Locally

To run the app on your local machine, follow these steps:

### Prerequisites

- Node.js
- npm (Node Package Manager)
- nodemon to run the dev server

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mabuhanifa/SS-BACKEND-TASK-ABU-HANIFA
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Starting the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

The server will start running at `http://localhost:3000`.

## Routes

The project includes the following API routes:

### To test admin specific CRUD operation use this username & password

```bash
   username: admin,
   password: '123456'
```

### Register a User

- URL: `/api/register`
- Method: `POST`
- Required Authorization: None
- Description: Register a new user.
- Request Body:
  - `username`: (string) User's username.
  - `password`: (string) User's password.

### Login

- URL: `/api/login`
- Method: `POST`
- Required Authorization: None
- Description: Authenticate and log in a user.
- Request Body:
  - `username`: (string) User's username.
  - `password`: (string) User's password.

### Create a Movie

- URL: `/api/movies`
- Method: `POST`
- Required Authorization: cookies with JWT token by admin user
- Description: Create a new movie.
- Request Body: (JSON object representing the movie)

### Get All Movies

- URL: `/api/movies`
- Method: `GET`
- Required Authorization: none
- Description: Get all movies.

### Get a Single Movie by ID

- URL: `/api/movies/:id`
- Method: `GET`
- Required Authorization: None
- Description: Get a single movie by its ID.

### Delete a Single Movie by ID

- URL: `/api/movies/:id`
- Method: `DELETE`
- Required Authorization: cookies with JWT token by admin user
- Description: Delete a single movie by its ID.

### Update a Single Movie by ID

- URL: `/api/movies/:id`
- Method: `PATCH`
- Required Authorization: cookies with JWT token by admin user
- Description: Update a single movie by its ID.

## Security Implementations

In this project, I have implemented the following security measures:

1. **Input Validation**: All user inputs are properly validated and required data are needed to perform CRUD operation

2. **Authentication**: The project includes authentication system using industry-standard practices such as password hashing and salting, along with jwt cookies.

3. **Authorization**: Role-based access control (RBAC) is implemented to restrict access to certain routes or functionalities based on the user's role.

4. **Error Handling**: Proper error handling is implemented throughout the project and provide appropriate error messages to the users.

## Contributing

We welcome contributions from the community! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

---

Feel free to customize the README file according to your project's specific requirements and add any additional sections or information as needed.

Some Demo Movies JSON for testing:

```json
{
  "name": "The Lion King",
  "actors": ["Donald Glover", "Beyoncé", "James Earl Jones"],
  "crew": ["Jon Favreau"],
  "runtime": 118,
  "directors": ["Jon Favreau"],
  "producers": ["Jon Favreau", "Karen Gilchrist"]
},
{
  "name": "Gone with the Wind",
  "actors": ["Clark Gable", "Vivien Leigh", "Thomas Mitchell"],
  "crew": ["Victor Fleming"],
  "runtime": 238,
  "directors": ["Victor Fleming"],
  "producers": ["David O. Selznick"]
},
{
  "name": "Avatar",
  "actors": ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
  "crew": ["James Cameron"],
  "runtime": 162,
  "directors": ["James Cameron"],
  "producers": ["James Cameron", "Jon Landau"]
},
{
  "name": "Titanic",
  "actors": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
  "crew": ["James Cameron"],
  "runtime": 194,
  "directors": ["James Cameron"],
  "producers": ["James Cameron", "Jon Landau"]
},
{
  "name": "The Revenant",
  "actors": ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"],
  "crew": ["Alejandro González Iñárritu"],
  "runtime": 156,
  "directors": ["Alejandro González Iñárritu"],
  "producers": ["Alejandro González Iñárritu", "Arnon Milchan", "Steve Golin", "Mary Parent", "Keith Redmon"]
}
```
