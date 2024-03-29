// app.module.ts - Indicatinf this is a TypeScript file.
// Essentially provides strong Type checking

// Importing core modules of Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Whenever CLI is used to generate new components and services, it
// will automatically update this file to import and add them here 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Further using @NgModule decorator we provide additional metadata to
// specify the components, the Services, the imports, etc.. Further
// Decorators are used while processing, instantiation and at runtime
@NgModule({

  // Components are added here. Essentially the classes that has views,
  // they are components, directives and pipes
  declarations: [
    AppComponent
  ],

  // various imports needed for application can be added here.
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  // Typically services like http-services are added to providers
  providers: [],
  // The root component which is the main view of the application. Onli the
  // root module has this property and it indicates the component that's
  // gonna be bootstrapped.
  bootstrap: [AppComponent]
})
export class AppModule { }
