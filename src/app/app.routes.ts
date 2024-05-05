import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path:'login', component: LoginComponent },
    { path:'home', component: HomeComponent },
    { path:'register', component: RegisterComponent},
    { path:'**', component: PageNotFoundComponent}
];
