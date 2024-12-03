import { Component } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
})
export class GoalsComponent {
  goals: string[] = ['Beber 2 litros de agua al día', 'Caminar 10,000 pasos'];
  newPersonalGoal: string = ''; // Definimos la propiedad

  addGoal() {
    if (this.newPersonalGoal.trim()) {
      this.goals.push(this.newPersonalGoal);
      this.newPersonalGoal = ''; // Limpiar el campo de entrada
    }
  }

  removeGoal(goal: string) {
    this.goals = this.goals.filter((g) => g !== goal);
  }
}
