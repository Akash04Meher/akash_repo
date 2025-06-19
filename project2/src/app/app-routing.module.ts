import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';


const routes: Routes =
[
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'teams', component: TeamComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: 'home' } // fallback
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
