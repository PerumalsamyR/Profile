import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { CoreModule } from '../app/core/core.module';


import { environment } from '../environments/environment';
import { AppService } from './app.service';
import { LoginService } from './login.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './blog/blog.component';
import { SummaryComponent } from './summary/summary.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfexpComponent } from './profexp/profexp.component';
import { EducationComponent } from './education/education.component';
import { ProjworkedComponent } from './projworked/projworked.component';
import { AwardsComponent } from './awards/awards.component';
import { PersonalComponent } from './personal/personal.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      { path: 'summary', component: SummaryComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'professional-experience', component: ProfexpComponent },
      { path: 'education', component: EducationComponent },
      { path: 'projects-worked', component: ProjworkedComponent },
      { path: 'awards-recognition', component: AwardsComponent },
      { path: 'certification', component: CertificatesComponent },
      { path: 'personalinfo', component: PersonalComponent }
    ]
  },
  {
    path: 'blog',
    component: BlogComponent,
    children: []
  },
  {
    path: 'login',
    component: LoginComponent,
    children: []
  },
  {
    path: 'signup',
    component: SignupComponent,
    children: []
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    BlogComponent,
    SummaryComponent,
    SkillsComponent,
    ProfexpComponent,
    EducationComponent,
    ProjworkedComponent,
    AwardsComponent,
    PersonalComponent,
    CertificatesComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    CoreModule,
    FormsModule
  ],
  providers: [AppService, LoginService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
