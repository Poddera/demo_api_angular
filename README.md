# Demo_api_angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Requirements

The requiremnts to run the project are:

- At least NodeJS 12.20

```bash
# For Debian based distros
sudo apt install nodejs

# For Arch based distros
sudo pacman -S nodejs

# To check that node was sucesfully installed run
node -v
```

- Angular CLI 13.0.1

```bash
# To install angular CLI globally use
sudo npm install -g @angular/cli

# If you prefer to install it only for this project
cd ./demo_api_angular
npm install @angular/cli
```

Once both are installed, you need to run `npm install` in order to install the project dependencies. Then you can execute the development server as explained in the next section and access `http://localhost:4200` to see the landing page.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Use cases

The use cases that have been implemented in this app are discussed here

### Login

The user is able to login against a given endpoint. Once the user is logged in, `Angular Guards` are used to manage the access for the user to certain areas of the app
