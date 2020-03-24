import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from './services/message.service';
=======

>>>>>>> 52ae5b67a6a95fe6414fa83d96b4fbca6384de08
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
<<<<<<< HEAD
  MatButtonModule,
  MatMenuModule,
  MatInputModule,
  MatDialog,
  MatDialogModule,
} from '@angular/material';
import { FeeComponent } from './fee/fee.component';
import { HomeComponent } from './home/home.component';
import { EmailComponent, DialogOverviewExampleDialog } from './email/email.component';
// import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  entryComponents: [DialogOverviewExampleDialog],
=======
  MatButtonModule
} from '@angular/material';
import { FeeComponent } from './fee/fee.component';
import { HomeComponent } from './home/home.component';

@NgModule({
>>>>>>> 52ae5b67a6a95fe6414fa83d96b4fbca6384de08
  declarations: [
    AppComponent,
    CourseComponent,
    FeeComponent,
<<<<<<< HEAD
    HomeComponent,
    EmailComponent,
    PageNotFoundComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    ReactiveFormsModule,
=======
    HomeComponent
  ],
  imports: [
>>>>>>> 52ae5b67a6a95fe6414fa83d96b4fbca6384de08
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule, MatIconModule, MatButtonModule, MatChipsModule,
<<<<<<< HEAD
    MatGridListModule, MatMenuModule, MatInputModule,
    HttpClientModule, FormsModule, MatDialogModule,
  ],
  providers: [MessageService],
=======
    MatGridListModule
  ],
  providers: [],
>>>>>>> 52ae5b67a6a95fe6414fa83d96b4fbca6384de08
  bootstrap: [AppComponent]
})
export class AppModule { }
