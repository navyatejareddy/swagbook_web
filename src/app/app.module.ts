import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { JobsComponent } from './jobs/jobs.component';
import { MessagesComponent } from './messages/messages.component';
import { MyProfileFeedComponent } from './my-profile-feed/my-profile-feed.component';
import { ProfileAccountSettingComponent } from './profile-account-setting/profile-account-setting.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
// used to create fake backend
import { AlertComponent } from '../app/shared/_components/alert.component';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from '../app/shared/_helpers';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterLayoutComponent,
    HeaderNavComponent,
    HomeComponent,
    CompaniesComponent,
    JobsComponent,
    MessagesComponent,
    MyProfileFeedComponent,
    ProfileAccountSettingComponent,
    ProfilesComponent,
    ProjectsComponent,
    UserProfileComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
