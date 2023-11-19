# Contact Book

Contact Book is a user-friendly application that allows users to register, login, and manage their contacts with ease. The application provides features such as adding, editing, and deleting contacts, as well as marking contacts as favorites. The application supports Google OAuth for user authentication. Users can also perform actions like sending recovery emails and changing passwords. The project is built using React, Redux, and other libraries for efficient state management and UI design.

## Table of Contents

- [Website content](#website-content)
- [Deploy](#deploy)
- [Installation](#installation)
- [Configuration](#configuration)
- [Technology stack](#technology-stack)
- [Contributing](#contributing)

## Website content

### Home Page

The Home Page is the landing page of the application, providing information about Contact Book's features and encourages users to get started with managing their contacts. It includes images and social media links, at the top of the page user can find a header with 2 links leading to the login and registration pages.

![Homepage](./src/assets/home-page.jpg)

### Registration Page

Registration page contains user registration form with all the validation necessery. During sign up process you should indicate your username, email, and password. After the registration user should verify given email via recived letter. The link in the letter redirects user to the app login page.

![Registration page](./src/assets/registration-page.jpg)

![Verification letter](./src/assets/verification-email.jpg)

### Login Page

Login process includes user check via given password and email.

After a successfull sign up, greeting notification appears at the top right corner. Near the username you can find a logout button allowing to sign out.

![Login page](./src/assets/login-page.jpg)

### Contacts Page

The Contacts Page displays the user's contacts, allows adding new contacts, and provides a search functionality.

![Contacts page](./src/assets/contact-page.jpg)

### Recovery Page

The Recovery Page allows users to reset their passwords, using a token received via email, and by entering a new password and confirming it.

![Recovery email](./src/assets/recovery-email.jpg)

![Recovery page](./src/assets/recovery-page.jpg)

### Not Found Page

The Not Found Page renders a custom 404 error page when a user navigates to a non-existent page. It includes an astronaut image and provides a link to return to the home page.

![Not Found page](./src/assets/404-page.jpg)

## Deploy

The frontend part of the web-app is deployed on vercel platform.
[Live version of the app](https://contact-book-app-frontend.vercel.app) is avaliable by the web-address

```javascript
"https://contact-book-app-frontend.vercel.app";
```

## Installation

To run this project locally, follow these steps:

1.  Clone the repository:

```bash
  git clone  https://github.com/nastiaknik/contact-book-app-frontend.git
```

2.  Install dependencies:

```bash
  npm install
```

3.  Start the development server:

```bash
  npm start
```

This will start the application and you can view it in your browser at http://localhost:3000.

## Configuration

The application uses environment variables for configuration.
Create a .env file in the root directory with the following variables:

```bash
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
```

## Technology stack

The key dependencies used in the project are:

- React: JavaScript library for building user interfaces.
- Redux: State management for predictable and scalable applications.
- Chakra UI: Building accessible and customizable UI components.
- React Toastify: Providing user feedback through notifications.
- Yup: Validating form inputs using schema validation.
- Typescript: Introducing static typing for enhanced code reliability.
- Styled Components: Styling library for React components.
- React Icons: Library for high-quality, customizable icons.
- Axios: HTTP client for making API requests.
- Formik: Library for handling forms.
- Google OAuth2: Google authentication.
- Vercel: Platform for deploying the frontend part of the web app.

<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" /></code>
<code><img height="50" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/typescript-icon.svg" alt="TypeScript" title="TypeScript" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" title="Redux" /></code>
<code><img height="50" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="styled-components" title="styled-components" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="REST" title="REST" /></code>
<code><img height="50" src="https://avatars.githubusercontent.com/u/32372333?s=48&v=4" alt="axios" title="axios" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code" /></code>
<code><img height="50" src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Oauth 2" title="Oauth 2" /></code>

## Contributing

If you have any suggestions, bug reports, or feature requests, please feel free to open an issue or create a pull request.
