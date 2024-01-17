import { Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:"register-form",
        component:RegisterFormComponent
    },
    {
        path:"home",
        component:HomeComponent
    }
];
