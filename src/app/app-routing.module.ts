import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'myProfileFeed', component: MyProfileFeedComponent},
  {path: 'profileAccountSetting', component: ProfileAccountSettingComponent},
  {path: 'profiles', component: ProfilesComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'userProfile', component: UserProfileComponent},
  {path: 'login', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
