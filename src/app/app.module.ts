import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Importa BrowserAnimationsModule
import { ReactiveFormsModule } from '@angular/forms'; // Importamos ReactiveFormsModule
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TipsComponent } from './tips/tips.component';
import { GoalsComponent } from './goals/goals.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TipsComponent,
    GoalsComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Agregamos BrowserAnimationsModule aquí para habilitar animaciones
    ReactiveFormsModule, // Agregamos ReactiveFormsModule aquí
    FormsModule, // Añadimos FormsModule para trabajar con ngModel en formularios
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
