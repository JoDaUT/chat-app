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

//components
import { UserCardComponent } from './components/user-card/user-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ChatSectionComponent } from './components/chat-section/chat-section.component';
import { ChatBubbleComponent } from './components/chat-bubble/chat-bubble.component';

//downloaded
import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';
import { LoginComponent } from './pages/login/login.component';
import { ChatAppComponent } from './pages/chat-app/chat-app.component';

//firebase

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    SidebarComponent,
    HeaderComponent,
    ChatSectionComponent,
    ChatBubbleComponent,
    LoginComponent,
    ChatAppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    NgxEmojiPickerModule.forRoot(),
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
