import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AllTodosPage } from "../pages/all-todos/all-todos";
import { OneTodoPage } from "../pages/one-todo/one-todo";
import { AddTodoPage } from "../pages/add-todo/add-todo";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AllTodosPage,
    OneTodoPage,
    AddTodoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AllTodosPage,
    OneTodoPage,
    AddTodoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
