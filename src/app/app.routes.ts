import { Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './components/form-in-angular/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/form-in-angular/reactive-form/reactive-form.component';

export const routes: Routes = [
    { path: 'template-driven-form',component: TemplateDrivenFormComponent },
    { path: 'reactive-form',component: ReactiveFormComponent }
];
