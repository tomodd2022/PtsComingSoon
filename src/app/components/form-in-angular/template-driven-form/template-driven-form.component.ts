import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  name: string = '';
  setValue() {
    this.name = 'Nancy';
  }
}
