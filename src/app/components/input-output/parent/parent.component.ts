import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { IDataCalculate  } from '../input-output.model';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule,ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  result!: number;
  data!: IDataCalculate;

  number1: number = 2;

  getDataCalculate(data: IDataCalculate){
   this.data = data;
   this.calculate();
  }

  calculate(){
    switch (this.data.operator) {
      case '+' :
        this.result = parseInt(String(this.data.num1)) + parseInt(String(this.data.num2));
        break;
      case '-' :
        this.result = parseInt(String(this.data.num1)) - parseInt(String(this.data.num2));
        break;
      case '*' :
        this.result = parseInt(String(this.data.num1)) * parseInt(String(this.data.num2));
        break;
      case '%' :
        this.result = parseInt(String(this.data.num1)) / parseInt(String(this.data.num2));
        break;
      default :
    }
  }
  

}