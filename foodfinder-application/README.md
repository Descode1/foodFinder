# FoodFinder

FoodFinder is a full-stack web application that helps users discover food locations, view details, and manage a personal wishlist of places they want to try. Built with Next.js, MongoDB, GraphQL, and NextAuth, it provides a modern, authenticated experience for food enthusiasts.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [GraphQL API](#graphql-api)
- [Authentication](#authentication)
- [Data Model](#data-model)
- [Testing](#testing)
- [Contributing](#contributing)

---

## Features

- **Browse Locations:** View a list of food locations with cuisine and borough details.
- **Location Details:** See address, cuisine, grade, and more for each location.
- **Personal Wishlist:** Authenticated users can add or remove locations from their wishlist.
- **Authentication:** Sign in with GitHub using NextAuth.
- **GraphQL API:** Query and mutate data via a robust GraphQL endpoint.
- **Responsive UI:** Built with React and Next.js for a modern, fast experience.

---

## Tech Stack

- **Frontend:** Next.js (React, TypeScript)
- **Backend:** Node.js, Apollo Server (GraphQL)
- **Database:** MongoDB (via Mongoose)
- **Authentication:** NextAuth (GitHub provider)
- **Testing:** Jest, React Testing Library
- **Containerization:** Docker, Docker Compose

---

## Architecture

- **Monorepo:** All code is in `foodfinder-application/`.
- **API:** `/api/graphql` exposes a GraphQL endpoint for all data operations.
- **Authentication:** `/api/auth/[...nextauth].ts` handles user sign-in/out and session management.
- **Database:** MongoDB stores location and wishlist data.
- **UI:** Pages and components in `/pages` and `/components`.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/) (for local MongoDB)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd code/foodfinder-application
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in the required values (see [Environment Variables](#environment-variables)).
4. **Start MongoDB and the app (with Docker Compose):**
   ```bash
   docker-compose up
   ```
   - The app will be available at [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Create a `.env.local` file in the root of `foodfinder-application/` with the following:

```
MONGO_URI=mongodb://localhost:27017/foodfinder
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

---

## Usage

- **Browse:** Visit `/` to see all food locations.
- **Details:** Click a location to view its details.
- **Wishlist:** Sign in with GitHub to add/remove locations from your wishlist and view your personal list at `/list/[userId]`.

---

## GraphQL API

The GraphQL endpoint is at `/api/graphql`.

### Example Queries

#### Get All Locations

```graphql
query {
  allLocations {
    name
    cuisine
    borough
    grade
    address
    location_id
  }
}
```

#### Get User Wishlist

```graphql
query {
  onUserWishlist(user_id: "<userId>") {
    name
    location_id
  }
}
```

#### Add/Remove from Wishlist

```graphql
mutation {
  addWishlist(location_id: "<locationId>", user_id: "<userId>") {
    on_wishlist
  }
}

mutation {
  removeWishlist(location_id: "<locationId>", user_id: "<userId>") {
    on_wishlist
  }
}
```

---

## Authentication

- Uses [NextAuth](https://next-auth.js.org/) with GitHub as the provider.
- On first sign-in, a unique user ID is generated from the user's email hash.
- Session and JWT callbacks ensure the user ID is available in the session.

---

## Data Model

### Location

```
type Location {
  address: String
  street: String
  zipcode: String
  borough: String
  cuisine: String
  grade: String
  name: String
  on_wishlist: [String] // Array of user IDs
  location_id: String
}
```

- **Wishlist:** Each location has an `on_wishlist` array of user IDs who have added it.

---

## Testing

- **Jest** and **React Testing Library** are used for unit and snapshot tests.
- Run tests with:
  ```bash
  npm test
  # or
  npm run testWatch
  ```
- Example test: `__tests__/header.snapshot.test.tsx` ensures the header renders correctly for authenticated/unauthenticated users.

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- Built with [Next.js](https://nextjs.org/), [MongoDB](https://www.mongodb.com/), [Apollo GraphQL](https://www.apollographql.com/), and [NextAuth](https://next-auth.js.org/).
