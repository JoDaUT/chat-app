import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//material modules
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';

//components
import { UserCardComponent } from './components/user-card/user-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ChatSectionComponent } from './components/chat-section/chat-section.component';
import { ChatBubbleComponent } from './components/chat-bubble/chat-bubble.component';

//downloaded
import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { LoginComponent } from './pages/login/login.component';
import { ChatAppComponent } from './pages/chat-app/chat-app.component';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { AnswerCallModalComponent } from './components/answer-call-modal/answer-call-modal.component';
import { CallComponent } from './pages/call/call.component';
import { TimerPipe } from './pipes/timer.pipe';

//const config: SocketIoConfig = { url: 'http://localhost:3000/chat', options: {withCredentials: true} };

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    SidebarComponent,
    HeaderComponent,
    ChatSectionComponent,
    ChatBubbleComponent,
    LoginComponent,
    ChatAppComponent,
    AnswerCallModalComponent,
    CallComponent,
    TimerPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    NgxEmojiPickerModule.forRoot(),
    MatMenuModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    //AngularFirestoreModule
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
