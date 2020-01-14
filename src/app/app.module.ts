import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseComponent } from './course/course.component';
import {
  MatGridListModule,
  MatChipsModule,
  MatListModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatInputModule,
} from '@angular/material';
import { FeeComponent } from './fee/fee.component';
import { HomeComponent } from './home/home.component';
import { EmailComponent } from './email/email.component';
// import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FeeComponent,
    HomeComponent,
    EmailComponent,
    PageNotFoundComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule, MatIconModule, MatButtonModule, MatChipsModule,
    MatGridListModule, MatMenuModule, MatInputModule,
    HttpClientModule, FormsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
