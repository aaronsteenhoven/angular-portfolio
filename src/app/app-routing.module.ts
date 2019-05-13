import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ProjectsComponent } from './projects/projects.component'
import { ExperienceComponent } from './experience/experience.component'
import { ContactComponent } from './contact/contact.component'


const routes: Routes = [
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent},
  { path: '/projects', component: ProjectsComponent},
  { path: '/experience', component: ExperienceComponent},
  { path: '/contact', component: ContactComponent},
  // { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
