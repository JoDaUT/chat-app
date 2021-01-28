import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component'
import {ChatAppComponent} from './pages/chat-app/chat-app.component'
const routes: Routes = [
  {path:"login", redirectTo:'/LoginComponent'},
  {path:"chat", component:ChatAppComponent},
  {path:"**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
