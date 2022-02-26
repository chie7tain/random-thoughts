# MeanCourse

#learnings
there are several ways to do template binding in angular

- two way binding e.g [(ngModel)]="name"
- one way binding e.g [value]="name"
- string interpolation e.g {{name}}
- property binding e.g [style.color] = "name"
- event binding e.g (click)="function to execute" (keyup)="function to execute"

how do you pass data from one component to another? how do you pass data around in a larger application? instead of using property(one way and two way) and event binding ? and centralize tasks ?
- we use a service and inject it into the component we want to use it in
now in order to use a service we would name a file using the .service.ts extension and call the Injectable({"providedIn":"root"}) decorator so that the service can be available to the entire application otherwise we would have to import the service into the app.module.ts file and then pass it into the providers array so that the angular would be aware of it
 - subsequently, in order to use the service as a dependency of a component we would inject it into the component by creating passing it into a constructor and using the public keyword before the parameter name so that the it would be made into a property of the component and then we would use the property name to access the service in the component

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
