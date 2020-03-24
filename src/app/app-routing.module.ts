import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { FeeComponent } from './fee/fee.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { EmailComponent } from './email/email.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'course', component: CourseComponent },
  { path: 'fee', component: FeeComponent },
  { path: 'email', component: EmailComponent},
  // a wildcard route to intercept invalid URLs and handle them gracefully
  { path: '**', component: PageNotFoundComponent }
=======

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'course', component: CourseComponent },
  { path: 'fee', component: FeeComponent },
>>>>>>> 52ae5b67a6a95fe6414fa83d96b4fbca6384de08
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }) // <-- debugging purposes only)],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
