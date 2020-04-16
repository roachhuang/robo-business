import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  MatDialog,
  MatDialogModule,
} from '@angular/material';
import { FeeComponent } from './fee/fee.component';
import { HomeComponent } from './home/home.component';
import { EmailComponent, DialogOverviewExampleDialog } from './email/email.component';
// import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { MessageService } from './services/message.service';

@NgModule({
  entryComponents: [DialogOverviewExampleDialog],
  declarations: [
    AppComponent,
    CourseComponent,
    FeeComponent,
    HomeComponent,
    EmailComponent,
    PageNotFoundComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    // ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule, MatIconModule, MatButtonModule, MatChipsModule,
    MatGridListModule, MatMenuModule, MatInputModule,
    // HttpClientModule, FormsModule,
     MatDialogModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
