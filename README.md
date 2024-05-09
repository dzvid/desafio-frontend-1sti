<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/dzvid/desafio-frontend-1sti">
    <img src="images/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Weather App</h3>

  <p align="center">
    Need to check the current weather in some city? Ok, I can help you!
    <br />
    <a href="https://github.com/dzvid/desafio-frontend-1sti"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://dzvid-weather-app.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/dzvid/desafio-frontend-1sti/issues">Report Bug</a>
    ·
    <a href="https://github.com/dzvid/desafio-frontend-1sti/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

**WEB:**

[![Weather app][product-screenshot-desktop-1]](https://dzvid-weather-app.netlify.app/)

[![Weather app][product-screenshot-desktop-2]](https://dzvid-weather-app.netlify.app/)

**MOBILE:**

[![Weather app][product-screenshot-mobile-1]](https://dzvid-weather-app.netlify.app/)

[![Weather app][product-screenshot-mobile-2]](https://dzvid-weather-app.netlify.app/)

This application allows a user to:

- Search informations about the weather of a given city, returning the following informations:
  - Current temperature;
  - Weather conditions;
  - Maximum and minimum temperature for the day;
  - Apparent/"Feels Like" temperature;
  - Wind speed;
  - Relative humidity;
  - Five days temperature forecast for the current city (4 days in mobile mode);
- Show the maximum and minimum temperature for the capitals in Brazil (due to the API's limitations only 4 capitals were listed).

### Built With

Main libraries and CLI tools used to built the project:

- [Axios](https://github.com/axios/axios)
- [Create react app](https://github.com/facebook/create-react-app)
- [Date-fns](https://github.com/date-fns/date-fns)
- [React](https://github.com/facebook/react)
- [React icons](https://github.com/react-icons/react-icons)
- [Styled components](https://github.com/styled-components/styled-components)

To manage the code style and formatting:

- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [EditorConfig](https://editorconfig.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

Install NodeJS:

- [node](https://nodejs.org/en/)

Install a package manager:

- [yarn](https://classic.yarnpkg.com/lang/en/): Yarn 1.x (classic) was used in this project.

or

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Create an account and get a free API Key at [https://www.weatherbit.io/](https://www.weatherbit.io/)

2. Clone the repository:

```sh
Using ssh:
git clone git@github.com:dzvid/desafio-frontend-1sti.git

Or using https:
git clone https://github.com/dzvid/desafio-frontend-1sti.git
```

3. Install the project dependencies:

```sh
cd desafio-frontend-1sti

yarn
```

or using npm:

```sh
cd desafio-frontend-1sti

npm install
```

4. Enter your API key in `src/services/api.js` file:

```JS
config.params.key = '';
```

PS: The current value in the code is for my free account. I dont have a problem exposing the API key because it uses the free service which is limited to 500 requests/day and is intended for hobby/testing purposes. If you want to build this using a paid API key, it is necessary to hide the API key value, one approach can be making the requests to the weather API through a backend service.

Also I have not used environment variables to store the API key because it is just a simple project (KISS principle).

5. You are done with configuration and ready to code! (I hope so :tada:).

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- ROADMAP -->

<!-- ## Roadmap

See the [open issues](https://github.com/dzvid/desafio-frontend-1sti/issues) for a list of proposed features (and known issues). -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

David Oliveira - oliveiradavid.dev@gmail.com

Project Link: [https://github.com/dzvid/desafio-frontend-1sti](https://github.com/dzvid/desafio-frontend-1sti)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io)
- [Icons for free](https://icons-for-free.com/)
- [1STI challenge description](https://github.com/1STi/desafio-frontend/): If it is not accessible, theres a copy in the [README.orig.md](README.orig.md) file.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/dzvid/desafio-frontend-1sti.svg?style=flat-square
[contributors-url]: https://github.com/dzvid/desafio-frontend-1sti/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dzvid/desafio-frontend-1sti.svg?style=flat-square
[forks-url]: https://github.com/dzvid/desafio-frontend-1sti/network/members
[stars-shield]: https://img.shields.io/github/stars/dzvid/desafio-frontend-1sti.svg?style=flat-square
[stars-url]: https://github.com/dzvid/desafio-frontend-1sti/stargazers
[issues-shield]: https://img.shields.io/github/issues/dzvid/desafio-frontend-1sti.svg?style=flat-square
[issues-url]: https://github.com/dzvid/desafio-frontend-1sti/issues
[license-shield]: https://img.shields.io/github/license/dzvid/desafio-frontend-1sti.svg?style=flat-square
[license-url]: https://github.com/dzvid/desafio-frontend-1sti/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/dzvid
[product-screenshot-desktop-1]: images/preview-desktop-1.png
[product-screenshot-desktop-2]: images/preview-desktop-2.png
[product-screenshot-mobile-1]: images/preview-mobile-1.png
[product-screenshot-mobile-2]: images/preview-mobile-2.png
