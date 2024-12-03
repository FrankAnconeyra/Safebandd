import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    lastLogin: new Date().toLocaleString()
  };

  healthData = {
    heartRate: '72 bpm',
    oxygenSaturation: '98%',
    temperature: '36.5°C'
  };

  constructor(private router: Router) {}

  logout(): void {
    // Redirige al usuario al inicio de sesión al cerrar sesión
    this.router.navigate(['/login']);
  }
}
