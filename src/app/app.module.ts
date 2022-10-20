import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompteListComponent } from './compte-list/compte-list.component';
import { IndexComponent } from './index/index.component';
import { EditCompteComponent } from './edit-compte/edit-compte.component';
import { DeleteCompteComponent } from './delete-compte/delete-compte.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from '../_helpers/auth.interceptor';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { ServicesComponent } from './services/services.component';


@NgModule({

 imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule, FormsModule, NgxUsefulSwiperModule
  ],

  declarations: [
    AppComponent,
    CompteListComponent,
    EditCompteComponent,
    IndexComponent,
    DeleteCompteComponent,
    AddCompteComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    SlideShowComponent,
    ServicesComponent
    
  ],
 
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
