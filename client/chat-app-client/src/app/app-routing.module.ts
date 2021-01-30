import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './pages/login/login.component'
import {ChatAppComponent} from './pages/chat-app/chat-app.component'

import { AngularFireAuthGuard, redirectUnauthorizedTo,redirectLoggedInTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToChat = () => redirectLoggedInTo(['chat']);

const routes: Routes = [
  {path:"", component:LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToChat }},
  {path:"login", redirectTo:'/LoginComponent', canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redirectLoggedInToChat}},
  {path:"chat", component:ChatAppComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path:"**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
