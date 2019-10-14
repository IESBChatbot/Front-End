import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { AlunoOnlineComponent } from './aluno-online/aluno-online/aluno-online.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'aluno-online', component: AlunoOnlineComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
