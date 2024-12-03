import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TipsComponent } from './tips/tips.component';
import { GoalsComponent } from './goals/goals.component';
import { SupportComponent } from './support/support.component';
import { LoginComponent } from './login/login.component';  // Importa el componente de Login

const routes: Routes = [
  // Ruta para redirigir al login por defecto
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Ruta para el Login
  { path: 'login', component: LoginComponent },

  // Rutas con animaciones y datos adicionales
  { path: 'dashboard', component: DashboardComponent, data: { animation: 'DashboardPage' } },
  { path: 'tips', component: TipsComponent, data: { animation: 'TipsPage' } },
  { path: 'goals', component: GoalsComponent, data: { animation: 'GoalsPage' } },
  { path: 'support', component: SupportComponent, data: { animation: 'SupportPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
