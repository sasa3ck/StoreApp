import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { InternalListComponent } from './pages/internal-list/internal-list.component';
import { ExternalListComponent } from './pages/external-list/external-list.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { LogRegComponent } from './pages/log-reg/log-reg.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonListComponent } from './components/json-list/json-list.component';
import { FakeListComponent } from './components/fake-list/fake-list.component';
import { LocalListComponent } from './components/local-list/local-list.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { CreateFakeItemComponent } from './components/create-fake-item/create-fake-item.component';
import { ModalComponent } from './components/modal/modal.component';
import { FocusDirective } from './directives/focus.directive';
import { GaleryCarouselComponent } from './components/galery-carousel/galery-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    InternalListComponent,
    ExternalListComponent,
    GaleryComponent,
    LogRegComponent,
    JsonListComponent,
    FakeListComponent,
    LocalListComponent,
    GlobalErrorComponent,
    FilterPipe,
    CreateFakeItemComponent,
    ModalComponent,
    FocusDirective,
    GaleryCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
