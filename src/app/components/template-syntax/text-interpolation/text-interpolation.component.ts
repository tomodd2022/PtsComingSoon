import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-interpolation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-interpolation.component.html',
  styleUrl: './text-interpolation.component.scss'
})
export class TextInterpolationComponent {
  currentCustomer = 'Maria';
  title = 'Featured product:';
  recommended = 'You might also like:';
}