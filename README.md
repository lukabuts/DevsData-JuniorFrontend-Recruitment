# Galaxy Chronicles

Galaxy Chronicles is a web application that explores the Star Wars universe. It provides detailed information on various aspects like characters, films, starships, vehicles, species, and planets. The app uses React, React Router, and React Query for data fetching.

## Prerequisites

Before running the project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (depending on which you prefer to use)

## Getting Started

Follow these steps to get the project running locally on your machine.

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone git@github.com:lukabuts/DevsData-JuniorFrontend-Recruitment.git
cd DevsData-JuniorFrontend-Recruitment
```

### 2. Install dependencies

Use npm or Yarn to install the necessary dependencies.

If you're using npm:

```bash
npm install
```

Or if you're using Yarn:

```bash
yarn install
```

### 3. Run the project locally

Start the development server using npm or Yarn:

If you're using npm:

```bash
npm run dev
```

If you're using Yarn:

```bash
yarn run dev
```

## Website Structure

The website is organized into several sections, each representing different parts of the Star Wars universe. Here's a breakdown of the main sections:

### 1. **Home Page (`/`)**

- The **Home** page is the landing page of the application. It provides an introduction to the website and serves as a starting point for users to navigate to different sections, including **People**, **Films**, **Starships**, **Vehicles**, **Species**, and **Planets**.

### 2. **People (`/people`)**

- The **People** page displays a list of characters from the Star Wars universe.
- **Pagination:** The list of people is paginated, displaying a limited number of characters per page.
- **Search:** Users can search for specific characters by name or other attributes.
- **Detailed View:** Each character has a detailed page with more information when clicked. For example, a user can click on a character's name to view their personal details, such as species, films they appear in, etc.

### 3. **Films (`/films`)**

- The **Films** page displays a list of Star Wars films.
- **Pagination:** Similar to the People page, the list of films is paginated.
- **Search:** Users can search for films by title.
- **Detailed View:** Clicking on a film title brings the user to a detailed page with information about the film, including cast, director, release date, and other details.

### 4. **Starships (`/starships`)**

- The **Starships** page displays a list of various starships from the Star Wars universe.
- **Pagination:** The starships are paginated to allow users to view them in smaller chunks.
- **Search:** Users can search for starships based on their names or other criteria.
- **Detailed View:** Each starship has a detailed page that provides more information, including its model, manufacturer, and crew capacity.

### 5. **Vehicles (`/vehicles`)**

- The **Vehicles** page shows a list of vehicles in the Star Wars universe.
- **Pagination:** Similar pagination functionality is provided for vehicles.
- **Search:** Users can search for vehicles by name or other properties.
- **Detailed View:** Clicking on a vehicle’s name leads to its detailed page, which includes specifications, crew capacity, and more.

### 6. **Species (`/species`)**

- The **Species** page lists the different species found in the Star Wars universe.
- **Pagination:** Species data is paginated to improve navigation.
- **Search:** Users can search species by name.
- **Detailed View:** Each species has a detailed page showing more information like homeworld, language, and population.

### 7. **Planets (`/planets`)**

- The **Planets** page displays a list of planets from the Star Wars universe.
- **Pagination:** Like other pages, planets are paginated for easy navigation.
- **Search:** Users can search for planets by name or other attributes.
- **Detailed View:** Clicking on a planet’s name brings up its detailed information, such as terrain, population, and climates.

---

## Features

- **Pagination:** All major pages have pagination to manage large sets of data, allowing users to view the data in chunks.
- **Search Functionality:** Users can search for specific entities (people, films, starships, vehicles, species, and planets) across various pages.
- **Detailed Views:** Each item (person, starship, etc.) has its own detailed page that provides more in-depth information when clicked.
- **Responsive Design:** The website is built to be responsive, ensuring that it works well on both desktop and mobile devices.

## Technologies Used

- **React:** For building the user interface.
- **React Router:** For navigation and handling route management.
- **React Query:** For managing data fetching and state.
- **React Helmet:** For managing meta tags and head elements in the document.
- **Tailwind CSS:** For styling the website.
- **TypeScript:** For type safety and improved development experience.
