import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DownloadComponent } from './download/download.component';
import { ApplicationComponent } from './application/application.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContentComponent } from './content/content.component';
import { DriversComponent } from './drivers/drivers.component';
import { CareerComponent } from './career/career.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DownloadComponent,
    ApplicationComponent,
    AboutComponent,
    BlogComponent,
    ContentComponent,
    DriversComponent,
    CareerComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    NgxSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'download', component: DownloadComponent },
      { path: 'application', component: ApplicationComponent },
      { path: 'about', component: AboutComponent },
      { path: 'content', component: ContentComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'drivers', component: DriversComponent },
      { path: 'career', component: CareerComponent }
    ])
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
