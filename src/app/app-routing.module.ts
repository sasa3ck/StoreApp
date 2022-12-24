import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ExternalListComponent } from './pages/external-list/external-list.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { HomeComponent } from './pages/home/home.component';
import { InternalListComponent } from './pages/internal-list/internal-list.component';
import { LogRegComponent } from './pages/log-reg/log-reg.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'section', component: SectionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'intList', component: InternalListComponent },
  { path: 'extList', component: ExternalListComponent },
  { path: 'galery', component: GaleryComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'login', component: LogRegComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
