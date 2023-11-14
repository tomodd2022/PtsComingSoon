import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-statement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-statement.component.html',
  styleUrl: './template-statement.component.scss'
})
export class TemplateStatementComponent {
  deleteHero(){
    alert('ssksksk');
  }
}
