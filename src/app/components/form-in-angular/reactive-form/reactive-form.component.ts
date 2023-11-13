import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  constructor(
    private fb: FormBuilder
  ){
  } 
  
  //ตัวอย่างการใช้ FormControl
  fname = new FormControl(''); // สร้าง FormControl ที่ชื่อ fname และกำหนดค่าเริ่มต้นของ FormControl เป็นสตริงว่าง

  //ตัวอย่างการใช้ FormGroup
  registerForm = new FormGroup({
    fname1 : new FormControl(''),
    lname2: new FormControl('')
  })

  //ตัวอย่างการใช้งาน FormBuilder
  registerForm1 = this.fb.group({
    fname11: [''],
    lname22: ['']
  })

  /** integer แบบห้ามมีเครื่องหมายติดลบ */
  public int_unsign = '[0-9]{1,10}';

  //ตัวอย่างการใช้งาน Validate หลังกดปุ่ม Summit
  registerForm2 = this.fb.group({
    fname111: ['', [Validators.required, Validators.pattern(this.int_unsign)]],
    lname222: ['']
  })  

  onSubmit() {
    console.warn(this.registerForm2.valid); // ตรวจสอบ validate ใน form 
  }
}
