# Portfolio App Web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## Development local server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build and deploy with Docker

### Prerequisites

#### Portfolio App Api

The application consume services from Portfolio App Api that are not deployed with the following commands. Portfolio App Api is management under a separate project,
[portfolio-app-api](https://github.com/williamlema/portfolio-app-api). You will find instructions for starting the api

#### Docker

Docker and Docker Compose are used to build and deploy this application,.

Installation instructions for Docker can be found on its [Get Started](https://docs.docker.com/get-started/) page.

If your installation of Docker did not come with Docker Compose, you can follow its
[install instructions](https://docs.docker.com/compose/install/).

### Running

To start the Portfolio App Web run the following command:

```
$ docker-compose up
```

if you apply any change over code run the following commands to refresh image and container:

```
$ docker-compose build
$ docker-compose up
```

the application will run over http://localhost:80/   
