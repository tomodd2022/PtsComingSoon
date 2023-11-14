import { Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './components/form-in-angular/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/form-in-angular/reactive-form/reactive-form.component';
import { ParentComponent } from './components/input-output/parent/parent.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateStatementComponent } from './components/template-syntax/template-statement/template-statement.component';
import { UnderstandingBindingComponent } from './components/template-syntax/understanding-binding/understanding-binding.component';

export const routes: Routes = [
    { path: 'template-driven-form',component: TemplateDrivenFormComponent },
    { path: 'reactive-form',component: ReactiveFormComponent },
    { path: 'input-output',component: ParentComponent },
    { path: 'pipe', component: PipeComponent},
    { path: 'template-statement', component: TemplateStatementComponent},
    { path: 'understanding-binding', component: UnderstandingBindingComponent }
];
