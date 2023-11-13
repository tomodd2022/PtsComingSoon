import { Component, Directive, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IDataCalculate } from '../input-output.model';
import { FormsModule } from '@angular/forms';
import { NumericOnlyDirective } from '../../directive/numeric-only.directive';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule,FormsModule,NumericOnlyDirective],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Output() eventDataCalculate: EventEmitter<IDataCalculate> = new EventEmitter<IDataCalculate>();
  
  data: IDataCalculate = {
    num1: 0,
    num2: 0,
    operator: ''
  };
  
  num1!: number;
  num2!: number;

  calculate(operator: string){
    this.data.num1 = this.num1; 
    this.data.num2 = this.num2;
    this.data.operator = operator;
    
    this.eventDataCalculate.emit(this.data);
  }
  
}