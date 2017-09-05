import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppService } from './app.service';
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
      { path: 'certification ', component: CertificatesComponent },
      { path: 'personalinfo', component: PersonalComponent }
    ]
  },
  { path: 'blog', component: BlogComponent }
];
const firebaseConfig = {

};

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
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
