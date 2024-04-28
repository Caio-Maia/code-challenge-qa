<div  style="text-align:center; margin-left:auto; margin-right:auto; position: center; width: 60%; padding:14px; background: linear-gradient(to top, #041146, black);">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 163 30" aria-hidden="true" class="h-7 text-white shrink-0 select-none outline-none" focusable="false" tabindex="-1"><path fill="currentColor" fill-rule="evenodd" d="M110.257 22.28q-3.556 0-3.586-2.288h-1.622v.094q0 1.584 1.373 2.614 1.354 1.01 3.892 1.01 2.46 0 3.663-1.125 1.22-1.144 1.22-2.518 0-1.221-.839-2.022-.839-.82-2.69-.954l-3.128-.229q-1.812-.153-1.813-1.373 0-.954.859-1.546.877-.61 2.308-.61 1.545 0 2.289.572c.484.382.768.853.822 1.455h1.695q-.039-1.527-1.162-2.485-1.164-.992-3.663-.992-2.346 0-3.605 1.088-1.26 1.086-1.259 2.537 0 2.575 3.338 2.804l3.186.229q1.946.153 1.946 1.526 0 .992-.783 1.602-.782.61-2.441.61m10.737-10.206v11.465h-1.717V12.074zm41.224 11.465V12.074h-1.717v11.465zM99.293 12.093l.076 6.105q.02 2.022-1.03 3.071-1.03 1.03-2.938 1.03-1.89 0-2.919-1.03t-1.03-3.052v-6.123h-1.717v6.123q0 2.728 1.507 4.12 1.508 1.393 4.12 1.393 2.634 0 4.14-1.392 1.507-1.393 1.507-4.12v-6.124zm35.6 4.09h1.737q-.045-1.633-1.448-2.926-1.45-1.335-4.006-1.335-2.614 0-4.293 1.602-1.697 1.603-1.697 4.312t1.678 4.31q1.66 1.584 4.293 1.584 2.517 0 3.967-1.201 1.487-1.22 1.488-2.99h-1.683l-.014.166q-.115 1.164-1.088 1.889-.992.725-2.651.725-1.889 0-3.091-1.202t-1.202-3.243q0-2.06 1.202-3.262t3.091-1.202q1.679 0 2.651.801.98.791 1.066 1.972m15.862-4.09h.683l5.794 11.446h-1.789l-1.163-2.365h-6.368l-1.163 2.365h-1.789zm2.781 7.63-1.526-3.051q-.381-.744-.859-2.099h-.11q-.477 1.355-.859 2.099l-1.526 3.052zm-74.938-.228h.076l5.191-7.402h1.276v11.465h-1.717V15.07h-.057l-.076.172q-.116.285-.248.515a3.5 3.5 0 0 1-.363.572L78.636 22.1l-4.044-5.772a3.5 3.5 0 0 1-.363-.572 4 4 0 0 1-.248-.515l-.076-.172h-.057v8.49H72.13V12.092h1.276zm62.237 4.235a1.007 1.007 0 1 0 .001-2.015 1.007 1.007 0 0 0-.001 2.015" clip-rule="evenodd"></path><path fill="currentColor" d="M20.072 0 18.25 5.85h3.645L29.41 30h10.733L31.744 3.017A4.29 4.29 0 0 0 27.644 0zM18.25 5.85h-7.576a4.29 4.29 0 0 0-4.1 3.018L0 30h10.734zM48.3 30 40.788 5.85h7.573a4.29 4.29 0 0 1 4.1 3.018L59.034 30z"></path></svg>
</div>

<p align="center">
  <a href="#-automation">🚀Automation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-stack">🛠️ Stack</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project-structure">🏗️ Project structure</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-roadmap">🗹 Roadmap</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-execution">▶️ Execution</a>
</p> 

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/-Cypress-242424?style=for-the-badge&logo=cypress&logoColor=white">
  <img alt="License" src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img alt="License" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img alt="License" src="https://img.shields.io/badge/npm-10.5.0-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  <img alt="License" src="https://img.shields.io/badge/Jenkins-D33833?style=for-the-badge&logo=jenkins&logoColor=white">
</p>


## 🚀 Automation
<p>The goal of this project is to automate the tests in Moises, as part of the proposed technical challenge. </p>

## 🛠️ Stack

This project was created using these technologies.

|            /               | Technologies |
|:---------------:          |  :------: |
|[Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)|[Node](https://nodejs.org/en)|
|[Cypress](https://docs.cypress.io/guides/overview/why-cypress)|[Jenkins](https://www.jenkins.io/)

## 🏗️ Project structure

- ### **cypress**
    - **/e2e**
         This directory contains end-to-end (e2e) test scripts written using Cypress.
        - **/features**
         This folder presents test scenarios, all divided into folders representing pages from our application.
    - **/fixtures**
         The fixtures directory contains static data files that are used as input by test scripts to simulate various scenarios and test cases.
    - **/support**
        This directory contains supporting files and utilities that assist in test execution and setup.
        - **/assets**
            This subdirectory might store additional assets such as images, videos, or other multimedia files used in tests.
        - **/utils**
            The utils folder contains utility functions or helper methods that provide common functionalities or reusable code snippets to test automation development.

## 🗹 Roadmap

**:hourglass: Increase test coverage
:heavy_check_mark: Save screenshots of errors
:hourglass: Integrate Pipeline with Slack to report on running tests
:hourglass: Integration with Percy to visual regression tests**

## ▶️ Execution

- **Clone the Project:** Start by cloning the Cypress project repository.
    ``git clone ``
</br>

#### :point_up: Note: Create an archive named cypress.env.json in the root folder of the application access:
(Since this project is just a challenge, I didn't put the file in .gitignore, so you don't need to do this step, this was just done to show the correct pattern of not saving sensitive data in git.)
```bash
 {
    "email":"test@test.com",
    "password": "123456"
 }
```
(Note that this is just an example access, if you want the real one you need to talk to one of the QA.)

- **Install Dependencies:** Navigate to the project directory and install the required dependencies using npm
    ``npm install``
</br>
- **Running:** Now you can simply open Cypress Test Runner and select witch test case you want:
    ``npm run cy:open``
- Or you can run the tests using Cypress CLI:
    ``npm run cy:run``
</br>
- **View Test Results:** After the tests are complete, Cypress will display the test results in the terminal/console, including the number of passed, failed, and pending tests
