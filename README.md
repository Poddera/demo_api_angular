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

## Project Structure

In order to mantain ordered the project, the following organization plan has been followed. 

First of all, in our project, inside the `/src` folder we have other 3 folders
```
/src
  |_ /app
  |_ /assets
  |_ /enviroments
```

The `/app` folder is the one that stores the code base. `/assets` and `/enviroments` are not going to be used at the moment.

Now, inside of app folder, we are going to organize our app in modules as it's recomended in the [Angular documentation](https://angular.io/guide/architecture-modules).

The structure of a module, is to have some kind of "index" file, named usually as the current folder that stores de module, in this case, it's called `app.module.ts`, this file acts as an index to logically organize the app, because here the components of this modules are declared.

The folders that we can find inside of our `/app` folder are

```
/app
  |_ /components
  |_ /routes
  |_ /services
```

There can be more folders inside here, like there are in the `/auth` module, like `/guards`, `/directives`, `/dtos`, etc. The idea is that we store the clearly distinguished "parts" of an angular app as "high as we can" in order to restrinct the access locally.

The only folder that has a little peculiarity, is the components folder, here we always are going to store the main component of the module and its files, and also the other __components and modules__ of the module.

If we look inside the components folder, at the moment we have the following

```
/components
  |_ /auth
  |_ /home
  |_ app.components.css
  |_ app.components.html
  |_ app.components.ts
```

Here, `/auth` and `/home` are modules, and the other files, are the main component of the module, this component normally is the one that is going to load the other components stored in the other modules.

At this point you probably are able to see the recursive pattern of this structure, in this way we can have a quick mental map of how the app is organized.

To make it more clear even, if we look at the `/auth` module, we can see the following structure.

```
/auth
  |_ /components
  |_ /guards
  |_ /routes
  |_ auth.module.ts
```

A reasonable question, is when we should create a module and we should just create a component, if we look in `/auth/components`, we can see that we have a component called login, that this time isn't a module.

```
/auth/components
  |_ /login
  |_ auth.component.css
  |_ auth.component.html
  |_ auth.component.ts
```

In this case, the login folder isn't a module, is a component. Why? It's pretty simple, the login component doesn't need other children components in order to work. You can see components as the leaves of a N-ary tree and the modules as the other nodes that holds other nodes and leaves.  

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
