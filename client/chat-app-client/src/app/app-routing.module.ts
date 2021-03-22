import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './pages/login/login.component'
import {ChatAppComponent} from './pages/chat-app/chat-app.component'

import { AngularFireAuthGuard, redirectUnauthorizedTo,redirectLoggedInTo} from '@angular/fire/auth-guard';
import { CallComponent } from './pages/call/call.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToChat = () => redirectLoggedInTo(['chat/',0]);

const routes: Routes = [
  {path:"", component:LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToChat }},
  {path:"login", redirectTo:'/LoginComponent', canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redirectLoggedInToChat}},
  {path:"chat/:stat", component:ChatAppComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path:"call", component:CallComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path:"**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
